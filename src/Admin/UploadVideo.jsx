// import React, { useState } from 'react';
// import Nav from './Nav';
// import { FaArrowLeft, FaSave, FaUpload } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// function UploadVideo() {
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
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Link</label>
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

//         <div className="w-full max-w-md lg:max-w-2xl mb-6 p-8 border-dotted border-2 border-bluebg rounded-lg flex flex-col items-center justify-center cursor-pointer">
//           <FaUpload size={30} className="text-bluebg mb-2" />
//           <label htmlFor="image-upload" className="text-bluebg text-lg mb-2 cursor-pointer">
//             Click to upload an image
//           </label>
//           <p className="text-bluebg text-sm">Maximum file size is 10MB</p>
//           <input
//             id="image-upload"
//             type="file"
//             accept="image/*"
//             className="hidden"
//           />
//         </div>


//         <div className="w-full max-w-md lg:max-w-2xl mb-6 p-8 border-dotted border-2 border-bluebg rounded-lg flex flex-col items-center justify-center cursor-pointer">
//           <FaUpload size={30} className="text-bluebg mb-2" />
//           <label htmlFor="video-upload" className="text-bluebg text-lg mb-2 cursor-pointer">
//             Click to upload a video
//           </label>
//           <p className="text-bluebg text-sm">Maximum file size is 10MB</p>
//           <input
//             id="video-upload"
//             type="file"
//             accept="video/*"
//             className="hidden"
//           />
//         </div>


//         <button className="flex items-center bg-bluebg text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
//           <FaSave className="mr-2" />
//           Save Changes
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UploadVideo;









import React, { useState } from 'react';
import Nav from './Nav';
import { FaArrowLeft, FaSave, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';

function UploadVideo() {
  const [videoTitle, setVideoTitle] = useState('');
  const [embeddedLink, setEmbeddedLink] = useState('');
  const [videoSummary, setVideoSummary] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const wordLimit = 100;

  // Handle video summary input limit
  const handleSummaryChange = (e) => {
    if (e.target.value.split(' ').length <= wordLimit) {
      setVideoSummary(e.target.value);
    }
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle video file selection
  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append('title', videoTitle);
    formData.append('link', embeddedLink);
    formData.append('summary', videoSummary);
    formData.append('image', image); // append image file
    formData.append('video', video); // append video file

    try {
      // Send POST request to the backend with the form data
      const response = await axios.post('https://boh-c5a2.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Upload successful:', response.data);
      // Handle success (e.g., show success message or redirect)
    } catch (error) {
      console.error('Upload failed:', error);
      // Handle failure (e.g., show error message)
    }
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
        {/* Video Title Input */}
        <div className="w-full max-w-md lg:max-w-2xl mb-6">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Title</label>
          <input
            type="text"
            placeholder="Type here"
            value={videoTitle}
            onChange={(e) => setVideoTitle(e.target.value)}
            className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Embedded Link Input */}
        <div className="w-full max-w-md lg:max-w-2xl mb-6">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Link</label>
          <input
            type="text"
            placeholder="Paste link here"
            value={embeddedLink}
            onChange={(e) => setEmbeddedLink(e.target.value)}
            className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Video Summary Input */}
        <div className="w-full max-w-md lg:max-w-2xl mb-6 relative">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Summary</label>
          <textarea
            value={videoSummary}
            onChange={handleSummaryChange}
            placeholder="Type here"
            className="w-full h-28 p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="absolute bottom-2 right-2 text-gray-400 text-sm">100 words limit</p>
        </div>

        {/* Image Upload Input */}
        <div className="w-full max-w-md lg:max-w-2xl mb-6 p-8 border-dotted border-2 border-bluebg rounded-lg flex flex-col items-center justify-center cursor-pointer">
          <FaUpload size={30} className="text-bluebg mb-2" />
          <label htmlFor="image-upload" className="text-bluebg text-lg mb-2 cursor-pointer">
            Click to upload an image
          </label>
          <p className="text-bluebg text-sm">Maximum file size is 10MB</p>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Video Upload Input */}
        <div className="w-full max-w-md lg:max-w-2xl mb-6 p-8 border-dotted border-2 border-bluebg rounded-lg flex flex-col items-center justify-center cursor-pointer">
          <FaUpload size={30} className="text-bluebg mb-2" />
          <label htmlFor="video-upload" className="text-bluebg text-lg mb-2 cursor-pointer">
            Click to upload a video
          </label>
          <p className="text-bluebg text-sm">Maximum file size is 10MB</p>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleVideoChange}
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="flex items-center bg-bluebg text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          <FaSave className="mr-2" />
          Upload Video
        </button>
      </div>
    </div>
  );
}

export default UploadVideo;
