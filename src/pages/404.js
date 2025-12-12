import React from 'react';
import Layout from '@theme/Layout';

function NotFoundPage() {
  return (
    <Layout title="Page Not Found">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Please check the URL or return to the <a href="/">homepage</a>.</p>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
