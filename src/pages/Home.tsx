import { FC } from 'react';
import { Box, Container, CssBaseline, Grid, ThemeProvider, Typography } from '@mui/material';
import { TourCard } from '../components';
import { lightTheme } from '../themes';
import { NavBar } from '../components';

import { city as cities } from '../data';
import { ITour } from '../interfaces';

export const Home: FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline enableColorScheme />
      <NavBar />
      <Container sx={{ marginY: '2em' }} component="main">
        {cities.map((city) => (
          <Box key={city.id}>
            <Typography variant="h4" component={'h2'} marginTop={5} marginBottom={3}>
              Top {city.name} tour
            </Typography>
            <Grid
              container
              // direction='row'
              spacing={3}
              // justifyContent='center'
              // alignItems='center'
              component="section">
              {city.tours.map(
                ({ id, name, duration, rating, numberOfReviews, price, image }: ITour) => (
                  <TourCard
                    key={id}
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
    </ThemeProvider>
  );
};
