import { Icon } from '@iconify/react';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
import chevronRightFill from '@iconify/icons-eva/chevron-right-fill';
// material
import { useTheme, styled, alpha } from '@mui/material/styles';
import {
  Box,
  Grid,
  Card,
  Link,
  Stack,
  Button,
  Divider,
  Container,
  Typography
} from '@mui/material';
//
import { varFadeIn, varFadeInUp, MotionInView, varFadeInDown } from '../../animate';

// ----------------------------------------------------------------------

const LICENSES = ['Standard', 'Standard Plus', 'Extended'];

const PLANS = [...Array(3)].map((_, index) => ({
  license: LICENSES[index],
  commons: ['One end products', '12 months updates', '6 months of support'],
  options: [
    'JavaScript version',
    'TypeScript version',
    'Design Resources',
    'Commercial applications'
  ],
  icons: [
    '/static/home/ic_sketch.svg',
    '/static/home/ic_figma.svg',
    '/static/home/ic_js.svg',
    '/static/home/ic_ts.svg'
  ]
}));

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

type PlanCardProps = {
  plan: {
    license: string;
    commons: string[];
    options: string[];
    icons: string[];
  };
  cardIndex: number;
};

function PlanCard({ plan, cardIndex }: PlanCardProps) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const { license, commons, options, icons } = plan;

  return (
    <Card
      sx={{
        p: 5,
        boxShadow: (theme) =>
          `0px 48px 80px ${alpha(
            isLight ? theme.palette.grey[500] : theme.palette.common.black,
            0.12
          )}`,
        ...(cardIndex === 1 && {
          boxShadow: (theme) =>
            `0px 48px 80px ${alpha(
              isLight ? theme.palette.grey[500] : theme.palette.common.black,
              0.48
            )}`
        })
      }}
    >
      <Stack spacing={5}>
        <div>
          <Typography variant="overline" sx={{ mb: 2, color: 'text.disabled', display: 'block' }}>
            LICENSE
          </Typography>
          <Typography variant="h4">{license}</Typography>
        </div>

        {cardIndex === 0 ? (
          <Box component="img" src={icons[2]} sx={{ width: 40, height: 40 }} />
        ) : (
          <Stack direction="row" spacing={1}>
            {icons.map((icon) => (
              <Box key={icon} component="img" src={icon} sx={{ width: 40, height: 40 }} />
            ))}
          </Stack>
        )}

        <Stack spacing={2.5}>
          {commons.map((option) => (
            <Stack key={option} spacing={1.5} direction="row" alignItems="center">
              <Box
                component={Icon}
                icon={checkmarkFill}
                sx={{ color: 'primary.main', width: 20, height: 20 }}
              />
              <Typography variant="body2">{option}</Typography>
            </Stack>
          ))}

          <Divider sx={{ borderStyle: 'dashed' }} />

          {options.map((option, optionIndex) => {
            const disabledLine =
              (cardIndex === 0 && optionIndex === 1) ||
              (cardIndex === 0 && optionIndex === 2) ||
              (cardIndex === 0 && optionIndex === 3) ||
              (cardIndex === 1 && optionIndex === 3);

            return (
              <Stack
                spacing={1.5}
                direction="row"
                alignItems="center"
                sx={{
                  ...(disabledLine && { color: 'text.disabled' })
                }}
                key={option}
              >
                <Box
                  component={Icon}
                  icon={checkmarkFill}
                  sx={{
                    width: 20,
                    height: 20,
                    color: 'primary.main',
                    ...(disabledLine && { color: 'text.disabled' })
                  }}
                />
                <Typography variant="body2">{option}</Typography>
              </Stack>
            );
          })}
        </Stack>

        <Stack direction="row" justifyContent="flex-end">
          <Link
            color="text.secondary"
            underline="always"
            target="_blank"
            href="https://material-ui.com/store/license/#i-standard-license"
            sx={{
              typography: 'body2',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            Learn more <Icon icon={chevronRightFill} width={20} height={20} />
          </Link>
        </Stack>

        <Button
          size="large"
          fullWidth
          variant={cardIndex === 1 ? 'contained' : 'outlined'}
          target="_blank"
          href="https://material-ui.com/store/items/minimal-dashboard/"
        >
          Choose Plan
        </Button>
      </Stack>
    </Card>
  );
}

export default function LandingPricingPlans() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <RootStyle id="team">
      <Container maxWidth="lg">
        <MotionInView variants={varFadeIn}>
          <Box sx={{ p: 2, mt: 5, textAlign: 'center' }}>
            <MotionInView variants={varFadeInDown}>
              <Typography variant="h3">Have any questions?</Typography>
            </MotionInView>

            <MotionInView variants={varFadeInDown}>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                If your question is not below please reach out in any of our community chats.
              </Typography>
            </MotionInView>
          </Box>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
