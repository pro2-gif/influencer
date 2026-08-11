import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section animate-fade-in-down">
      <div className="top-layout">
        
        {/* 상단: 인스타그램 캡처본 (새로운 제목 추가) */}
        <div className="capture-col">
          <h2 className="section-title">
            17만 팔로워가 신뢰하는<br />
            약사 인플루언서
          </h2>
          <div className="capture-img-wrap">
            <img src="/images/capture_profile.png" alt="Profile Capture" className="capture-img" />
          </div>
        </div>

        {/* 하단: 정보 텍스트 및 표 */}
        <div className="info-col">
          <div className="info-text-group">
            <p className="info-title">@supermom_yaksa &nbsp;&nbsp;|&nbsp;&nbsp; 팔로워 17.6만</p>
          </div>
          
          <div className="revenue-section">
            <h3 className="revenue-title">26년도 공구</h3>
            <div className="revenue-list">
              <div className="revenue-card">
                <span className="period">26년도 2차(약 2주)</span>
                <span className="amount">73,164,600원</span>
              </div>
              <div className="revenue-card">
                <span className="period">26년도 1차(약 2주)</span>
                <span className="amount">98,408,000원</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
