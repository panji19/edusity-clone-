import React, { useRef } from 'react';
import './Testimonials.css';
import next_icon from '../../assets/next_icon.png';
import back_icon from '../../assets/back_icon.png';
import user_1 from '../../assets/user_1.png';
import user_2 from '../../assets/user_2.png';
import user_3 from '../../assets/user_3.png';
import user_4 from '../../assets/user_4.png';

const Testimonials = () => {
    const carouselRef = useRef(null);

    const slider = useRef();
    let tx = 0;
    
    const slideForward = () => {
      if (tx > -50) {
        tx -= 25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    };
    
    const slideBackward = () => {
        if (tx < -50) {
            tx -= 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`;
    }
    return (
        <div className='testimonials'>
            <button className='next_btn'>
            <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />
            </button>
            <button className='back_btn'>
            <img src={back_icon} alt="Back" className="back-btn" onClick={slideBackward} />
            </button>
            <div className="slider">
                <ul>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="User 1" /> {/* Added alt text */}
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="User 2" /> {/* Added alt text */}
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="User 3" /> {/* Added alt text */}
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="User 4" /> {/* Added alt text */}
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
             
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;