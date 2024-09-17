import React, { useState } from 'react';
import Nav from './Nav';
import { FaMedal, FaSearch, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import adminleaderboardData from './AdminLeaderInput';

function AdminLeaderBoard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    
    const itemsPerPage = 15;
    const totalPages = Math.ceil(adminleaderboardData.length / itemsPerPage);

    
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); 
    };

    
    const filteredData = adminleaderboardData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    
    const totalFilteredPages = Math.ceil(filteredData.length / itemsPerPage);

    
    const currentData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    
    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    
    const goToNextPage = () => {
        if (currentPage < totalFilteredPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='w-full font-poppins pb-5'>
            <Nav />
            <div className='flex flex-col mx-auto'>
                <h1 className='text-purp font-semibold text-2xl md:text-3xl font-poppins text-center mt-5'>
                    BOH LEADERSHIP BOARD
                </h1>
                <p className='text-bluebg text-center tracking-wide mt-3'>
                    View and monitor users rank and score
                </p>
                <div className="flex items-center relative mt-5 justify-center w-full">
                    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg">
                        <input
                            type="text"
                            placeholder="Search users by name..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="p-2 bg-lblue border border-gray-300 rounded-full w-full pr-10 pl-4"
                        />
                        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                </div>
            </div>

            <div className='overflow-x-auto mt-5 flex justify-center'>
                <table className='min-w-[300px] max-w-[800px] w-full bg-white rounded-lg'>
                    <thead>
                        <tr className='bg-purp text-white'>
                            <th className='py-2 px-4 border-b'>Rank</th>
                            <th className='py-2 px-4 border-b'>Name</th>
                            <th className='py-2 px-4 border-b'>Total Score</th>
                            <th className='py-2 px-4 border-b'>Number of Link Clicks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.length > 0 ? (
                            currentData.map((user, index) => (
                                <tr key={user.id} className="hover:bg-gray-100">
                                    
                                    <td className='py-2 px-4 border-b text-center'>
                                        {index + (currentPage - 1) * itemsPerPage === 0 ? (
                                            <FaMedal className='text-yellow-500 text-xl inline' />
                                        ) : index + (currentPage - 1) * itemsPerPage === 1 ? (
                                            <FaMedal className='text-gray-400 text-xl inline' />
                                        ) : index + (currentPage - 1) * itemsPerPage === 2 ? (
                                            <FaMedal className='text-yellow-700 text-xl inline' />
                                        ) : (
                                            index + 1 + (currentPage - 1) * itemsPerPage
                                        )}
                                    </td>
                                    <td className='py-2 px-4 border-b text-center'>{user.name}</td>
                                    <td className='py-2 px-4 border-b text-center'>
                                        <FaStar className='text-yellow-500 inline mr-1' /> {user.totalScore} points
                                    </td>
                                    <td className='py-2 px-4 border-b text-center'>{user.clicks} total clicks</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">
                                    No users found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            
            <div className="flex justify-center mt-4 items-center space-x-4">
                
                <button
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-full border ${
                        currentPage === 1 ? 'text-gray-400' : 'text-black'
                    }`}
                >
                    <FaChevronLeft />
                </button>

                
                <div className="flex space-x-2">
                    {[...Array(totalFilteredPages)].map((_, pageIndex) => (
                        <button
                            key={pageIndex + 1}
                            onClick={() => setCurrentPage(pageIndex + 1)}
                            className={`px-3 py-1 rounded-full border ${
                                currentPage === pageIndex + 1 ? 'bg-purp text-white' : 'bg-white text-black'
                            }`}
                        >
                            {pageIndex + 1}
                        </button>
                    ))}
                </div>

                
                <button
                    onClick={goToNextPage}
                    disabled={currentPage === totalFilteredPages}
                    className={`px-3 py-1 rounded-full border ${
                        currentPage === totalFilteredPages ? 'text-gray-400' : 'text-black'
                    }`}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}

export default AdminLeaderBoard;
