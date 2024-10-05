// import React, { useState } from 'react';
// import Nav from './Nav';
// import { FaArrowLeft, FaSave, FaUpload } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function UploadVidLink() {
//   const [videoSummary, setVideoSummary] = useState('');
//   const wordLimit = 100;

//   const handleSummaryChange = (e) => {
//     if (e.target.value.split(' ').length <= wordLimit) {
//       setVideoSummary(e.target.value);
//     }
//   };

//   return (
//     <div className="w-full font-poppins pb-5">
//       <Nav />
//       <div className="flex items-center p-8 gap-3">
//         <Link to='/admin'><FaArrowLeft size={20} /></Link>
//         <h1 className="text-bluebg text-xl md:text-2xl">Upload New Video</h1>
//       </div>
//       <hr className="border-t border-gray-300 w-full mt-2" />

//       <div className="flex flex-col p-4 items-center mt-8">

//         <div className="w-full max-w-md lg:max-w-2xl mb-6">
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Title</label>
//           <input
//             type="text"
//             placeholder="Type here"
//             className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>


//         <div className="w-full max-w-md lg:max-w-2xl mb-6">
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Video Link</label>
//           <input
//             type="text"
//             placeholder="Paste link here"
//             className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>


//         <div className="w-full max-w-md lg:max-w-2xl mb-6 relative">
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Summary</label>
//           <textarea
//             value={videoSummary}
//             onChange={handleSummaryChange}
//             placeholder="Type here"
//             className="w-full h-28 p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <p className="absolute bottom-2 right-2 text-gray-400 text-sm">100 words limit</p>
//         </div>

// <div className="w-full max-w-md lg:max-w-2xl mb-6">
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Image Link</label>
//           <input
//             type="text"
//             placeholder="Paste link here"
//             className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>


//         <button className="flex items-center bg-bluebg text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//           <FaUpload className="mr-2" />
//           Upload Video
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UploadVidLink;






import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import Nav from './Nav';
import { FaArrowLeft, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Modal Component for displaying upload status
function UploadStatusModal({ isOpen, status, onClose }) {
  if (!isOpen) return null; // If modal is closed, return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {status === 'loading' && (
          <div>
            <p className="text-lg mb-2">Uploading video...</p>
            <div className="loader"></div>
          </div>
        )}
        {status === 'success' && (
          <div>
            <p className="text-lg text-green-600">Video uploaded successfully!</p>
            <button
              onClick={onClose}
              className="mt-4 bg-bluebg text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
        {status === 'error' && (
          <div>
            <p className="text-lg text-red-600">Upload failed. Please try again.</p>
            <button
              onClick={onClose}
              className="mt-4 bg-bluebg text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function UploadVidLink() {
  const [videoDetails, setVideoDetails] = useState({
    title: '',
    link: '',
    summary: '',
    image: ''
  });
  const [videoSummary, setVideoSummary] = useState('');
  const [uploadStatus, setUploadStatus] = useState(''); // To track upload status
  const [isModalOpen, setIsModalOpen] = useState(false); // To track if the modal is open
  const wordLimit = 100;
  const videoUrl = 'https://youtu.be/HtJKUQXmtok?si=WQ-xTEIOr17lYz7O'; // Video URL PARAMS
  const getVideoDetailsUrl = `https://boh-c5a2.onrender.com/video?url=${encodeURIComponent(videoUrl)}`;

  // Fetch video details (GET Request)
  useEffect(() => {
    axios
      .get(getVideoDetailsUrl)
      .then((response) => {
        const { title, description: summary, thumbnailUrl: image } = response.data; // Assuming these fields exist in the response
        setVideoDetails({ title, link: videoUrl, summary, image });
        setVideoSummary(summary);
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
      });
  }, [getVideoDetailsUrl]);

  // Handle changes to video details input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVideoDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSummaryChange = (e) => {
    if (e.target.value.split(' ').length <= wordLimit) {
      setVideoSummary(e.target.value);
      setVideoDetails((prevDetails) => ({
        ...prevDetails,
        summary: e.target.value
      }));
    }
  };

  // Handle video upload (POST Request)
  const handleVideoUpload = () => {
    setIsModalOpen(true); // Open modal
    setUploadStatus('loading'); // Set status to loading

    axios
      .post('http://127.0.0.1:5001/video', videoDetails)
      .then((response) => {
        setUploadStatus('success'); // Set status to success
      })
      .catch((error) => {
        setUploadStatus('error'); // Set status to error
        console.error('Error uploading video:', error);
      });
  };

  return (
    <div className="w-full font-poppins pb-5">
      <Nav />
      <div className="flex items-center p-8 gap-3">
        <Link to='/admin'><FaArrowLeft size={20} /></Link>
        <h1 className="text-bluebg text-xl md:text-2xl">Upload New Video</h1>
      </div>
      <hr className="border-t border-gray-300 w-full mt-2" />

      <div className="flex flex-col p-4 items-center mt-8">
        <div className="w-full max-w-md lg:max-w-2xl mb-6">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Title</label>
          <input
            type="text"
            name="title"
            value={videoDetails.title}
            onChange={handleInputChange}
            placeholder="Type here"
            className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full max-w-md lg:max-w-2xl mb-6">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Video Link</label>
          <input
            type="text"
            name="link"
            value={videoDetails.link}
            onChange={handleInputChange}
            placeholder="Paste link here"
            className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="w-full max-w-md lg:max-w-2xl mb-6 relative">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Summary</label>
          <textarea
            name="summary"
            value={videoSummary}
            onChange={handleSummaryChange}
            placeholder="Type here"
            className="w-full h-28 p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="absolute bottom-2 right-2 text-gray-400 text-sm">100 words limit</p>
        </div>

        <div className="w-full max-w-md lg:max-w-2xl mb-6">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Image Link</label>
          <input
            type="text"
            name="image"
            value={videoDetails.image}
            onChange={handleInputChange}
            placeholder="Paste link here"
            className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={handleVideoUpload}
          className="flex items-center bg-bluebg text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <FaUpload className="mr-2" />
          Upload Video
        </button>
      </div>

      {/* Modal for Upload Status */}
      <UploadStatusModal
        isOpen={isModalOpen}
        status={uploadStatus}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default UploadVidLink;

