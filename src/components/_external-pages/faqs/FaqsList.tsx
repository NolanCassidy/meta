import { Icon } from '@iconify/react';
import arrowIosDownwardFill from '@iconify/icons-eva/arrow-ios-downward-fill';
// material
import { Accordion, Typography, AccordionSummary, AccordionDetails } from '@mui/material';
// utils
import mockData from '../../../utils/mock-data';
//
import { varFadeIn, MotionInView } from '../../animate';

// ----------------------------------------------------------------------

const MOCK_FAQS =
  // [...Array(8)].map((_, index) => ({
  //   id: mockData.id(index),
  //   value: `panel${index + 1}`,
  //   heading: `Questions ${index + 1}`,
  //   detail: mockData.text.description(index)
  // }));

  [
    {
      id: 1,
      value: `1`,
      heading: `Who is Meta Llama?`,
      detail:
        'Meta Llama is moving through evolution and appears to us from different timelines. The flies guide them through the meta verse and will slowly reveal more to the community as time goes on. The main character of the meta verse has arrived.'
    },
    {
      id: 2,
      value: `2`,
      heading: `How do I get a Meta Llama?`,
      detail:
        'The first 5678 llamas are all sold through metallama.com for .0777 eth each plus gas fees. Afterwards they will be tradable via Opensea.'
    },
    {
      id: 3,
      value: `3`,
      heading: `What's the accepted payment type?`,
      detail:
        'Meta Llamas are minted on the Ethereum MainNet Network and can be purchased using ETH.'
    },
    {
      id: 4,
      value: `4`,
      heading: `What are the economics?`,
      detail:
        '5678 Meta Llamas will be created at .0777 eth each plus gas fees. Only 17 can be minted at a time. 100 Llamas will be minted to the company account for future giveaways and 1 of 1 sale to give back to the community. Portions of the proceeds will be given back to the holders from mint, resale, customization, and most importantly... future projects. The proceeds from Meta Llama will be going directly back to the holders and creation of flies and crias. Dont miss out on this early chance to get in with a connected team.'
    },
    {
      id: 5,
      value: `5`,
      heading: `How can I join the community?`,
      detail:
        'All social links can be found at the bottom of the website. If you have a llama you will be granted special access and features. If you do not own a llama you should still join in order to be a part of giveaways and future project whitelists.'
    }
  ];

// ----------------------------------------------------------------------

export default function FaqsList() {
  return (
    <MotionInView variants={varFadeIn} style={{ padding: '0px 10vw 10vh 10vw' }}>
      {MOCK_FAQS.map((accordion) => (
        <Accordion key={accordion.id}>
          <AccordionSummary
            expandIcon={<Icon icon={arrowIosDownwardFill} width={20} height={20} />}
          >
            <Typography variant="subtitle1">{accordion.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{accordion.detail}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </MotionInView>
  );
}
