import React, { useEffect, useRef, useState,  } from 'react'
import Navbar from '../Components/Navbar'
import { FaChevronDown, FaSearch, FaYoutube } from 'react-icons/fa'
import videoData from '../Components/VideoInput';
import { Link } from 'react-router-dom';

function VideoPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTopic, setSelectedTopic] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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




    return (
        <div className='w-full'>
            <Navbar />
            <h1 className='text-purp font-semibold text-2xl md:text-3xl font-poppins text-center mt-5'>
                BOH VIDEOS AND PODCASTS
            </h1>

            {/* <div className='flex flex-col md:flex-row gap-5 mx-auto md:space-x-8'>
                    <div className="flex items-center relative justify-center">
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
                </div> */}














<div className="flex justify-center items-center mt-5">
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
        <div className="flex items-center relative justify-center">
            <input
                type="text"
                placeholder="Search videos..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="p-2 bg-lblue border border-gray-300 rounded-full w-full md:w-80 pr-10"
            />
            <FaSearch className="absolute right-3 text-gray-500" />
        </div>

        <div className="relative w-full md:w-80" ref={dropdownRef}>
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
</div>


<div className="max-w-[1240px] mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-5 p-4 mx-auto">
        {videoData.map((item, id) => (
          <div key={id} className="font-poppins flex flex-col border py-2">
            <img src={item.image} alt='/img' className="rounded-md w-[300px] mx-auto" />
            <h1 className="mt-3 mb-3 text-center font-semibold">{item.name}</h1>
            <p className="text-center mx-auto max-w-sm p-2">{item.text}</p>
            <Link to={`/item/${item.id}`}>
              <button className="mx-auto flex mt-3 mb-3 items-center bg-red-600 text-white font-semibold py-2 min-w-full max-w-md justify-center text-sm md:py-2 md:px-4 rounded-lg hover:bg-red-700 transition duration-300">
                <FaYoutube className="mr-2" size={15} />
                Watch on YouTube
              </button>
            </Link>
          </div>
        ))}
      </div>
        </div>
    )
}

export default VideoPage