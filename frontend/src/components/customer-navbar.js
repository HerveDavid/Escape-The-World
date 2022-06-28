import NextLink from "next/link";
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../icons/bell';
import { UserCircle as UserCircleIcon } from '../icons/user-circle';
import { Users as UsersIcon } from '../icons/users';
import { useEffect } from 'react';

const items = [
  {
    href: '/',
    title: 'Home',
  },
  {
    href: '/tours',
    title: 'Tours',
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
            <Box key={index} sx={{ m: 2 }}>
              <NextLink href={item.href} passHref>
                <Box sx={{ color: "black" }}>{item.title}</Box>
              </NextLink>
            </Box>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge badgeContent={4} color="primary" variant="dot">
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1,
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </CustomerNavbarRoot>
    </>
  );
};

CustomerNavbar.propTypes = {
  onSidebarOpen: PropTypes.func,
};
