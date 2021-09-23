// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/meta/dashboard';
const ROOTS_LOUNGE = '/meta/lounge';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  lounge: ROOTS_LOUNGE,
  general: {
    pageOne: path(ROOTS_DASHBOARD, '/meta/one'),
    pageTwo: path(ROOTS_DASHBOARD, '/meta/two'),
    pageThree: path(ROOTS_DASHBOARD, '/meta/three')
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/meta/app'),
    pageFour: path(ROOTS_DASHBOARD, '/meta/app/four'),
    pageFive: path(ROOTS_DASHBOARD, '/meta/app/five'),
    pageSix: path(ROOTS_DASHBOARD, '/meta/app/six')
  }
};
