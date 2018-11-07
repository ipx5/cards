import React from 'react';
import Image from './Image';
import smallProfile from '../assets/small-profile.jpg';

function ProfileImage({item}) {
  return (
    <div className="profile-img">
      <picture>
        <source 
          media="(min-width: 600px)"
          srcSet={`${smallProfile} 2x, ${smallProfile} 1x`}
        />
        <Image src={smallProfile} />
      </picture> 
    </div>
  );
}

export default ProfileImage;