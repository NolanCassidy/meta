import React, { useEffect } from 'react';
// material
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
import {
  LoungeHero,
  LoungeHeroTwo,
  LandingMinimal,
  LandingDarkMode,
  LandingThemeColor,
  LandingPricingPlans,
  LandingAdvertisement,
  LandingCounter,
  LandingCleanInterfaces,
  LandingHugePackElements
} from '../components/_external-pages/landing';

import { FaqsList } from '../components/_external-pages/faqs';

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
  function scrollToComponent() {
    let anchor = window.location.hash?.substring(1);
    if (anchor) {
      console.log(anchor);
      var element_to_scroll_to = document.getElementById(anchor);
      if (element_to_scroll_to) {
        console.log('Found');
        element_to_scroll_to.scrollIntoView({
          behavior: 'smooth'
        });
        element_to_scroll_to.focus();
      }
    }
  }

  useEffect(() => {
    scrollToComponent();
  }, []);

  return (
    <RootStyle title="The Lounge | Meta Llama">
      <LoungeHero />
      <ContentStyle>
        <LandingAdvertisement />
        <LandingCounter />
        <LoungeHeroTwo />
        <LandingThemeColor />
        <LandingHugePackElements />
        <LandingMinimal />
        <LandingPricingPlans />
        <FaqsList />
      </ContentStyle>
    </RootStyle>
  );
}
