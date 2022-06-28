import { useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { CustomerNavbar } from './customer-navbar';

const CustomerLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 54,
}));

export const CustomerLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <CustomerLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </CustomerLayoutRoot>
      <CustomerNavbar onSidebarOpen={() => setSidebarOpen(true)} />
  </>
  );
};
