import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Stack, Grid } from '@mui/material';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    // top: 0,
    // left: 0,
    // width: '100%',
    // height: '100vh'
    // display: 'flex',
    // position: 'fixed',
    // alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: '75vw',
  margin: 'auto',
  textAlign: 'left',
  position: 'relative',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(15),
  [theme.breakpoints.up('md')]: {
    margin: 'unset',
    textAlign: 'left'
  }
}));

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  opacity: '0.7 !important'
});

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  // top: 0,
  // right: 0,
  // bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  display: 'block',
  objectFit: 'cover',
  height: '100%'
  // [theme.breakpoints.up('lg')]: {
  //   right: '8%',
  //   width: 'auto',
  //   height: '48vh'
  // }
}));

// ----------------------------------------------------------------------

export default function LoungeHeroTwo() {
  return (
    <RootStyle id="roadmap" initial="initial" animate="animate" variants={varWrapEnter}>
      <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} />

      <HeroImgStyle alt="hero" src="/static/galaxysplash.jfif" variants={varFadeInUp} />

      <Container maxWidth="lg">
        <ContentStyle>
          <motion.div variants={varFadeInRight}>
            <Typography variant="h3" sx={{ color: 'common.white' }}>
              <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                &nbsp;Roadmap <br />
              </Typography>
              We are here to stay...
            </Typography>
          </motion.div>

          <motion.div variants={varFadeInRight}>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Typography component="div" variant="h3" sx={{ color: 'primary.main' }}>
                  &nbsp;10%
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'common.white' }}>
                  The first 10ETH is donated to llama rescue shelters.
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
                  &nbsp;20%
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'common.white' }}>
                  Who let the llamas out? 5 Llama are released to current holders of Meta Llamas.
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
                  &nbsp;40%
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'common.white' }}>Release of flies project.</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
                  &nbsp;60%
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'common.white' }}>
                  A portion of the flies profits will be given to the llama holders.
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
                  &nbsp;80%
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'common.white' }}>
                  Frogs prjoect release and flies merge.
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography component="span" variant="h3" sx={{ color: 'primary.main' }}>
                  &nbsp;100%
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <Typography sx={{ color: 'common.white' }}>
                  The Fiesta gets scheduled. *Tentative to the global situation. Meet your llama
                  IRL!
                </Typography>
              </Grid>
            </Grid>
          </motion.div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
