// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_LOUNGE = '/lounge';
const ROOTS_ROADMAP = '/lounge#roadmap';
const ROOTS_TEAM = '/lounge#team';
const ROOTS_BUY = '/lounge#buy';
const ROOTS_FEATURES = '/lounge#features';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  lounge: ROOTS_LOUNGE,
  roadmap: ROOTS_ROADMAP,
  team: ROOTS_TEAM,
  buy: ROOTS_BUY,
  features: ROOTS_FEATURES,
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
