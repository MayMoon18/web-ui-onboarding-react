import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, Typography, Box } from '@material-ui/core'

import './styles/Triforce.css';
import copeImage from './../images/cope_image.png';
import projectOrAccountImage from './../images/project_or_account.png';
import uiStudioImage from './../images/UI_Studio.png';
import globantLogo from './../images/Globant-logo.png';

import Footer from './shared/Footer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function Triforce({ addedName }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className='triforce_letter_div'>
        <img src={globantLogo} alt='Globant Logo' width='12%' />
        <h1>The Triforce</h1>
        <p>The three aspects consist of the Studio, TDC and Accounts</p>
      </div>
      <div className='triforce_name_div'>
        <p>{addedName}, you are here</p>
      </div>
      <Paper className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Expertise' />
          <Tab label='Site' />
<<<<<<< HEAD
          <Tab label='Business' />
=======
          <Tab label='Project' />
>>>>>>> 355b29956ba8a68fe019cf38de990d3b4937ba1f
        </Tabs>
      </Paper>
        <TabPanel value={value} index={0}>
          <img src={uiStudioImage} alt='UI Studio' className="tabPanel_img"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <img src={copeImage} alt='COPE' />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <img src={projectOrAccountImage} alt='Project or Account' />
        </TabPanel>
<<<<<<< HEAD
      <Footer backUrl='career-path' nextUrl='values' />
=======
      <Footer backUrl='career-path' nextUrl='/' />
>>>>>>> 355b29956ba8a68fe019cf38de990d3b4937ba1f
    </React.Fragment>
  );
}

export default Triforce;
