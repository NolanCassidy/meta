// material
import { styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 0),
  backgroundColor: theme.palette.grey[900]
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  position: 'relative'
  // marginBottom: theme.spacing(10)
  // [theme.breakpoints.up('md')]: {
  //   height: '100%',
  //   marginBottom: 0,
  //   textAlign: 'left',
  //   display: 'inline-flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'flex-start'
  // }
}));

// ----------------------------------------------------------------------

export default function LandingDarkMode() {
  return (
    <RootStyle id="features">
      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          component="img"
          alt="image shape"
          src="/static/home/shape.svg"
          sx={{
            top: 0,
            right: 0,
            bottom: 0,
            my: 'auto',
            position: 'absolute',
            filter: 'grayscale(1) opacity(48%)',
            display: { xs: 'none', md: 'block' }
          }}
        />

        <Grid container spacing={5} direction="row-reverse" justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: 'text.disabled', display: 'block' }}
                >
                  Dont miss out.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3, color: 'common.white' }}>
                  Features
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography sx={{ color: 'common.white', mb: 5 }}>
                  Our contract is packed with all the top blockchain code. Be ready for future
                  releases where we give ETH back to the holders, allow style changes, and the
                  updating the blockchain name to make a lasting mark on the group.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
            <MotionInView threshold={0.5} variants={varFadeInUp}>
              <img alt="light mode" src="/static/monk_llama.png" />
            </MotionInView>
            {/*
            <MotionInView
              threshold={0.5}
              variants={varFadeInDown}
              sx={{ top: 0, left: 0, position: 'absolute' }}
            >
              <img alt="dark mode" src="/static/vote_for_pedro.png" />
            </MotionInView>
            */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
