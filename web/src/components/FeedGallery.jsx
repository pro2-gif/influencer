import React from 'react';

const feedImages = [
  'image5.png', 'image15.png', 'image16.png', 
  'image2.png', 'image17.png', 'image21.png'
];

function FeedGallery() {
  return (
    <section className="gallery-section animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
      <h2 className="gallery-title">인스타그램 피드 📱</h2>
      <div className="masonry-grid">
        {feedImages.map((img, idx) => (
          <div key={idx} className="masonry-item">
            <img src={`/images/${img}`} alt={`피드 이미지 ${idx + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeedGallery;
