import React, { useRef } from 'react';
import wave from '../Assets/wave.png';
import { FiUpload } from "react-icons/fi";
import { FaMedal } from "react-icons/fa";
import heroimg from '../Assets/Group 8.png';
import { Link } from 'react-router-dom';

function AdminHero() {
    // Create a reference to the hidden file input
    const fileInputRef = useRef(null);

    // Function to handle button click and open file picker
    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Function to handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file);
            // Add logic here to handle the selected file, like uploading or displaying it
        }
    };

    return (
        <div className='w-full font-poppins'>
            <div className='max-w-[1240px] grid md:grid-cols-2 mx-auto gap-12'>
                <div className='flex flex-col mt-5 md:mt-14'>
                    <div className='flex items-center justify-center space-x-2'>
                        <h1 className='text-bluebg text-2xl md:text-4xl font-bold'>WELCOME VICTOR AKAN</h1>
                        <img src={wave} alt='/img' className='w-[50px]' />
                    </div>

                    <div className='flex items-center justify-center space-x-5 mt-10 md:mt-20'>
                        {/* Button to Upload Video */}
                        <button 
                            className='flex items-center hover:bg-white hover:text-bluebg border border-bluebg bg-bluebg rounded-lg text-white p-2 mx-4 space-x-2'
                            onClick={handleUploadClick}
                        >
                            <FiUpload size={20} />
                            <h1>Upload New Video</h1>
                        </button>

                        {/* Hidden input for file upload */}
                        <input
                            type="file"
                            accept="video/*,image/*"  // Accept both videos and images
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"  // Hide the input
                        />

                        {/* Button to View Leadership Board */}
                       <Link to='/adminleaderboard'><button className='flex items-center border border-gray-800 hover:bg-bluebg hover:text-white bg-white rounded-lg text-bluebg p-2 mx-4 space-x-2'>
                            <FaMedal size={20} />
                            <h1>View Leadership board</h1>
                        </button></Link>
                    </div>
                </div>

                <img src={heroimg} alt='/img' className='mt-5 md:mt-14 mx-auto md:ml-auto ' />
            </div>

            <hr className="border-t border-gray-300 w-full mt-10" />
        </div>
    )
}

export default AdminHero;
