import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styles from "./styles.module.css";


function ProductCard(props) {
    const { product } = props;
  return (
    <Card sx={{ maxWidth: 350, margin: "20px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
          <Typography variant="body3" color="text.tertiary">
            <h3>Price=${product.price}</h3>
          </Typography>
          <Typography variant="body3" color="text.tertiary" >
            <button className={styles.product1} >Add to Cart</button>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}


export default ProductCard;