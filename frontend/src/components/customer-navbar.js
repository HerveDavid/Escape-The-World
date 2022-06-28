import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { useEffect } from 'react';
import { fontWeight } from "@mui/system";

const items = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/tours',
    title: 'Rooms',
  },
  {
    href: '/news',
    title: 'News',
  },
  {
    href: '/about',
    title: 'About',
  }
]

const CustomerNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3]
}));

export const CustomerNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
  }, [router.asPath]);

  return (
    <>
      <CustomerNavbarRoot {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2,
          }}
        >
          <Box sx={{ flexGrow: 1 }} />
          {items.map((item, index) => (
            <Box key={index}>
              <NextLink href={item.href} passHref>
                <Button variant="text" sx={{ m: 2 }} component="a">
                  <Typography sx={{ color: "black", fontWeight: 600 }}>{item.title}</Typography>
                </Button>
              </NextLink>
            </Box>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          <NextLink href="/register" passHref>
            <Button variant="text" sx={{ m: 2 }} component="a">
              <Typography sx={{ color: "black", fontWeight: 400, fontSize: 15 }}>
                Sign Up
              </Typography>
            </Button>
          </NextLink>
          <NextLink href="/login" passHref>
            <Button variant="outlined" sx={{ m: 2 }} component="a">
              <Typography sx={{ color: "blue", fontWeight: 400, fontSize: 15 }}>Sign In</Typography>
            </Button>
          </NextLink>
        </Toolbar>
      </CustomerNavbarRoot>
    </>
  );
};

CustomerNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
