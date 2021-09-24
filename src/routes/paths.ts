// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_LOUNGE = '/meta/lounge';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  lounge: ROOTS_LOUNGE,
  general: {
    pageOne: path(ROOTS_DASHBOARD, '/one'),
    pageTwo: path(ROOTS_DASHBOARD, '/two'),
    pageThree: path(ROOTS_DASHBOARD, '/three')
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/app'),
    pageFour: path(ROOTS_DASHBOARD, '/app/four'),
    pageFive: path(ROOTS_DASHBOARD, '/app/five'),
    pageSix: path(ROOTS_DASHBOARD, '/app/six')
  }
};
