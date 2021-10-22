import { capitalCase } from 'change-case';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../../redux/data/dataActions';
// material
import { styled, alpha } from '@mui/material/styles';
import {
  Box,
  Button,
  Stack,
  Radio,
  Tooltip,
  Container,
  Typography,
  RadioGroup,
  CardActionArea,
  FormControlLabel
} from '@mui/material';
// hooks
import useSettings from '../../../hooks/useSettings';
//
import { MotionInView, varFadeInUp, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0)
  // backgroundImage: `linear-gradient(180deg, ${theme.palette.grey[700]} 0%, ${alpha(
  //   theme.palette.grey[300],
  //   0
  // )} 100%)`
}));

// ----------------------------------------------------------------------

export default function LandingThemeColor() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const blockchain = useSelector((state) => state.blockchain);
  const [feedback, setFeedback] = useState('Holders will receive llama loot over time.');
  const [withdrawing, setWithdrawing] = useState(false);
  let [transactionHash, setTransactionHash] = useState(null);
  let [buyAmt, setBuyAmt] = useState(1);
  const withdraw = () => {
    if (data.amount <= 0) {
      return;
    }
    setFeedback('Requesting your Withdraw ...');
    setWithdrawing(true);
    blockchain.smartContract.methods
      .claim()
      .send({
        gasLimit: String(285000),
        to: '0xef5bf9dF7Ef55B8a1ed703C84f2Aa35067F78c55',
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((0).toString(), 'ether')
      })
      .once('error', (err) => {
        console.log(err);
        setFeedback('Withdraw  was cancelled ...');
        setWithdrawing(false);
      })
      .then((receipt) => {
        setFeedback('Congrats!');
        setTransactionHash(receipt);
        setWithdrawing(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== '' && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
    setTransactionHash(null);
  }, [blockchain.account]);

  return (
    <RootStyle>
      <Container maxWidth="lg" sx={{ position: 'relative', textAlign: 'center' }}>
        <MotionInView variants={varFadeInUp}>
          <Typography
            component="p"
            variant="overline"
            sx={{ mb: 2, color: 'text.disabled', display: 'block' }}
          >
            Meta Llama
          </Typography>
        </MotionInView>

        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Loot
          </Typography>
        </MotionInView>
        {blockchain.account === null ? (
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: (theme) => (theme.palette.mode === 'light' ? 'text.primary' : 'text.primary')
              }}
            >
              Please connect your metamask to see your balance.
            </Typography>
          </MotionInView>
        ) : (
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                color: (theme) => (theme.palette.mode === 'light' ? 'text.primary' : 'text.primary')
              }}
            >
              You currently have a claimable balance of{' '}
              {blockchain.web3.utils.fromWei(data.claimable.toString(), 'ether')} Eth
            </Typography>
          </MotionInView>
        )}
        <Box
          sx={{
            position: 'relative',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            width: '50%',
            marginTop: '5vh'
          }}
        >
          <Box component="img" src="/static/home/theme-color/grid.png" />

          <Box sx={{ position: 'absolute', top: 0 }}>
            <MotionInView variants={varFadeInUp}>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <img style={{ width: '576px' }} alt="screen" src={`/static/chest3.png`} />
              </motion.div>
            </MotionInView>
          </Box>

          <Box sx={{ position: 'absolute', top: 0, width: '80px' }}>
            <MotionInView variants={varFadeInDown}>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <img alt="sidebar" src={`/static/coins.png`} />
              </motion.div>
            </MotionInView>
          </Box>
          <Box sx={{ paddingTop: '12vh' }}>
            {withdrawing || (
              <>
                <MotionInView variants={varFadeInDown}>
                  <Button
                    size="large"
                    variant="contained"
                    onClick={(e) => {
                      e.preventDefault();
                      withdraw();
                      getData();
                    }}
                    disabled={data.claimable <= 0}
                    sx={{
                      whiteSpace: 'nowrap',
                      boxShadow: (theme) => theme.customShadows.z8,
                      color: (theme) => theme.palette.getContrastText(theme.palette.common.white),
                      bgcolor: 'common.white',
                      '&:hover': { bgcolor: 'grey.300' }
                    }}
                  >
                    Claim
                  </Button>
                </MotionInView>
              </>
            )}
            <Typography
              sx={{
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'text.primary' : 'text.primary',
                marginTop: '2vh'
              }}
            >
              {feedback}
            </Typography>
          </Box>
        </Box>
      </Container>
    </RootStyle>
  );
}
