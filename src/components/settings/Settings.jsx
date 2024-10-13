"use client"

import React, { useState } from 'react';
import styles from "./Settings.module.css";
import Image from 'next/image';

const SettingsPage = () => {
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('/images.jpg'); // Default image
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = () => {
    setSuccessMessage('Changes have been saved successfully!');
  };

  return (
    <div className={styles.container}>
      <div className={styles.flexContainer}>
        <div className={styles.gifi}>
          <Image src="/Singing Contract.gif" height={550} width={600} />
        </div>
        <div className={styles.child}>
        <div className={styles.imgContainer}>
          <Image 
            src={profileImage} 
            alt="Profile Image" 
            height={100} 
            width={100} 
            className={styles.profileImage} 
          />
          <label htmlFor="imageUpload">
            <Image 
              src="/edit.svg" 
              alt="Edit Icon" 
              height={50} 
              width={50} 
              className={styles.editIcon} 
            />
          </label>
          <input 
            type="file" 
            id="imageUpload" 
            className={styles.fileInput} 
            onChange={handleImageChange} 
          />
        </div>
        <div className={styles.form}>
          <input 
            type="text" 
            placeholder='Enter your name' 
            value={username}
            onChange={handleUsernameChange} 
            className={styles.usernameInput}
          />

          <button className={styles.submitButton} onClick={handleSubmit}>
            Save Changes
          </button>

          {successMessage && <p className={styles.successMessage}>{successMessage}</p>}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
