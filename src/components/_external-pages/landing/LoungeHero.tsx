import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Box, Link, Container, Typography, Stack } from '@mui/material';
//
import { varFadeIn, varFadeInUp, varWrapEnter, varFadeInRight } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.grey[400],
  [theme.breakpoints.up('md')]: {
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    alignItems: 'center'
  }
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(({ theme }) => ({
  zIndex: 10,
  maxWidth: 520,
  margin: 'auto',
  textAlign: 'center',
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
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: '100%',
  margin: 'auto',
  position: 'absolute',
  objectFit: 'cover',
  height: '100%'
  // [theme.breakpoints.up('lg')]: {
  //   right: '8%',
  //   width: 'auto',
  //   height: '48vh'
  // }
}));

// ----------------------------------------------------------------------

export default function LoungeHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <HeroOverlayStyle alt="overlay" src="/static/overlay.svg" variants={varFadeIn} />

        <HeroImgStyle alt="hero" src="/static/galaxysplash.jfif" variants={varFadeInUp} />

        <Container maxWidth="lg">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography variant="h3" sx={{ color: 'common.white' }}>
                Welcome to the <br />
                <Typography component="span" variant="h1" sx={{ color: 'primary.main' }}>
                  &nbsp;Meta Llama <br />
                </Typography>
                Lounge, Whatcha waiting for?
              </Typography>
            </motion.div>

            <motion.div variants={varFadeInRight}>
              <Typography sx={{ color: 'common.white' }}>
                Meta Llama will be going through a evolution of change through the majestic cosmos!
                These stages metallama will go though are Llama. Flies. Frogs. Crias. Get ready!
              </Typography>
            </motion.div>

            <Stack
              component={motion.div}
              variants={varFadeInRight}
              direction="row"
              spacing={1}
              justifyContent={{ xs: 'center', md: 'flex-start' }}
            >
              <img alt="sketch icon" src="/static/icons/editor/link.svg" width={20} height={20} />
              <Link
                underline="always"
                href="https://www.opensea.io"
                target="_blank"
                color="common.white"
                sx={{ typography: 'body2' }}
              >
                Preview on OpenSea.io
              </Link>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
      <Box sx={{ height: { md: '100vh' } }} />
    </>
  );
}
