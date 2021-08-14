import React from 'react';
import LoadingImage from '../../assets/images/loader.jpg';
function Loading() {
  return (
    <div>
      <img src={LoadingImage} alt='Loading' height='100px' width='100px' />
    </div>
  );
}

export default Loading;
