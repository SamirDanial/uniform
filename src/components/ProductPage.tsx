import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import productImg from '../assets/product-image.jpg';

interface ProductPageProps {
    product: {
      name: string;
      title: string;
      price: number;
      description: string;
      imageUrl: string;
    };
  }

const ProductPage: React.FC<ProductPageProps> = ({product}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        alt="Product Image"
        height="1300"
        src={productImg}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="subtitle1">
          {product.title}
        </Typography>
        <Typography variant="h6" color="primary">
          {product.price}
        </Typography>
        <Typography variant="body2">
          {product.description}
        </Typography>
        <Button variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductPage;
