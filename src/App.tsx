import { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MenuBar from './components/MenuBar';
import ProductPage from './components/ProductPage';

function App() {
  const [product, setProduct] = useState<any>({});

  useEffect(() => {
    fetch('http://localhost:5000/api/product')
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);


  const containerStyle = {
    marginTop: '20px',
  };
  return (
    <>
      <CssBaseline />
      <MenuBar />
      <Container maxWidth="md" style={containerStyle}>
        <ProductPage product={product} />
      </Container>
    </>
  );
}

export default App;
