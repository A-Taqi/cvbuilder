// App.js
import React, { useState } from 'react';
//import './styles/App.css';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CVBuilder from './components/CVBuilder';
import CVPreview from './components/CVPreview';

const drawerWidth = 240;
const navItems = ['Build', 'Preview'];

function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [cvData, setCvData] = useState([]);

  const buildCV = (data) => {
    setCvData({
      ...cvData,
      generalInfo: data.generalInfo ?? cvData.generalInfo,
      education: data.education ?? cvData.education,
      career: data.career ?? cvData.career
    });
  }

  const [currentPage, setCurrentPage] = useState('Build');

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CV Builder
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => setCurrentPage(item)}>
              <ListItemText primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CssBaseline />
      <AppBar component="nav" >
        <Toolbar>
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            CV Builder
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }} onClick={() => setCurrentPage(item)}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3, backgroundColor: 'ghostwhite' }}>
        <Toolbar />
          <Box sx={{display: currentPage !== 'Build' ? 'none':''}}>
            <CVBuilder onUpdate={buildCV}/>
          </Box>
          <Box sx={{display: currentPage !== 'Preview' ? 'none':''}}>
            <CVPreview data={cvData}/>
          </Box>
      </Box>
    </Box>
  );
}

export default App;
