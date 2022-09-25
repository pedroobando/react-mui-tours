import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, CardActionArea, CardMedia, Grid, Rating, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ITour } from '../interfaces/tour';

interface Props extends ITour {
  tourName: string;
  tourId: number;
}

export const TourCard: FC<Props> = (tour) => {
  const navegate = useNavigate();

  const handleOnTour = () => {
    navegate(`/tour/${tour.tourName}/${tour.name}`);
  };

  return (
    <Grid item xs={12} sm={6} lg={3} component={'article'}>
      <Card elevation={3} component={'section'}>
        <CardActionArea onClick={handleOnTour}>
          <CardMedia
            component="img"
            height="100rem"
            width={'100%'}
            image={tour.image}
            alt="green iguana"
          />
          <Box sx={{ paddingX: 1 }}>
            <Typography variant={'subtitle1'} component={'title'}>
              {tour.name}
            </Typography>
            <Box sx={{ marginTop: '0.5em', display: 'flex', alignItems: 'center' }}>
              <AccessTimeIcon sx={{ fontSize: '0.8em' }} />
              <Typography variant="body2" component={'p'} marginLeft={0.8}>
                {tour.duration} hours
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '1.4em' }}>
              <Rating name="half-rating-read" defaultValue={tour.rating} precision={0.5} readOnly />
              <Typography variant="body2" component={'p'} marginLeft={'0.5em'}>
                {tour.rating}
              </Typography>
              <Typography variant="body3" component={'p'} marginLeft={'0.8em'}>
                ({tour.numberOfReviews} reviews)
              </Typography>
            </Box>
            <Typography variant="h6" component={'h3'} sx={{ fontWeight: 500, marginY: '0.2em' }}>
              From C ${tour.price}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
