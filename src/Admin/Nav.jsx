import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown, AiOutlineUp, AiOutlineEdit } from 'react-icons/ai';
import { FaVideo, FaMedal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../Assets/image 2.png';
import logo2 from '../Assets/image 392.png';

function Nav() {
  const [nav, setNav] = useState(false);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedProfileId, setSelectedProfileId] = useState(1); 
  const [profiles, setProfiles] = useState([
    { id: 1, name: 'Profile 1', image: '/path/to/default-profile1.png' },
    { id: 2, name: 'Profile 2', image: '/path/to/default-profile2.png' },
    { id: 3, name: 'Profile 3', image: '/path/to/default-profile3.png' },
  ]);
  const [editProfile, setEditProfile] = useState(profiles[0]);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleProfileClick = () => {
    setProfileDropdown(!profileDropdown);
  };

  const handleProfileChange = (id) => {
    const newProfile = profiles.find((profile) => profile.id === id);
    if (newProfile) {
      setSelectedProfileId(id);
      setEditProfile(newProfile); 
      setProfileDropdown(false);
    }
  };

  const handleProfileNameChange = (e) => {
    setEditProfile({ ...editProfile, name: e.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setEditProfile({ ...editProfile, image: URL.createObjectURL(file) });
    }
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
    setEditProfile(profiles.find((profile) => profile.id === selectedProfileId));
  };

  const handleSaveChanges = () => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === editProfile.id ? editProfile : profile
    );
    setProfiles(updatedProfiles);
    setEditModalOpen(false);
  };

  
  const selectedProfile = profiles.find((profile) => profile.id === selectedProfileId);

  return (
    <div>
      <nav className='p-3 bg-purp font-poppins text-white shadow md:flex md:items-center md:justify-between'>
        <div className='flex justify-between items-center w-full md:w-1/3'>
          
          <Link to='/'>
            <span className='text-2xl cursor-pointer'>
              <img className='h-[60px] bg-purp' src={Logo} alt='Logo' />
            </span>
          </Link>

          
          <span onClick={handleNav} className='cursor-pointer md:hidden block ml-auto'>
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </span>
        </div>

        
        <ul className='hidden md:flex md:items-center md:justify-center w-full'>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'>
            <Link to='/'>View uploads</Link>
          </li>
          <li className='mx-4 my-6 md:my-0 text-xl duration-500 hover:text-gray-400'>
            <Link to='/adminleaderboard'>View Leadership board</Link>
          </li>
          <li className='mx-4 my-6 md:my-0 md:text-xl duration-500 bg-transparent border border-white rounded-lg md:px-6 hover:text-gray-400'>
            <Link to='/'>Log Out</Link>
          </li>
        </ul>

        
        <div className='hidden md:flex items-center md:w-1/3 justify-end pr-8 space-x-3'>
          {selectedProfile && (
            <div className='relative flex items-center cursor-pointer px-4 mx-2 p- rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition duration-300' onClick={handleProfileClick}>
              <img
                src={selectedProfile.image}
                alt='Profile'
                className='w-10 h-10 rounded-full'
              />
              <span className='ml-2'>{selectedProfile.name}</span>
              <span className='ml-2'>
                {profileDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
              </span>
            </div>
          )}
          <AiOutlineEdit
            className='text-xl cursor-pointer'
            onClick={handleEditClick}
          />

          
          {profileDropdown && (
            <div className='absolute top-16 right-8 mt-2 w-48 bg-white text-black rounded-lg shadow-lg z-10'>
              {profiles.map((profile) => (
                <div key={profile.id} className='flex items-center justify-between p-2 hover:bg-gray-100'>
                  <span>{profile.name}</span>
                  <button
                    className='text-blue-500'
                    onClick={() => handleProfileChange(profile.id)}
                  >
                    Switch
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        
        <ul
          className={`fixed top-0 left-0 w-2/3 bg-bluebg h-full border-r p-6 border-gray-300 z-50 transform ${
            nav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <li className='mb-8'>
            <img src={logo2} alt='/img' className='w-24 ' /> 
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2 flex items-center'>
            <FaVideo className='mr-2' /> 
            <Link to='/'>View Uploads</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2 flex items-center'>
            <FaMedal className='mr-2' /> 
            <Link to='/adminleaderboard'>View Leadership Board</Link>
          </li>
          <li className='mx-4 my-6 text-xl hover:bg-lightblue hover:text-bluebg border-b-2 border-gray-500 p-2'>
            <Link to='/'>Log Out</Link>
          </li>

          
          {selectedProfile && (
            <li className='mt-8'>
              <div className='flex items-center space-x-3' onClick={handleProfileClick}>
                <img
                  src={selectedProfile.image}
                  alt='Profile'
                  className='w-10 h-10 rounded-full'
                />
                <span>{selectedProfile.name}</span>
                <span className='ml-2'>
                  {profileDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
                </span>
              </div>
              {profileDropdown && (
                <div className='mt-2 bg-white text-black rounded-lg shadow-lg'>
                  {profiles.map((profile) => (
                    <div key={profile.id} className='flex items-center justify-between p-2 hover:bg-gray-100'>
                      <span>{profile.name}</span>
                      <button
                        className='text-blue-500'
                        onClick={() => handleProfileChange(profile.id)}
                      >
                        Switch
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </li>
          )}
        </ul>
      </nav>

      
      {editModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-80'>
            <h2 className='text-xl mb-4'>Edit Profile</h2>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Profile Name</label>
              <input
                type='text'
                value={editProfile.name}
                onChange={handleProfileNameChange}
                className='border border-gray-300 p-2 w-full rounded'
              />
            </div>
            <div className='mb-4'>
              <label className='block text-sm font-medium mb-2'>Profile Image</label>
              <input
                type='file'
                accept='image/*'
                onChange={handleImageChange}
                className='w-full'
              />
              {editProfile.image && (
                <img src={editProfile.image} alt='Preview' className='w-16 h-16 mt-2 rounded-full' />
              )}
            </div>
            <div className='flex justify-end'>
              <button
                onClick={handleSaveChanges}
                className='bg-blue-500 text-white px-4 py-2 rounded'
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditModalOpen(false)}
                className='ml-2 px-4 py-2 rounded'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Nav;
