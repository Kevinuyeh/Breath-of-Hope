// import React, { useState, useRef, useEffect } from 'react';
// import { FaSearch, FaChevronDown } from 'react-icons/fa';
// import { FiEdit, FiUpload } from 'react-icons/fi';
// import UploadData from './UploadInput';

// function EditVideo() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [selectedTopic, setSelectedTopic] = useState('');
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const dropdownRef = useRef(null);

//     const topics = ['Depression', 'Lust', 'Anger', 'Finances', 'Discipline'];

//     const handleSearchChange = (e) => setSearchTerm(e.target.value);

//     const handleTopicChange = (topic) => {
//         setSelectedTopic(topic);
//         setIsDropdownOpen(false);
//     };

//     const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

//     const handleClickOutside = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setIsDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClickOutside);
//         return () => document.removeEventListener('mousedown', handleClickOutside);
//     }, []);


//     // Create a reference to the hidden file input
//     const fileInputRef = useRef(null);

//     // Function to handle button click and open file picker
//     const handleUploadClick = () => {
//         if (fileInputRef.current) {
//             fileInputRef.current.click();
//         }
//     };

//     // Function to handle file selection
//     const handleFileChange = (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             console.log("Selected file:", file);
//             // Add logic here to handle the selected file, like uploading or displaying it
//         }
//     };


//     const [isEditing, setIsEditing] = useState(false); // For showing the edit popup
//     const [selectedItem, setSelectedItem] = useState(null); // For tracking which item is being edited
//     const [name, setName] = useState('');
//     const [text, setText] = useState('');

//     const handleEditClick = (item) => {
//         setSelectedItem(item); // Set the item being edited
//         setName(item.name); // Set initial name and text
//         setText(item.text);
//         setIsEditing(true); // Show the popup
//     };

//     const handleSaveChanges = () => {
//         // Update the selected item's details
//         const updatedItem = { ...selectedItem, name, text };

//         // Find the index of the item in the original data and update it
//         const updatedUploadData = UploadData.map((item) =>
//             item === selectedItem ? updatedItem : item
//         );

//         // Here, you would also update the backend or state with updatedUploadData

//         setIsEditing(false); // Hide the popup
//         setSelectedItem(null); // Clear the selected item
//     };

//     return (
//         <div className='w-full font-poppins p-4'>
//             <div className='flex flex-col'>
//                 <h1 className='text-bluebg p-3 text-2xl md:text-3xl md:mx-20'>Edit Video</h1>
//                 <p className='md:mx-20 text-bluebg p-3 font-light'>
//                     Make changes to uploaded videos
//                 </p>
//             </div>
//             <div className='max-w-[1240px] grid md:grid-cols-2 gap-12 items-center mx-auto'>
//                 <div className='flex flex-col md:flex-row gap-5 mx-auto md:space-x-8'>
//                     <div className="flex items-center relative md:ml-auto">
//                         <input
//                             type="text"
//                             placeholder="Search videos..."
//                             value={searchTerm}
//                             onChange={handleSearchChange}
//                             className="p-2 bg-lblue border border-gray-300 rounded-full w-full md:w-60 pr-10"
//                         />
//                         <FaSearch className="absolute right-3 text-gray-500" />
//                     </div>

//                     <div className="relative w-full md:w-60" ref={dropdownRef}>
//                         <div
//                             onClick={toggleDropdown}
//                             className="flex items-center p-2 bg-lblue border border-gray-300 rounded-md cursor-pointer"
//                             style={{ zIndex: 10 }}
//                         >
//                             <span className="flex-1">{selectedTopic || 'Filter by topics'}</span>
//                             <FaChevronDown
//                                 className={`transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
//                             />
//                         </div>
//                         {isDropdownOpen && (
//                             <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md w-full z-20">
//                                 {topics.map((topic, index) => (
//                                     <div
//                                         key={index}
//                                         onClick={() => handleTopicChange(topic)}
//                                         className="p-2 hover:bg-gray-100 cursor-pointer"
//                                     >
//                                         {topic}
//                                     </div>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 </div>

