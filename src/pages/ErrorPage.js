import React from 'react';
import './ErrorPage.css'; // Import the CSS file
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">{error.status}</h1>
        <h2 className="error-subtitle">Oops! Page Not Found</h2>
        <p className="error-message">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <p className="error-message">
            {error.data}
        </p>
        <p className="error-message">
            {error.StatusText}
        </p>
        <a href="/" className="home-button">Go to Home</a>
      </div>
    </div>
  );
}
