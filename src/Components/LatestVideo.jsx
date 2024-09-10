import React, { useState, useRef, useEffect } from 'react';
import { FaSearch, FaChevronDown, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import videoData from './VideoInput';

function LatestVideo() {
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

  const videoId = 'ohig84P3aSE';

  const opts = {
    height: '500',
    width: '1200',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="w-full p-2">
      <h1 className="font-poppins text-2xl md:text-3xl p-3 mt-10 mx-10 md:mx-20">
        Latest Video
      </h1>

      <div className="flex p-3 w-full h-full justify-center">
        <div className="rounded-lg overflow-hidden">
          <YouTube videoId={videoId} opts={opts} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-5 md:gap-10 p-3 md:mt-10 mx-10 md:mx-20">
        <h1 className="font-poppins text-2xl md:text-3xl">
          Other Videos
        </h1>

        <div className="flex items-center relative md:ml-auto">
          <input
            type="text"
            placeholder="Search videos..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 bg-lblue border border-gray-300 rounded-md w-full md:w-60 pr-10"
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

      <div className='max-w-[1240px] mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-5 p-4 mx-auto'>
        {videoData.map((item, id) => (

        <div key={id} className='font-poppins flex flex-col border py-2'>
            <img src={item.image} alt='/img'
             className='rounded-md w-[300px] mx-auto' />
             <h1 className='mt-3 mb-3 text-center font-semibold'>{item.name}</h1>
             <p className='text-center mx-auto max-w-sm p-2'>{item.text}</p>
             <Link to={`/item/${item.id}`}><button className="mx-auto flex mt-3 mb-3 items-center bg-red-600 text-white font-semibold py-2 min-w-full max-w-md justify-center text-sm md:py-2 md:px-4 rounded-lg hover:bg-red-700 transition duration-300">
      <FaYoutube className="mr-2" size={15} />
      Watch on YouTube
    </button></Link>
        </div>
        ))}
      </div>
        <div className="mt-5 flex mx-auto justify-center items-center gap-2">
  <Link className="flex items-center gap-2">
    <h2 className="text-blue2 font-poppins">See More Videos</h2>
    <FaChevronDown size={12} className="text-blue2" />
  </Link>
</div>

    </div>
  );
}

export default LatestVideo;
