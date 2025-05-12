import '@mui/material/styles';

declare module '@mui/material/Grid' {
  interface GridProps {
    item?: boolean;
    zeroMinWidth?: boolean;
  }
}