//             <div className='md:ml-auto mx-auto'>
//                 <button
//                     className='flex items-center hover:bg-white hover:text-bluebg border text-center border-bluebg bg-bluebg rounded-lg text-white p-2 mx-4 space-x-2'
//                     onClick={handleUploadClick}
//                 >
//                     <FiUpload size={20} />
//                     <h1>Upload New Video</h1>
//                 </button>

//                 {/* Hidden input for file upload */}
//                 <input
//                     type="file"
//                     accept="video/*,image/*"  // Accept both videos and images
//                     ref={fileInputRef}
//                     onChange={handleFileChange}
//                     className="hidden"  // Hide the input
//                 />
//                 </div>
//             </div>



//             <div className='flex flex-col mx-auto space-y-4 mt-10 items-center justify-center'>
//             {/* Video Items */}
//             {UploadData.map((item, id) => (
//                 <div key={id} className='flex flex-col md:flex-row w-full max-w-[900px] bg-lightblue p-2 items-center rounded-lg'>
//                     {/* Video Thumbnail */}
//                     <img src={item.image} alt='/img' className='rounded-md w-[150px] mr-4' />
                    
//                     {/* Video Name and Text */}
//                     <div className='flex-1'>
//                         <h1 className='text-bluebg text-center text-xl font-semibold'>{item.name}</h1>
//                         <p className='text-gray-700'>{item.text}</p>
//                     </div>

//                     {/* Edit Button with Icon */}
//                     <button
//                         className='flex items-center rounded-lg bg-transparent border border-bluebg p-2 px-3 ml-4 hover:bg-bluebg hover:text-white'
//                         onClick={() => handleEditClick(item)} // Pass the item to edit
//                     >
//                         <FiEdit size={16} className='mr-2' />
//                         Edit Video
//                     </button>
//                 </div>
//             ))}

//             {/* Popup for Editing */}
//             {isEditing && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
//                         <h2 className='text-bluebg text-xl mb-4'>Edit Video Details</h2>

//                         <label className='block text-gray-700 mb-2'>Video Name</label>
//                         <input
//                             type='text'
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className='w-full p-2 mb-4 border border-gray-300 rounded-lg'
//                         />

//                         <label className='block text-gray-700 mb-2'>Description</label>
//                         <textarea
//                             value={text}
//                             onChange={(e) => setText(e.target.value)}
//                             className='w-full p-2 border border-gray-300 rounded-lg'
//                         />

//                         <div className='flex justify-end mt-4'>
//                             <button
//                                 onClick={handleSaveChanges}
//                                 className='bg-bluebg text-white p-2 rounded-lg hover:bg-blue-700'
//                             >
//                                 Save Changes
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//         </div>
//     )
// }

// export default EditVideo









import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiEdit, FiUpload } from 'react-icons/fi';
import UploadData from './UploadInput';
import { Link } from 'react-router-dom';

