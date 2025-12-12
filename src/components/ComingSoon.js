import React from 'react';

function ComingSoon() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh',
        fontSize: '18px',
        color: '#888',
        textAlign: 'center',
      }}>
      <h2>Content Coming Soon!</h2>
      <p>We're working hard to bring you this content. Please check back later.</p>
    </div>
  );
}

export default ComingSoon;
