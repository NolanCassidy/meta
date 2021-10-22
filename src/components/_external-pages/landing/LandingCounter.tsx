import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from '../../../redux/data/dataActions';
import { Link } from '@mui/material';

// material
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, CardContent } from '@mui/material';
import { CarouselThumbnail } from '../../carousel';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  // paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingCounter() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchImages(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <Container maxWidth="lg">
      <CardContent>
        {data.walletOfOwner?.length !== 0 && (
          <CarouselThumbnail nfts={data.ownedMetaData} wallet={data.walletOfOwner} />
        )}
      </CardContent>
    </Container>
  );
}
