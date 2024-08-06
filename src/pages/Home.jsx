import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';
import Star from '../assets/icons/star.png';
import Camping from '../assets/icons/camping.png'
import Search from '../assets/icons/search.png'

function Home() {
  return (
    <div className="home">
      <div className="header">
        <Link to="/Date" className="back-button">&lt; 별별캠핑</Link>
        <Link to="/Star" className="star-button">
          <div className="star-container">
            <img src={Star} alt="Star icon" className="star-image" />
            <div>오늘 별자리</div>
          </div>
        </Link>
      </div>
      <div className="map-placeholder">
        {/* 이 부분에 지도가 들어갈 예정입니다 */}
        <img src="/path/to/placeholder-image.png" alt="Map placeholder" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search ..." />
        <button className="search-button"><img src={Search} className="search-image"/></button>
      </div>
      <div className="info-modal">
        <img src={Camping} alt="Camping icon" className="camping-image" />
        <p className="info-message">마커를 클릭해 제주도의 캠핑장과<br/>별 스팟을 확인해보세요!</p>
      </div>
    </div>
  );
}

export default Home;
