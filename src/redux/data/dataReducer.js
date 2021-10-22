const initialState = {
  loading: false,
  name: '',
  totalSupply: 0,
  cost: 0,
  claimable: 0,
  saleIsActive: false,
  error: false,
  errorMsg: ''
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_DATA_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: ''
      };
    case 'CHECK_DATA_SUCCESS':
      return {
        ...state,
        loading: false,
        name: action.payload.name,
        totalSupply: action.payload.totalSupply,
        cost: action.payload.cost,
        claimable: action.payload.claimable,
        saleIsActive: action.payload.saleIsActive,
        error: false,
        errorMsg: ''
      };
    case 'CHECK_DATA_FAILED':
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload
      };
    case 'CHECK_IMAGES_REQUEST':
      return {
        ...state,
        loading: true,
        error: false,
        errorMsg: ''
      };
    case 'CHECK_IMAGES_SUCCESS':
      return {
        ...state,
        loading: false,
        walletOfOwner: action.payload.walletOfOwner,
        ownedMetaData: action.payload.ownedMetaData,
        error: false,
        errorMsg: ''
      };
    case 'CHECK_IMAGES_FAILED':
      return {
        ...initialState,
        loading: false,
        error: true,
        errorMsg: action.payload
      };
    default:
      return state;
  }
};

export default dataReducer;
