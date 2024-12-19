// import React, { useEffect, useState } from 'react'
// // import Button from 'react-bootstrap/Button';
// // import Card from 'react-bootstrap/Card';
// // import Col from 'react-bootstrap/Col';
// // import Row from 'react-bootstrap/Row';
// import './ProductList.css'
// import { useApi } from '../hooks/useApi';
// import { ClipLoader } from 'react-spinners';
// import { Link } from 'react-router-dom';

// export default function ProductList() {

//     // const [products, setProducts] = useState([]);
//     const [url, setUrl] = useState("http://localhost:3000/products");
//     const {data:products, loading, error} = useApi(url);

//     const [activeCategory, setActiveCategory] = useState("all");

//   // Function to handle button click
//   const handleCategoryClick = (categoryUrl, categoryName) => {
//     setUrl(categoryUrl);
//     setActiveCategory(categoryName);
//   };

//     // useEffect(() =>{
//     //     fetch(url)
//     //     .then(resp => resp.json())
//     //     .then(data => setProducts(data))
//     // },[url]);


//   return (
//     <div className='product-list'>
//         {/* <h2> <u> MyShop</u></h2> */}
//         <div className='filter-button'>
//             {/* <button onClick={()=> setUrl("http://localhost:3000/products")}>All</button>
//             <button onClick={()=> setUrl("http://localhost:3000/products?category=mobile")}>Mobile</button>
//             <button onClick={()=> setUrl("http://localhost:3000/products?category=television")}>Television</button>
//             <button onClick={()=> setUrl("http://localhost:3000/products?category=laptop")}>Laptop</button>
//             <button onClick={()=> setUrl("http://localhost:3000/products?category=camera")}>Camera</button>
//             <button onClick={()=> setUrl("http://localhost:3000/products?category=headphones")}>Headphone</button>
//             <button onClick={()=> setUrl("http://localhost:3000/products?category=wearable")}>Wearable</button>
//             <button onClick={()=> setUrl("http://localhost:3000/products?category=gaming_console")}>Gaming</button> 
//             */}
//           <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products", "all")} 
//           className={activeCategory === "all" ? "active" : ""}
//         >
//           All
//         </button>
//         <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products?category=mobile", "mobile")} 
//           className={activeCategory === "mobile" ? "active" : ""}
//         >
//           Mobile
//         </button>
//         {/* Repeat for other buttons */}
//         {/* Television */}
//         <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products?category=television", "television")} 
//           className={activeCategory === "television" ? "active" : ""}
//         >
//           Television
//         </button>
//         <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products?category=laptop", "laptop")} 
//           className={activeCategory === "laptop" ? "active" : ""}
//         >
//           Laptop
//         </button>        <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products?category=camera", "camera")} 
//           className={activeCategory === "camera" ? "active" : ""}
//         >
//           Camera
//         </button>        <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products?category=headphones", "headphones")} 
//           className={activeCategory === "headphones" ? "active" : ""}
//         >
//           Headphones
//         </button>        <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products?category=wearable", "wearable")} 
//           className={activeCategory === "wearable" ? "active" : ""}
//         >
//           Wearable
//         </button>        <button 
//           onClick={() => handleCategoryClick("http://localhost:3000/products?category=gaming_console", "gaming_console")} 
//           className={activeCategory === "gaming_console" ? "active" : ""}
//         >
//           Gaming
//         </button>


//         </div>
//         <br/>
//         <h3>List of Products</h3>

//         {error && <h4 style={{color:'red'}}>Not Found</h4>}

//         {/* {loading && <h4>Loading...</h4>} */}
//         {loading && <ClipLoader color="#36d7b7" loading={loading} size={50} />}

        

//         <ul>
//             {

//               // Short Circuiting:
//               // products && products.map ==> if the first atguments is false/ null
//               // react will not execute the code after &&
//               // but if the first argument is not null/ true then react will execute the
//               // second paramenter
//               // This is called conditional rendering, short circuiting is used for conditional
//               // rendering

//                products && products.map(product => {
//                    return <li key={product.id}>
//                         <strong>{product.name}</strong>
//                         <p><b>Rs.</b> {product.price}</p>
//                         <p className='desc'>{product.description}</p>
//                         <Link to={`/products/${product.id}`}>Read More</Link>

//                     </li>
//                 })
//             }
//         </ul>


//         {/* {
//         products.map(product => {
//        return     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 1 }).map((_, idx) => (
//         <Col key={idx}>
//        <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>{product.name}</Card.Title>
//         <Card.Text><b>Rs.</b> {product.price}</Card.Text>
//         <Card.Text>{product.description}</Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//         </Col>
//       ))}
//     </Row>
// })
// } */}


//     </div>
//   )
// }


import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { ClipLoader } from 'react-spinners';
import { Link } from 'react-router-dom';
import { Row, Col, Card, Button } from 'react-bootstrap';
import './ProductList.css';

export default function ProductList() {
  const [url, setUrl] = useState("http://localhost:3000/products");
  const { data: products, loading, error } = useApi(url);
  const [activeCategory, setActiveCategory] = useState("all");

  // Handle category button clicks
  const handleCategoryClick = (categoryUrl, categoryName) => {
    setUrl(categoryUrl);
    setActiveCategory(categoryName);
  };

  return (
    <div className="product-list">
      <div className="filter-button">
        <button
          onClick={() => handleCategoryClick("http://localhost:3000/products", "all")}
          className={activeCategory === "all" ? "active" : ""}
        >
          All
        </button>
        <button
          onClick={() =>
            handleCategoryClick("http://localhost:3000/products?category=mobile", "mobile")
          }
          className={activeCategory === "mobile" ? "active" : ""}
        >
          Mobile
        </button>
        <button
          onClick={() =>
            handleCategoryClick("http://localhost:3000/products?category=television", "television")
          }
          className={activeCategory === "television" ? "active" : ""}
        >
          Television
        </button>
        <button
          onClick={() =>
            handleCategoryClick("http://localhost:3000/products?category=laptop", "laptop")
          }
          className={activeCategory === "laptop" ? "active" : ""}
        >
          Laptop
        </button>
        <button
          onClick={() =>
            handleCategoryClick("http://localhost:3000/products?category=camera", "camera")
          }
          className={activeCategory === "camera" ? "active" : ""}
        >
          Camera
        </button>
        <button 
          onClick={() => handleCategoryClick("http://localhost:3000/products?category=headphones", "headphones")} 
          className={activeCategory === "headphones" ? "active" : ""}
        >
          Headphones
        </button>        <button 
          onClick={() => handleCategoryClick("http://localhost:3000/products?category=wearable", "wearable")} 
          className={activeCategory === "wearable" ? "active" : ""}
        >
          Wearable
        </button>        <button 
          onClick={() => handleCategoryClick("http://localhost:3000/products?category=gaming_console", "gaming_console")} 
          className={activeCategory === "gaming_console" ? "active" : ""}
        >
          Gaming
        </button>
      </div>

      <h3>List of Products</h3>

      {error && <h4 style={{ color: 'red' }}>Not Found</h4>}

      {loading && <ClipLoader color="#36d7b7" loading={loading} size={50} />}

      <Row xs={1} md={2} lg={3} className="g-4">
        {products &&
          products.map((product) => (
            <Col key={product.id}>
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> Rs. {product.price}
                  </Card.Text>
                  <Card.Text className="desc">{product.description}</Card.Text>
                  <Link to={`/products/${product.id}`}>
                    <Button variant="primary">Read More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </div>
  );
}
