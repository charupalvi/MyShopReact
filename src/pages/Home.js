// import React, { useContext } from 'react';
// import './Home.css'; // If you're adding custom styling for Home page
// import { ThemeContext } from './ThemeContext';

// export default function Home() {
//   const theme=useContext(ThemeContext);
//   console.log('home theme: ',theme);
  
//   return (
//     <div className="home-container">
//       <section className="welcome-section">
//         <h2>Welcome to My Shop!</h2>
//         <p>We offer a wide variety of amazing products just for you. Whether you're looking for the latest trends or timeless classics, we’ve got something for everyone.</p>
//         <p>Browse through our categories to discover the best deals and products hand-picked for your needs!</p>
//       </section>

//       <section className="featured-products">
//         <h3>Featured Products</h3>
//         <div className="product-grid">
//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Product 1" />
//             <h4>Product 1</h4>
//             <p>Short description of product 1.</p>
//             <button>Shop Now</button>
//           </div>
//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Product 2" />
//             <h4>Product 2</h4>
//             <p>Short description of product 2.</p>
//             <button>Shop Now</button>
//           </div>
//           <div className="product-card">
//             <img src="https://via.placeholder.com/200" alt="Product 3" />
//             <h4>Product 3</h4>
//             <p>Short description of product 3.</p>
//             <button>Shop Now</button>
//           </div>
//         </div>
//       </section>

//       <section className="shop-categories">
//         <h3>Explore Categories</h3>
//         <div className="category-grid">
//           <div className="category-card">
//             <img src="https://via.placeholder.com/150" alt="Category 1" />
//             <h4>Category 1</h4>
//           </div>
//           <div className="category-card">
//             <img src="https://via.placeholder.com/150" alt="Category 2" />
//             <h4>Category 2</h4>
//           </div>
//           <div className="category-card">
//             <img src="https://via.placeholder.com/150" alt="Category 3" />
//             <h4>Category 3</h4>
//           </div>
//         </div>
//       </section>

//       <section className="about-section">
//         <h3>About Us</h3>
//         <p>At My Shop, we’re dedicated to providing high-quality products at great prices. Our team carefully selects each item to ensure you get the best shopping experience.</p>
//         <p>We believe in exceptional customer service and are here to help with any questions or concerns you may have. Your satisfaction is our top priority!</p>
//       </section>
//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { useApi } from '../hooks/useApi';
// import './Home.css';
// import { Spinner, Alert, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   const baseUrl = `http://localhost:3000/products`;
//   const { data: allProducts, loading: allLoading, error: allError } = useApi(baseUrl);

//   const [categoryUrl, setCategoryUrl] = useState(null);
//   const { data: categoryProducts, loading: categoryLoading, error: categoryError } = useApi(categoryUrl);

//   // Extract unique categories from all products
//   const categories = allProducts
//     ? [...new Set(allProducts.map(product => product.category))]
//     : [];

//   const handleCategoryClick = (url, categoryName) => {
//     setCategoryUrl(url);
//   };

//   return (
//     <div className="home-container">
//       <section className="welcome-section">
//         <h2>Welcome to My Shop!</h2>
//         <p>
//           We offer a wide variety of amazing products just for you. Whether
//           you're looking for the latest trends or timeless classics, we’ve got
//           something for everyone.
//         </p>
//         <p>
//           Browse through our categories to discover the best deals and products
//           hand-picked for your needs!
//         </p>
//       </section>

//       {allLoading && (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//           <p>Loading...</p>
//         </div>
//       )}

//       {allError && (
//         <Alert variant="danger" className="text-center">
//           {allError}
//         </Alert>
//       )}

