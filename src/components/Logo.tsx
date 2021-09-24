// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  return (
    <Box style={{ position: 'relative' }} sx={{ width: 60, height: 60, ...sx }}>
      <svg style={{ position: 'relative' }} width="60" height="60">
        <circle
          cx="30"
          cy="30"
          r="25"
          stroke={PRIMARY_MAIN}
          stroke-width="3"
          fill={PRIMARY_LIGHT}
        />
      </svg>
      <img style={{ position: 'absolute', top: 0 }} src={'/meta/static/random_llama.gif'} />
    </Box>
  );
}
