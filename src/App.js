import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navbar';
import { ThemeContext, ThemeProvider } from './pages/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  // Apply the class to the body based on the current theme
  useEffect(() => {
    document.body.className = theme; // This will add 'light' or 'dark' class to the body
  }, [theme]);

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo-container">
          {/* <h1>My Shop</h1> */}
        </div>
        {/* <hr /> */}
        <Navbar />
        {/* <hr /> */}
      </header>

      <main className="main-content">
        {/* <h2>Welcome to My Shop!</h2>
        <p>Explore our range of amazing products.</p> */}
        <Outlet />
      </main>


    </div>
  );
}

// export default App;

export default function MainApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
