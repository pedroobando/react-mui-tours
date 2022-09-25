import { FC } from 'react';

import { Box, Container, Grid, Typography } from '@mui/material';
import { TourCard } from '../components';

import { city as cities } from '../data';
import { ITour } from '../interfaces';

export const Home: FC = () => {
  return (
    <Container sx={{ marginY: '2em' }} component="main">
      {cities.map((city) => (
        <Box key={city.id}>
          <Typography variant="h4" component={'h2'} marginTop={5} marginBottom={3}>
            Top {city.name} tour
          </Typography>
          <Grid container spacing={3} component="section">
            {city.tours.map(
              ({ id, name, duration, rating, numberOfReviews, price, image }: ITour) => (
                <TourCard
                  key={id}
                  tourId={city.id}
                  tourName={city.name}
                  id={id}
                  name={name}
                  duration={duration}
                  rating={rating}
                  numberOfReviews={numberOfReviews}
                  price={price}
                  image={image}
                />
              ),
            )}
          </Grid>
        </Box>
      ))}
    </Container>
  );
};
