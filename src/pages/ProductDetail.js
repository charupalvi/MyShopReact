// import React from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { useApi } from '../hooks/useApi';

// export default function ProductDetail() {
//     const params = useParams();
//     const url = `http://localhost:3000/products/${params.pid}`;
//     const { data, loading, error } = useApi(url);
//     const navigate = useNavigate();

//     return (
//         <div>
//             <h2><u>Product Details</u></h2>
//             {loading && <p>Loading...</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             {data ? (
//                 <div>
//                     <h3>Name: {data.name}</h3>
//                     <h5>Category: {data.category}</h5>
//                     <h4>Price: Rs. {data.price}</h4>
//                     <p>{data.description}</p>
//                 </div>
//             ) : (
//                 <p>No product details available.</p>
//             )}
//             <button onClick={()=> navigate('/products')}>Back</button>
//         </div>
//     );
// }


import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { Container, Button, Card, Spinner, Alert } from 'react-bootstrap';
import './ProductDetails.css'

export default function ProductDetail() {
  const params = useParams();
  const url = `http://localhost:3000/products/${params.pid}`;
  const { data, loading, error } = useApi(url);
  const navigate = useNavigate();

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">
        <u>Product Details</u>
      </h2>

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

      {data ? (
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Card.Title as="h3">{data.name}</Card.Title>
            <Card.Subtitle as="h5" className="mb-2 text-muted">
              Category: {data.category}
            </Card.Subtitle>
            <Card.Text as="h4" className="text-success">
              Price: Rs. {data.price}
            </Card.Text>
            <Card.Text className="text-justify">{data.description}</Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p className="text-center">No product details available.</p>
      )}

      <div className="text-center mt-4">
        <Button variant="primary" onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </div>
    </Container>
  );
}