//       {!allLoading && allProducts && (
//         <>
//           <section className="featured-products">
//             <h3>Featured Products</h3>
//             <div className="product-grid">
//               {allProducts.slice(0, 3).map(product => (
//                 <div className="product-card" key={product.id}>
//                   <img
//                     src="https://via.placeholder.com/200"
//                     alt={product.name}
//                   />
//                   <h4>{product.name}</h4>
//                   <p>Rs. {product.price}</p>
//                   <Button
//                     as={Link}
//                     to={`/products/${product.id}`}
//                     variant="primary"
//                   >
//                     Shop Now
//                   </Button>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="shop-categories">
//             <h3>Explore Categories</h3>
//             <div className="category-grid">
//               {categories.slice(0, 3).map((category, index) => (
//                 <div className="category-card" key={index}>
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt={category}
//                   />
//                   <h4
//                     onClick={() =>
//                       handleCategoryClick(
//                         `${baseUrl}?category=${category}`,
//                         category
//                       )
//                     }
//                     style={{ cursor: 'pointer', color: 'blue' }}
//                   >
//                     {category}
//                   </h4>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </>
//       )}

//       {categoryLoading && (
//         <div className="text-center">
//           <Spinner animation="border" variant="primary" />
//           <p>Loading category products...</p>
//         </div>
//       )}

//       {categoryError && (
//         <Alert variant="danger" className="text-center">
//           {categoryError}
//         </Alert>
//       )}

//       {categoryProducts && (
//         <section className="featured-products">
//           <h3>Products in Selected Category</h3>
//           <div className="product-grid">
//             {categoryProducts.map(product => (
//               <div className="product-card" key={product.id}>
//                 <img
//                   src="https://via.placeholder.com/200"
//                   alt={product.name}
//                 />
//                 <h4>{product.name}</h4>
//                 <p>Rs. {product.price}</p>
//                 <Button
//                   as={Link}
//                   to={`/products/${product.id}`}
//                   variant="primary"
//                 >
//                   Shop Now
//                 </Button>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       <section className="about-section">
//         <h3>About Us</h3>
//         <p>
//           At My Shop, we’re dedicated to providing high-quality products at
//           great prices. Our team carefully selects each item to ensure you get
//           the best shopping experience.
//         </p>
//         <p>
//           We believe in exceptional customer service and are here to help with
//           any questions or concerns you may have. Your satisfaction is our top
//           priority!
//         </p>
//       </section>
//     </div>
//   );
// }





import React from 'react';
import { useApi } from '../hooks/useApi';
import './Home.css';
import { Spinner, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  const url = `http://localhost:3000/products`; // Replace with your actual API endpoint
  const { data: products, loading, error } = useApi(url);

  // Extract unique categories from products
  const categories = products
    ? [...new Set(products.map(product => product.category))]
    : [];

  return (
    <div className="home-container">
      <section className="welcome-section">
        <h2>Welcome to My Shop!</h2>
        <p>
          We offer a wide variety of amazing products just for you. Whether
          you're looking for the latest trends or timeless classics, we’ve got
          something for everyone.
        </p>
        <p>
          Browse through our categories to discover the best deals and products
          hand-picked for your needs!
        </p>
      </section>

      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
          <p>Loading...</p>
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && products && (
        <>
          <section className="featured-products">
            <h3>Featured Products</h3>
            <div className="product-grid">
              {products.slice(0, 3).map(product => (
                <div className="product-card" key={product.id}>
                  <img
                    src="https://via.placeholder.com/200"
                    alt={product.name}
                  />
                  <h4>{product.name}</h4>
                  <p>Rs. {product.price}</p>
                  <Button
                    as={Link}
                    to={`/products/${product.id}`}
                    variant="primary"
                  >
                    Shop Now
                  </Button>
                </div>
              ))}
            </div>
          </section>

          <section className="shop-categories">
            <h3>Explore Categories</h3>
            <div className="category-grid">
              {categories.slice(0, 3).map((category, index) => (
                <div className="category-card" key={index}>
                  <img
                    src="https://via.placeholder.com/150"
                    alt={category}
                  />
                  <h4>{category}</h4>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      <section className="about-section">
        <h3>About Us</h3>
        <p>
          At My Shop, we’re dedicated to providing high-quality products at
          great prices. Our team carefully selects each item to ensure you get
          the best shopping experience.
        </p>
        <p>
          We believe in exceptional customer service and are here to help with
          any questions or concerns you may have. Your satisfaction is our top
          priority!
        </p>
      </section>
    </div>
  );
}

