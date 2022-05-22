import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { FilterAltOutlined, ShoppingCartOutlined } from '@mui/icons-material';


//* Search Bar
// Entire Search Bar
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

// Search Icon
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

// Search Box
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
//* --- //

export default function Navbar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  //* (DESKTOP) Open/ Close Handlers for Dropdown Menu
  //Open Dropdown Menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Dropdown Menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  //* --- //

  //* (MOBILE) Open/ Close Handlers for Dropdown Menu
  // Close Dropdown Menu
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // Open Dropdown Menu 
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  //* --- //

  //* (DESKTOP) Dropdown Menu
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      /* Menu positioning */
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      /* Open/ Close Handlers */
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Cart Items</MenuItem>
    </Menu>
  );
  //* --- //

  //* (MOBILE) Dropdown Menu
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (

    <Menu
      /* Menu positioning */
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      /* Open/ Close Handlers */
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Cart Items</MenuItem>
    </Menu>
  );
  //* --- //

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        // position="static"
        position="fixed"
        // position="relative"
        // position="sticky"
        elevation="1"
      >
        <Toolbar>
          {/* Searchbar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {/* Sorting Button */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <FilterAltOutlined />
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box 
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            {/* (DESKTOP) Cart Button with Dropdown */}
            <IconButton
              size="large"
              color="inherit"
              // edge="end"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <Badge badgeContent={4} color="error">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            {/* --- */}
          </Box>
          <Box
            sx={{ display: { xs: 'flex', md: 'none' } }}
          >
            {/* (MOBILE) Cart Button with Dropdown */}
            <IconButton
              size="large"
              color="inherit"
              // edge="end"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <Badge 
                badgeContent={4} 
                color="error"
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
            {/* --- */}
          </Box>
        </Toolbar>
      </AppBar>
      {/* Dropdown Menus */}
      {/* Mobile */}
      {renderMobileMenu}
      {/* Desktop */}
      {renderMenu}
      {/* Empty Toolbar for proper spacing under navbar */}
      <Toolbar />
    </Box>
  );
}
