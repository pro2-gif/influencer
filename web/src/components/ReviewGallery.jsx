import React from 'react';

// 후기로 쓸 이미지 목록 (피드 이미지 및 프로필 image24 제외)
const reviewImages = [
  'image19.png', 'image6.png', 'image12.png', 'image3.png', 'image11.png', 
  'image25.png', 'image4.png', 'image7.png', 'image13.png', 
  'image1.png', 'image10.png', 'image9.png', 'image8.png', 'image22.png', 'image14.png', 
  'image23.png', 'image20.png', 'image18.png'
];

function ReviewGallery() {
  return (
    <section className="gallery-section animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <h2 className="gallery-title">구매 고객 찐 후기 모음 ✨</h2>
      <div className="masonry-grid">
        {reviewImages.map((img, idx) => (
          <div key={idx} className="masonry-item">
            <img src={`/images/${img}`} alt={`후기 이미지 ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewGallery;
