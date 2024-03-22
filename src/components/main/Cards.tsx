'use client'

import { fetchDatas } from '@/api/userservice';
import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { makeStyles } from '@mui/styles';
import { margin } from '@mui/system';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345, // Adjust the maximum width of the card as needed
    margin: '10px', // Add some margin around each card
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function Cards() {
  const [protectedData, setProtectedData] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchDatas("/protected");
        setProtectedData(response.message);
        console.log(response);
      } catch (error) {
        console.error("Error in component:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetchDatas("/items");
        setProducts(response); 
        console.log(response);
      } catch (error) {
        console.error("Error in component:", error);
      }
    };

    fetchItems();
  }, []);

  const classes = useStyles();

  return (
    <div>
      <h6>{protectedData ? protectedData : ""}</h6>
      <Grid container spacing={2}  style={{marginTop:"50px"}}>
        {products.map(product => (
          <Grid item key={product.id}>
            <Card className={classes.root}>
              <CardHeader
                title={product.title}
                subheader={`$${product.price}`}
              />
              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.title}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Category: {product.category}
                </Typography>
                <Rating
                  name="rating"
                  value={product.rating.rate}
                  precision={0.1}
                  readOnly
                />
                <Typography variant="caption" color="textSecondary" component="p">
                  {`${product.rating.count} reviews`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Cards;
