// material
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import {
  LandingHero,
  LoungeHero,
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingPricingPlans,
  LandingAdvertisement,
  LandingCleanInterfaces,
  LandingHugePackElements
} from '../components/_external-pages/landing';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: '100%'
});

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default
}));

// ----------------------------------------------------------------------

export default function LoungePage() {
  return (
    <RootStyle title="The Lounge | Meta Llama" id="move_top">
      <LoungeHero />
      <ContentStyle>
        <LandingMinimal />
        <LandingAdvertisement />
        <LandingHugePackElements />
        <LandingDarkMode />
        <LandingThemeColor />
        <LandingCleanInterfaces />
        <LandingPricingPlans />
      </ContentStyle>
    </RootStyle>
  );
}