function EditVideo() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;
    const totalPages = Math.ceil(UploadData.length / itemsPerPage);
    const pageNumbersToShow = 5; // Show 5 page numbers

    const dropdownRef = useRef(null);

    const topics = ['Depression', 'Lust', 'Anger', 'Finances', 'Discipline'];

    const handleSearchChange = (e) => setSearchTerm(e.target.value);

    const handleTopicChange = (topic) => {
        setSelectedTopic(topic);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };

    const [isEditing, setIsEditing] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [name, setName] = useState('');
    const [text, setText] = useState('');

    const handleEditClick = (item) => {
        setSelectedItem(item);
        setName(item.name);
        setText(item.text);
        setIsEditing(true);
    };

    const handleSaveChanges = () => {
        const updatedItem = { ...selectedItem, name, text };
        const updatedUploadData = UploadData.map((item) =>
            item === selectedItem ? updatedItem : item
        );
        setIsEditing(false);
        setSelectedItem(null);
    };

    const handlePageChange = (page) => setCurrentPage(page);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const renderPageNumbers = () => {
        const startPage = Math.max(1, currentPage - Math.floor(pageNumbersToShow / 2));
        const endPage = Math.min(totalPages, startPage + pageNumbersToShow - 1);

        const pageNumbers = [];
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={`px-4 py-2 ${currentPage === i ? 'bg-purp text-white rounded-lg' : 'bg-white text-bluebg'}`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = UploadData.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='w-full font-poppins p-4'>
            <div className='flex flex-col'>
                <h1 className='text-bluebg p-3 text-2xl md:text-3xl md:mx-20'>Edit Video</h1>
                <p className='md:mx-20 text-bluebg p-3 font-light'>
                    Make changes to uploaded videos
                </p>
            </div>
            <div className='max-w-[1240px] grid md:grid-cols-2 gap-12 items-center mx-auto'>
                <div className='flex flex-col md:flex-row gap-5 mx-auto md:space-x-8'>
                    <div className="flex items-center relative md:ml-auto">
                        <input
                            type="text"
                            placeholder="Search videos..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="p-2 bg-lblue border border-gray-300 rounded-full w-full md:w-60 pr-10"
                        />
                        <FaSearch className="absolute right-3 text-gray-500" />
                    </div>

                    <div className="relative w-full md:w-60" ref={dropdownRef}>
                        <div
                            onClick={toggleDropdown}
                            className="flex items-center p-2 bg-lblue border border-gray-300 rounded-md cursor-pointer"
                            style={{ zIndex: 10 }}
                        >
                            <span className="flex-1">{selectedTopic || 'Filter by topics'}</span>
                            <FaChevronDown
                                className={`transition-transform duration-200 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                            />
                        </div>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-md w-full z-20">
                                {topics.map((topic, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleTopicChange(topic)}
                                        className="p-2 hover:bg-gray-100 cursor-pointer"
                                    >
                                        {topic}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className='md:ml-auto mx-auto'>
                   <Link to='/uploadvideo'> <button
                        className='flex items-center hover:bg-white hover:text-bluebg border text-center border-bluebg bg-bluebg rounded-lg text-white p-2 mx-4 space-x-2'
                       
                    >
                        <FiUpload size={20} />
                        <h1>Upload New Video</h1>
                    </button></Link>
                    
                </div>
            </div>

            <div className='flex flex-col mx-auto space-y-4 mt-10 items-center justify-center'>
                {/* Display the current items */}
                {currentItems.map((item, id) => (
                    <div key={id} className='flex flex-col md:flex-row w-full max-w-[900px] bg-lightblue p-2 items-center rounded-lg'>
                        <img src={item.image} alt='/img' className='rounded-md w-[150px] mr-4' />
                        <div className='flex-1'>
                            <h1 className='text-bluebg text-center text-xl font-semibold'>{item.name}</h1>
                            <p className='text-gray-700'>{item.text}</p>
                        </div>
                        <button
                            className='flex items-center rounded-lg bg-transparent border border-bluebg p-2 px-3 ml-4 hover:bg-bluebg hover:text-white'
                            onClick={() => handleEditClick(item)}
                        >
                            <FiEdit size={16} className='mr-2' />
                            Edit Video
                        </button>
                    </div>
                ))}

                {/* Pagination controls with navigation arrows */}
                <div className='flex justify-end space-x-2 mt-4'>
                    <button
                        onClick={goToPreviousPage}
                        className={`px-4 py-2 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'bg-white text-bluebg'}`}
                        disabled={currentPage === 1}
                    >
                        <FaChevronLeft />
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={goToNextPage}
                        className={`px-4 py-2 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'bg-white text-bluebg'}`}
                        disabled={currentPage === totalPages}
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Edit popup */}
            {isEditing && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                        <h2 className='text-bluebg text-xl mb-4'>Edit Video Details</h2>
                        <label className='block text-gray-700 mb-2'>Video Name</label>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className='w-full p-2 mb-4 border rounded'
                        />
                        <label className='block text-gray-700 mb-2'>Description</label>
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className='w-full p-2 mb-4 border rounded'
                        />
                        <div className='flex justify-end space-x-2'>
                            <button className='px-4 py-2 bg-gray-300 rounded' onClick={() => setIsEditing(false)}>
                                Cancel
                            </button>
                            <button className='px-4 py-2 bg-bluebg text-white rounded' onClick={handleSaveChanges}>
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EditVideo;
