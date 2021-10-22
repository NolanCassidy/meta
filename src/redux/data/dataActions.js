// log
import store from '../store';
import axios from 'axios';

const fetchDataRequest = () => {
  return {
    type: 'CHECK_DATA_REQUEST'
  };
};

const fetchDataSuccess = (payload) => {
  return {
    type: 'CHECK_DATA_SUCCESS',
    payload: payload
  };
};

const fetchDataFailed = (payload) => {
  return {
    type: 'CHECK_DATA_FAILED',
    payload: payload
  };
};

const fetchImagesRequest = () => {
  return {
    type: 'CHECK_IMAGES_REQUEST'
  };
};

const fetchImagesSuccess = (payload) => {
  return {
    type: 'CHECK_IMAGES_SUCCESS',
    payload: payload
  };
};

const fetchImagesFailed = (payload) => {
  return {
    type: 'CHECK_IMAGES_FAILED',
    payload: payload
  };
};

export const fetchData = (account) => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      let name = await store.getState().blockchain.smartContract.methods.name().call();
      let saleIsActive = await store
        .getState()
        .blockchain.smartContract.methods.saleIsActive()
        .call();
      let totalSupply = await store
        .getState()
        .blockchain.smartContract.methods.totalSupply()
        .call();
      let cost = await store.getState().blockchain.smartContract.methods.mintPrice().call();
      let claimable =
        (await store
          .getState()
          .blockchain.smartContract.methods.claimableBalance(account)
          .call()) || 0;

      dispatch(
        fetchDataSuccess({
          name,
          totalSupply,
          cost,
          claimable,
          saleIsActive
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchDataFailed('Could not load data from contract.'));
    }
  };
};

export const fetchImages = (account) => {
  return async (dispatch) => {
    dispatch(fetchImagesRequest());
    try {
      let walletOfOwner = await store
        .getState()
        .blockchain.smartContract.methods.walletOfOwner(account)
        .call();
      let ownerMetaArray = [];
      for (let i = 0; i < walletOfOwner.length; i++) {
        let metaData = await store
          .getState()
          .blockchain.smartContract.methods.tokenURI(walletOfOwner[i])
          .call();
        ownerMetaArray.push(metaData);
      }
      let metaList = ownerMetaArray.map(
        (metaData) => `https://ipfs.io/ipfs/${metaData.split('ipfs://')[1]}/`
      );
      let ownedMetaData = [];
      let res = await axios.all(metaList.map((l) => axios.get(l))).then(
        axios.spread((...res) => {
          ownedMetaData = res.map((r) => {
            return r.data;
          });
        })
      );

      dispatch(
        fetchImagesSuccess({
          walletOfOwner,
          ownerMetaArray,
          ownedMetaData
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(fetchImagesFailed('Could not load data from contract.'));
    }
  };
};
