// material
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps } from '@mui/material';

// ----------------------------------------------------------------------

export default function Logo({ sx }: BoxProps) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;

  return (
    <Box style={{ position: 'relative' }} sx={{ width: 70, height: 70, ...sx }}>
      <svg style={{ position: 'relative' }} width="70" height="70">
        <circle cx="35" cy="35" r="30" stroke={PRIMARY_MAIN} strokeWidth="3" fill={PRIMARY_LIGHT} />
      </svg>
      <img
        style={{ position: 'absolute', top: 0, marginTop: '10px', marginLeft: '10px' }}
        src={'/static/logo.png'}
        alt="random llama"
        width="50"
        height="50"
      />
    </Box>
  );
}
