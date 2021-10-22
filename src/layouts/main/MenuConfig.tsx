import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import activityFill from '@iconify/icons-eva/activity-fill';
import layersFill from '@iconify/icons-eva/layers-fill';
import funnelFill from '@iconify/icons-eva/funnel-fill';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Mint',
    path: PATH_DASHBOARD.buy,
    icon: <Icon icon={layersFill} {...ICON_SIZE} />
  },
  {
    title: 'Roadmap',
    path: PATH_DASHBOARD.roadmap,
    icon: <Icon icon={funnelFill} {...ICON_SIZE} />
  },
  {
    title: 'Team',
    path: PATH_DASHBOARD.team,
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Features',
    path: PATH_DASHBOARD.features,
    icon: <Icon icon={activityFill} {...ICON_SIZE} />
  }
];

export default menuConfig;
