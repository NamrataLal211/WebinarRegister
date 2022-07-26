import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Register from './Register';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabComponent(props) {
  const navigate=useNavigate();
  const {id}=props

const handleLogin=()=>{
    navigate("/login")  
 }
  const handleRegister=()=>{
    navigate("/register")  
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={id} aria-label="tabs example">
          <Tab label="Register" onClick={handleRegister} {...a11yProps(id)} />
          <Tab label="Sign In " onClick={handleLogin} {...a11yProps(id)} />
        </Tabs>
      </Box>
      <TabPanel value={id} index={0} >
         <Register/>
      </TabPanel>
      <TabPanel value={id} index={1}>
         <Login/>
      </TabPanel>
      
    </Box>
  );
}