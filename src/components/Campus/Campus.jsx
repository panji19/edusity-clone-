import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import white_arrow from '../../assets/white_arrow.png';

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="Gallery 1" />
        <img src={gallery_2} alt="Gallery 2" />
        <img src={gallery_3} alt="Gallery 3" />
        <img src={gallery_4} alt="Gallery 4" />
      </div>
      <button className="btn dark-btn"> {/* Tambahkan class untuk styling */}
        See more here <img src={white_arrow} alt="See More Arrow" className="arrow-icon" /> {/* Tambahkan class untuk styling */}
      </button>
    </div>
  );
};

export default Campus;