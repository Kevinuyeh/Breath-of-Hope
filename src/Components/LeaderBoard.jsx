import React from 'react';
import leaderboardData from '../Components/LeaderInput';
import { FaMedal, FaStar } from 'react-icons/fa';

function LeaderBoard() {
  return (
    <div className='p-4 font-poppins'>
      <h1 className='text-purp text-2xl md:text-3xl font-poppins text-center'>BOH LEADERSHIP BOARD</h1>

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

              const isOwner = index === leaderboardData.length - 1;
              return (
                <tr
                  key={user.id}
                  className={`${isOwner ? 'text-white' : 'hover:bg-gray-100'}`}
                >

                  <td className={`py-2 px-4 border-b text-center ${isOwner ? 'bg-lightpurp relative' : ''}`}>
                    {isOwner ? (
                      <div className='relative inline-block w-full'>


                        <span className='relative z-10 pl-2'>12</span>
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

                  <td className={`py-2 px-4 border-b text-center ${isOwner ? 'bg-lightpurp' : ''}`}>{user.name}</td>

                  <td className={`py-2 px-4 border-b text-center ${isOwner ? 'bg-lightpurp' : ''}`}>
                    <FaStar className='text-yellow-500 inline mr-1' /> {user.totalScore} points
                  </td>

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
