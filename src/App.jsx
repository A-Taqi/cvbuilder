import React, { useState, useEffect } from 'react';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CVBuilder from './components/CVBuilder';
import CVPreview from './components/CVPreview';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const drawerWidth = 240;
const navItems = ['Build', 'Preview', 'Load Sample', 'Clear Data'];

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

  const handleDrawerNavigation = (item) => {
    switch(item) {
      case 'Load Sample':
        loadSampleData();
        break;
      case 'Clear Data':
        setCvData({
          generalInfo: [],
          education: [],
          career: [],
        });
        break;
      default:
        setCurrentPage(item);
    }
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CV Builder
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={() => handleDrawerNavigation(item)}>
              <ListItemText primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const loadSampleData = () => {
    buildCV({
      generalInfo: {fullName: 'John Doe', email: 'johndoe@email.com', phone: '+1 (123) 456-7890'},
      education: [
        {title: 'ABC University', school: 'ABC University', degree: 'Bachelor of Science in Computer Science', dateFrom: '2010-08-01', dateTo: '2014-05-01'},
        {title: 'XYZ College', school: 'XYZ College', degree: 'High School Diploma', dateFrom: '2005-09-01', dateTo: '2010-06-01'},
      ],
      career: [
        {title: 'Tech Corp Inc.', company: 'Tech Corp Inc.', position: 'Software Engineer', 'role': 'Developed web applications using React and Node.js.',
          dateFrom: '2014-06-01'
        },
        {title: 'ABC Solutions', company: 'ABC Solutions', position: 'UI/UX Designer', 'role': 'Designed user-friendly interfaces for mobile apps.',
          dateFrom: '2012-01-01', dateTo: '2014-05-01'
        },
        {title: 'GlobalTech Ltd.', company: 'GlobalTech Ltd.', position: 'Project Manager', 'role': 'Led cross-functional teams and managed project timelines.',
        dateFrom: '2010-05-01', dateTo: '2011-12-01'
        },
      ]
    });
  }

  useEffect(() => {
        loadSampleData();
    return () => {
      
    };
  }, []); // The empty dependency array [] ensures this runs only once

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
              <Button key={item} sx={{ color: '#fff' }} onClick={() => handleDrawerNavigation(item)}>
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
            <CVBuilder data={cvData} onUpdate={buildCV}/>
          </Box>
          <Box sx={{display: currentPage !== 'Preview' ? 'none':''}}>
            <CVPreview data={cvData}/>
          </Box>
      </Box>
    </Box>
  );
}

export default App;
