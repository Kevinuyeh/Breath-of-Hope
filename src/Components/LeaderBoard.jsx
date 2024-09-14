// import React from 'react';
// import leaderboardData from '../Components/LeaderInput'; // Import the data
// import { FaMedal, FaStar } from 'react-icons/fa'; // Import medal and star icons from react-icons

// function LeaderBoard() {
//   return (
//     <div className='p-4 font-poppins'>

//       <h1 className='text-purp text-2xl md:text-3xl font-poppins text-center'>BOH LEADERSHIP BOARD</h1>
//       {/* Center the table and set a max width */}
//       <div className='overflow-x-auto mt-5 flex justify-center'>
//         <table className='min-w-[300px] max-w-[800px] w-full bg-white rounded-lg'>
//           <thead>
//             <tr className='bg-purp text-white'>
//               <th className='py-2 px-4 border-b'>Rank</th>
//               <th className='py-2 px-4 border-b'>Name</th>
//               <th className='py-2 px-4 border-b'>Total Score</th>
//               <th className='py-2 px-4 border-b'>Number of Link Clicks</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaderboardData.map((user, index) => (
//               <tr key={user.id} className='hover:bg-gray-100'>
//                 {/* Rank with Medal Icons for Top 3 */}
//                 <td className='py-2 px-4 border-b text-center'>
//                   {index === 0 ? (
//                     <FaMedal className='text-yellow-500 text-xl inline' />
//                   ) : index === 1 ? (
//                     <FaMedal className='text-gray-400 text-xl inline' />
//                   ) : index === 2 ? (
//                     <FaMedal className='text-yellow-700 text-xl inline' />
//                   ) : (
//                     index + 1
//                   )}
//                 </td>
//                 {/* User Name */}
//                 <td className='py-2 px-4 border-b text-center'>{user.name}</td>
//                 {/* Total Score with Star Icon */}
//                 <td className='py-2 px-4 border-b text-center'>
//                   <FaStar className='text-yellow-500 inline mr-1' /> {user.totalScore} points
//                 </td>
//                 {/* Number of Clicks */}
//                 <td className='py-2 px-4 border-b text-center'>{user.clicks} total clicks</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default LeaderBoard;




import React from 'react';
import leaderboardData from '../Components/LeaderInput'; // Import the data
import { FaMedal, FaStar } from 'react-icons/fa'; // Import medal and star icons from react-icons

function LeaderBoard() {
  return (
    <div className='p-4 font-poppins'>
      <h1 className='text-purp text-2xl md:text-3xl font-poppins text-center'>BOH LEADERSHIP BOARD</h1>
      {/* Center the table and set a max width */}
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
            {leaderboardData.map((user, index) => {
              // Check if this is the last person in the list
              const isOwner = index === leaderboardData.length - 1;
              return (
                <tr
                  key={user.id}
                  className={`${isOwner ? 'text-white' : 'hover:bg-gray-100'}`}
                >
                  {/* Rank with Medal Icons for Top 3 or Custom Background for Owner */}
                  <td className={`py-2 px-4 border-b text-center ${isOwner ? 'bg-lightpurp relative' : ''}`}>
                    {isOwner ? (
                      <div className='relative inline-block w-full'>
                        {/* Small Green Background at the far left */}
                        
                        <span className='relative z-10 pl-2'>12</span> {/* Owner's unique rank */}
                      </div>
                    ) : index === 0 ? (
                      <FaMedal className='text-yellow-500 text-xl inline' />
                    ) : index === 1 ? (
                      <FaMedal className='text-gray-400 text-xl inline' />
                    ) : index === 2 ? (
                      <FaMedal className='text-yellow-700 text-xl inline' />
                    ) : (
                      index + 1
                    )}
                  </td>
                  {/* User Name with Different Background for Owner */}
                  <td className={`py-2 px-4 border-b text-center ${isOwner ? 'bg-lightpurp' : ''}`}>{user.name}</td>
                  {/* Total Score with Star Icon with Different Background for Owner */}
                  <td className={`py-2 px-4 border-b text-center ${isOwner ? 'bg-lightpurp' : ''}`}>
                    <FaStar className='text-yellow-500 inline mr-1' /> {user.totalScore} points
                  </td>
                  {/* Number of Clicks with Different Background for Owner */}
                  <td className={`py-2 px-4 border-b text-center ${isOwner ? 'bg-lightpurp' : ''}`}>{user.clicks} total clicks</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
