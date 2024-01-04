import { ThemeProvider, createTheme } from '@mui/material';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';
import LinkBehavior from '../components/LinkBehavior';

const RootProvider = ({ children }: PropsWithChildren) => {
  const [client] = useState(new QueryClient());
  const [theme] = useState(
    createTheme({
      components: {
        MuiLink: {
          defaultProps: {
            component: LinkBehavior,
          },
        },
        MuiButtonBase: {
          defaultProps: {
            LinkComponent: LinkBehavior,
          },
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};

export default RootProvider;
