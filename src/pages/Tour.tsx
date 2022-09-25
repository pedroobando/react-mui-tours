import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { BottomNavigation, Box, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { BasicModal, ImageCollage, QuestionsList } from '../components';

import { city as cities } from '../data';
import { ITour } from '../interfaces/tour';

export const Tour = () => {
  const { cityId = '0' } = useParams();
  const _cityId: number = parseInt(cityId!);
  const [theLocation, setTheLocation] = useState<ITour>({} as ITour);

  useEffect(() => {
    console.log(cityId);
    console.log(cities);
    const pepe = cities!.find((tcity) => tcity.id === _cityId);
    console.log(pepe);
    // setTheLocation(pepe);
  }, []);

  return (
    <Container maxWidth={'md'}>
      <Typography
        sx={{ fontSize: { xs: '1.8em', sm: '2.4em', md: '3em' } }}
        component={'h1'}
        mt={3}>
        Exploring the world in Las Vegas
      </Typography>
      <Grid container spacing={1} mt={2}>
        <Grid item sm={12} md={8}>
          <img
            src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
            alt={'las vegas'}
            width={'100%'}
            height={325}
          />
        </Grid>
        <Grid item sm={12} md={4}>
          <ImageCollage />
        </Grid>
      </Grid>
      {/* <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://assets.simpleviewcms.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/lasvegas/strip_b86ddbea-3add-4995-b449-ac85d700b027.jpg"
          alt={'las vegas'}
          width={600}
          height={325}
        />
        <ImageCollage />
      </Box> */}
      <Box>
        <Typography variant="h6" component={'h4'} marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="body1" component={'p'} marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium porro natus fuga,
          laudantium, esse temporibus harum quisquam est earum eius incidunt officiis quos repellat
          veniam quasi. Nulla, odio deserunt! Quis ratione laboriosam sequi distinctio animi?
          Dolorem impedit assumenda suscipit minus.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component={'h4'} marginTop={3} marginBottom={2}>
          Frecuently Asked Questions
        </Typography>
        <QuestionsList />
      </Box>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '3em',
          paddingTop: '0.2em',
        }}
        elevation={3}>
        <BottomNavigation>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};
