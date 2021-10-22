import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from '../../../redux/blockchain/blockchainActions';
import { fetchData, fetchImages } from '../../../redux/data/dataActions';

import { motion } from 'framer-motion';
// material
import { styled } from '@mui/material/styles';
import { Button, Box, Container, Typography } from '@mui/material';
//
import { varFadeInDown, varFadeInUp, MotionInView } from '../../animate';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

// ----------------------------------------------------------------------

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 456,
  margin: 'auto',
  overflow: 'hidden',
  paddingBottom: theme.spacing(10),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundImage: `linear-gradient(135deg,
    ${theme.palette.primary.main} 0%,
    ${theme.palette.primary.dark} 100%)`,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    maxWidth: '100%',
    paddingBottom: 0,
    alignItems: 'center'
  }
}));

// ----------------------------------------------------------------------

export default function LandingAdvertisement() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState('Costs .05 ETH each');
  const [claimingNft, setClaimingNft] = useState(false);
  let [transactionHash, setTransactionHash] = useState(null);
  let [buyAmt, setBuyAmt] = useState(1);

  const claimNFTs = (_amount) => {
    if (_amount <= 0) {
      return;
    }
    setFeedback('Preparing your Meta Llama ...');
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mintLlamas(_amount)
      .send({
        gasLimit: String(285000 * _amount),
        to: '0xef5bf9dF7Ef55B8a1ed703C84f2Aa35067F78c55',
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((0.0777 * _amount).toString(), 'ether')
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Transaction was cancelled ...');
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback('Congrats!');
        setTransactionHash(receipt);
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
        dispatch(fetchImages(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const increaseBuy = () => {
    if (buyAmt < 17) {
      setBuyAmt(buyAmt + 1);
    }
  };

  const decreaseBuy = () => {
    if (buyAmt > 1) {
      setBuyAmt(buyAmt - 1);
    }
  };

  useEffect(() => {
    getData();
    setTransactionHash(null);
  }, [blockchain.account]);

  // <MotionInView variants={varFadeInDown}>
  //   <Button
  //     size="large"
  //     variant="contained"
  //     onClick={(e) => {
  //       e.preventDefault();
  //       dispatch(connect());
  //       getData();
  //     }}
  //     sx={{
  //       whiteSpace: 'nowrap',
  //       boxShadow: (theme) => theme.customShadows.z8,
  //       color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
  //       bgcolor: 'common.white',
  //       '&:hover': { bgcolor: 'grey.300' }
  //     }}
  //   >
  //     Connect
  //   </Button>
  // </MotionInView>
  return (
    <Container maxWidth="lg" id="buy" style={{ padding: '5vh 0vw 2vh' }}>
      <ContentStyle>
        <MotionInView
          variants={varFadeInUp}
          sx={{
            mb: { xs: 3, md: 0 }
          }}
        >
          <motion.div animate={{ y: [-20, 0, -20] }} transition={{ duration: 4, repeat: Infinity }}>
            {claimingNft ? (
              <Box
                component="img"
                alt="rocket"
                src="/static/random_llama.gif"
                sx={{ maxWidth: 460, width: 1 }}
              />
            ) : (
              <Box
                component="img"
                alt="rocket"
                src="/static/centerfours.gif"
                sx={{ maxWidth: 460, width: 1 }}
              />
            )}
          </motion.div>
        </MotionInView>

        <Box
          sx={{
            pl: { md: 10 },
            textAlign: { xs: 'center', md: 'left' }
          }}
        >
          {blockchain.account === null || blockchain.smartContract === null ? (
            <>
              <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5 }}>
                <Typography variant="h2">
                  Please connect your Metamask
                  <br /> wallet to begin.
                </Typography>
              </MotionInView>
            </>
          ) : (
            <>
              <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5 }}>
                {data.totalSupply?.length && (
                  <Typography variant="h2"> {data.totalSupply} / 10,000</Typography>
                )}
                <Typography variant="h2"> {feedback} </Typography>
              </MotionInView>
              {claimingNft || (
                <>
                  <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5 }}>
                    <IndeterminateCheckBoxIcon
                      fontSize="large"
                      onClick={(e) => {
                        e.preventDefault();
                        decreaseBuy();
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                    <Typography style={{ display: 'inline', padding: '0px 15px' }} variant="h2">
                      {buyAmt}
                    </Typography>
                    <AddBoxIcon
                      fontSize="large"
                      onClick={(e) => {
                        e.preventDefault();
                        increaseBuy();
                      }}
                      style={{ cursor: 'pointer' }}
                    />
                  </MotionInView>
                  <MotionInView variants={varFadeInDown}>
                    <Button
                      size="large"
                      variant="contained"
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs(buyAmt);
                        getData();
                      }}
                      disabled={!data.saleIsActive}
                      sx={{
                        whiteSpace: 'nowrap',
                        boxShadow: (theme) => theme.customShadows.z8,
                        color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
                        bgcolor: 'common.white',
                        '&:hover': { bgcolor: 'grey.300' }
                      }}
                    >
                      Mint Now
                    </Button>
                  </MotionInView>
                </>
              )}
              {!(transactionHash && transactionHash?.transactionHash) || (
                <>
                  <MotionInView variants={varFadeInDown} sx={{ color: 'common.white', mb: 5 }}>
                    <Typography style={{ display: 'inline', padding: '0px 15px' }} variant="h2">
                      <a
                        href={`https://rinkeby.etherscan.io/tx/${transactionHash?.transactionHash}`}
                        target="_blank"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        rel="noreferrer"
                      >
                        View On Etherscan <br />
                      </a>
                    </Typography>
                    <Typography style={{ display: 'inline', padding: '0px 15px' }} variant="h2">
                      <a
                        href={`https://testnet.opensea.io/`}
                        target="_blank"
                        style={{ color: 'inherit', textDecoration: 'none' }}
                        rel="noreferrer"
                      >
                        View On OpenSea
                      </a>
                    </Typography>
                  </MotionInView>
                </>
              )}
            </>
          )}
        </Box>
      </ContentStyle>
    </Container>
  );
}
