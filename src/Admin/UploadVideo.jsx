// import React, { useState } from 'react';
// import Nav from './Nav';
// import { FaArrowLeft, FaSave, FaUpload } from 'react-icons/fa';

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
//         <FaArrowLeft size={20} />
//         <h1 className="text-bluebg text-xl md:text-1xl">Upload New Video</h1>
//       </div>
//       <hr className="border-t border-gray-300 w-full mt-2" />

//       <div className="flex flex-col items-center mt-8">
//         {/* Video Title Input */}
//         <div className="w-full max-w-md mb-6">
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Title</label>
//           <input
//             type="text"
//             placeholder="Type here"
//             className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Embedded Link Input */}
//         <div className="w-full max-w-md mb-6">
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Link</label>
//           <input
//             type="text"
//             placeholder="Paste link here"
//             className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>

//         {/* Video Summary Input */}
//         <div className="w-full max-w-md mb-6 relative">
//           <label className="block text-gray-700 text-lg mb-2 tracking-wider">Video Summary</label>
//           <textarea
//             value={videoSummary}
//             onChange={handleSummaryChange}
//             placeholder="Type here"
//             className="w-full h-28 p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <p className="absolute bottom-2 right-2 text-gray-400 text-sm">100 words limit</p>
//         </div>

//         {/* Image Upload Box */}
//         <div className="w-full max-w-md mb-6 p-8 border-dotted border-2 border-bluebg rounded-lg flex flex-col items-center justify-center">
//           <FaUpload size={30} className="text-gray-500 mb-2" />
//           <p className="text-gray-500 text-lg mb-2">Click to upload</p>
//           <p className="text-gray-400 text-sm">Maximum file size is 10MB</p>
//         </div>

//         {/* Save Button */}
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

function UploadVideo() {
  const [videoSummary, setVideoSummary] = useState('');
  const wordLimit = 100;

  const handleSummaryChange = (e) => {
    if (e.target.value.split(' ').length <= wordLimit) {
      setVideoSummary(e.target.value);
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
            className="w-full p-3 border border-bluebg rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Embedded Link Input */}
        <div className="w-full max-w-md lg:max-w-2xl mb-6">
          <label className="block text-gray-700 text-lg mb-2 tracking-wider">Embedded Link</label>
          <input
            type="text"
            placeholder="Paste link here"
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

        {/* Image Upload Box */}
        <div className="w-full max-w-md lg:max-w-2xl mb-6 p-8 border-dotted border-2 border-bluebg rounded-lg flex flex-col items-center justify-center">
          <FaUpload size={30} className="text-bluebg mb-2" />
          <p className="text-bluebg text-lg mb-2">Click to upload</p>
          <p className="text-bluebg text-sm">Maximum file size is 10MB</p>
        </div>

        {/* Save Button */}
        <button className="flex items-center bg-bluebg text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          <FaSave className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default UploadVideo;
