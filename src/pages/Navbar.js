// import React, { useContext } from 'react'
// import { NavLink } from 'react-router-dom'
// import { ThemeContext } from './ThemeContext';



// export default function () {

//   const {theme}=useContext(ThemeContext);
//   console.log('navbar theme: ',theme);

//   // let themeStyle = (theme ==='light')? { background:'#007bff',color:'white'}:
//   // {background:'black',color:'white'};

//   let themeStyle = (theme ==='light')? { className:'header'}:
//   {background:'black',color:'white'};

//   return (
//     <div style={themeStyle}>
//         <h1>My Shop</h1>
//         <nav className="nav">
//           <NavLink 
//             to="/home" 
//             className="nav-link" 
//             activeclassname="active"
//           >
//             Home
//           </NavLink>
//           <NavLink 
//             to="/products" 
//             className="nav-link" 
//             activeclassname="active"
//           >
//             Products
//           </NavLink>
//           <NavLink 
//             to="/contact" 
//             className="nav-link" 
//             activeclassname="active"
//           >
//             Contact
//           </NavLink>
//           <NavLink 
//             to="/formdemo" 
//             className="nav-link" 
//             activeclassname="active"
//           >
//             Form
//           </NavLink>
//           <NavLink 
//             to="/register" 
//             className="nav-link" 
//             activeclassname="active"
//           >
//             Registration
//           </NavLink>
//         </nav>
//     </div>
//   )
// }



// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import { ThemeContext } from './ThemeContext';

// export default function Navbar() {
//   const { theme, toggleTheme } = useContext(ThemeContext); // Access theme and toggle function

//   return (
//     <div>
//       <h1>My Shop</h1>
//       <nav className="nav">
//         <NavLink to="/home" className="nav-link" activeClassName="active">
//           Home
//         </NavLink>
//         <NavLink to="/products" className="nav-link" activeClassName="active">
//           Products
//         </NavLink>
//         <NavLink to="/contact" className="nav-link" activeClassName="active">
//           Contact
//         </NavLink>
//         <NavLink to="/formdemo" className="nav-link" activeClassName="active">
//           Form
//         </NavLink>
//         <NavLink to="/register" className="nav-link" activeClassName="active">
//           Registration
//         </NavLink>
//       </nav>

//       {/* Button to toggle theme */}
//       <button onClick={toggleTheme}>
//         Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
//       </button>

//       <div>
//         Current Theme: {theme}
//       </div>
//     </div>
//   );
// }


import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar-container">
      <h1 className="logo">My Shop</h1>
      <nav className="nav">
        <div className="nav-links">
          <NavLink to="/home" className="nav-link" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/products" className="nav-link" activeClassName="active">
            Products
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
          <NavLink to="/formdemo" className="nav-link" activeClassName="active">
            Form
          </NavLink>
          <NavLink to="/register" className="nav-link" activeClassName="active">
            Registration
          </NavLink>
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Theme
        </button>
      </nav>
    </div>
  );
}
