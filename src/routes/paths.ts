// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}
const baseURL = '/meta';
const ROOTS_DASHBOARD = `${baseURL}/dashboard`;
const ROOTS_LOUNGE = `${baseURL}/lounge`;

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  lounge: ROOTS_LOUNGE,
  general: {
    pageOne: path(ROOTS_DASHBOARD, `${baseURL}/one`),
    pageTwo: path(ROOTS_DASHBOARD, `${baseURL}/two`),
    pageThree: path(ROOTS_DASHBOARD, `${baseURL}/three`)
  },
  app: {
    root: path(ROOTS_DASHBOARD, `${baseURL}/app`),
    pageFour: path(ROOTS_DASHBOARD, `${baseURL}/app/four`),
    pageFive: path(ROOTS_DASHBOARD, `${baseURL}/app/five`),
    pageSix: path(ROOTS_DASHBOARD, `${baseURL}/app/six`)
  }
};
