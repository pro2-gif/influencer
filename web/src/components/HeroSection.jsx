import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section animate-fade-in-down">
      <div className="top-layout">
        
        {/* 상단: 인스타그램 캡처본 (새로운 제목 추가) */}
        <div className="capture-col">
          <h2 className="section-title">17만 팔로워가 신뢰하는 약사 인플루언서</h2>
          <div className="capture-img-wrap">
            <img src="/images/capture_profile.png" alt="Profile Capture" className="capture-img" />
          </div>
        </div>

        {/* 하단: 정보 텍스트 및 표 */}
        <div className="info-col">
          <ul className="info-list">
            <li>@supermom_yaksa</li>
            <li>팔로워 17.6만</li>
            <li>26년도 공구</li>
          </ul>
          
          <table className="revenue-table">
            <thead>
              <tr>
                <th>기간</th>
                <th>매출액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>26년도 2차(약 2주)</td>
                <td>73,164,600원</td>
              </tr>
              <tr>
                <td>26년도 1차(약 2주)</td>
                <td>98,408,000원</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
