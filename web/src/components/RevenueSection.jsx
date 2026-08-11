import React from 'react';

function RevenueSection() {
  return (
    <section className="revenue-section animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <div className="revenue-grid">
        <div className="glass-card revenue-item">
          <h3>26년도 1차 공구 매출 (약 2주)</h3>
          <div className="amount text-gradient">98,408,000원</div>
        </div>
        <div className="glass-card revenue-item">
          <h3>26년도 2차 공구 매출 (약 2주)</h3>
          <div className="amount text-gradient">73,164,600원</div>
        </div>
      </div>
    </section>
  );
}

export default RevenueSection;
