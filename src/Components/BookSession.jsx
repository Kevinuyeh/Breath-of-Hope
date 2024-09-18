// import React, { useState, useEffect } from 'react';

// // Image imports (you can replace these paths with actual image paths)
// import Image1 from '../Assets/Frame 1618869553.png';
// import Image2 from '../Assets/DGU.png';
// import Image3 from '../Assets/love.png';
// import Image4 from '../Assets/better.png';

// function BookSession() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Array of images
//   const images = [Image1, Image2, Image3, Image4];

//   // Update the image every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);

//     return () => clearInterval(interval); // Clean up the interval on component unmount
//   }, [images.length]);

//   return (
//     <div className='w-full bg-llblue mt-10 pb-10'>
//       <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
//         <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
//           <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">BOOK A SESSION WITH US</h1>
//           <p className="text-center max-w-md mb-6">
//             Have you ever struggled with emptiness? You are not alone in this world; we are here to help you restore your hope by booking a session and talking to our representative.
//           </p>

//           <form className="w-full max-w-lg space-y-4 mt-6">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="firstName" className="text-gray-700 mb-1">
//                   First Name
//                 </label>
//                 <input
//                   id="firstName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>

//               <div className="w-full md:w-1/2 flex flex-col">
//                 <label htmlFor="lastName" className="text-gray-700 mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   id="lastName"
//                   type="text"
//                   className="p-2 border border-gray-300 rounded-lg"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email" className="text-gray-700 mb-1 mt-5">
//                 Email Address
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="p-2 border border-gray-300 rounded-lg"
//               />
//             </div>

//             <button
//               type="submit"
//               className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
//             >
//               Book Session
//             </button>
//           </form>
//         </div>

//         {/* Image section, hidden on small screens */}
//         <div className="hidden lg:flex bg-lgreen p-4 md:pl-6 mx-auto mt-10 md:ml-auto lg:w-max">
//           <img
//             src={images[currentImageIndex]} // Use current image
//             alt="Session"
//             className="bg-lpurp p-6 md:pl-8 w-[500px]"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BookSession;





import React, { useState, useEffect } from 'react';

// Image imports (you can replace these paths with actual image paths)
import Image1 from '../Assets/Frame 1618869553.png';
import Image2 from '../Assets/DGU.png';
import Image3 from '../Assets/love.png';
import Image4 from '../Assets/better.png';

function BookSession() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // State for controlling the visibility

  // Array of images
  const images = [Image1, Image2, Image3, Image4];

  // Handle image change every 3 seconds with a fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade-out

      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Change image
        setIsVisible(true); // Start fade-in
      }, 1000); // Duration of fade-out before changing image (1 second)

    }, 5000); // Wait for 5 seconds before changing to the next image (including fade time)

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className='w-full bg-llblue mt-10 pb-10'>
      <div className='max-w-[1240px] grid md:grid-cols-2 gap-5 mx-auto'>
        <div className="flex flex-col items-center bg-white rounded-md mt-10 font-poppins p-4">
          <h1 className="text-fblue text-center text-2xl md:text-4xl mt-3 mb-4">BOOK A SESSION WITH US</h1>
          <p className="text-center max-w-md mb-6">
            Have you ever struggled with emptiness? You are not alone in this world; we are here to help you restore your hope by booking a session and talking to our representative.
          </p>

          <form className="w-full max-w-lg space-y-4 mt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2 flex flex-col">
                <label htmlFor="firstName" className="text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col">
                <label htmlFor="lastName" className="text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  className="p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-1 mt-5">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="p-2 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="bg-purp text-white w-[250px] justify-center flex mx-auto py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 mt-6"
            >
              Book Session
            </button>
          </form>
        </div>

        {/* Image section, hidden on small screens */}
        <div className="hidden lg:flex bg-lgreen p-4 md:pl-6 mx-auto mt-10 md:ml-auto lg:w-max">
          <img
            src={images[currentImageIndex]} // Use current image
            alt="Session"
            className={`bg-lpurp p-6 md:pl-8 w-[500px] transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`} // Apply fade effect with a 1-second duration
          />
        </div>
      </div>
    </div>
  );
}

export default BookSession;
