import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './ComponentStyles.css'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  
  },
  formControl: {
    margin: theme.spacing(3),
  },
  
}));



function Confirm( {tests,userAnswer, nextStep, prevStep, values}) {
  
  const classes = useStyles();
  const [ans0, ans1, ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9  ] = userAnswer
  const {firstName, lastName} = values

  const Continue = e => {
    e.preventDefault();

    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

  return (
    <MuiThemeProvider>
      <>
        
          <AppBar position="static" style={{ background: '#2E3B55' }}>
          <Toolbar>
          
            <Typography variant="p" className={classes.title}>
              Dear {firstName} {lastName} Please Double Check Your Answers
            </Typography>
          </Toolbar>
        </AppBar>
          <List>
            <ListItem>
              <ListItemText primary={`Question: ${tests[0].que}`} secondary={`Your answer: ${ans0 || ''}`}/>
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[1].que}`} secondary={`Your answer: ${ans1 ||''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[2].que}`} secondary={`Your answer: ${ans2 || ''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[3].que}`} secondary={`Your answer: ${ans3||''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[4].que}`} secondary={`Your answer: ${ans4||''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[5].que}`} secondary={`Your answer: ${ans5||''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[6].que}`} secondary={`Your answer: ${ans6||''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[7].que}`} secondary={`Your answer: ${ans7||''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[8].que}`} secondary={`Your answer: ${ans8||''}`} />
            </ListItem>
            <ListItem>
            <ListItemText primary={`Question: ${tests[9].que}`} secondary={`Your answer: ${ans9||''}`} />
            </ListItem>
          </List>
          <br />
          <ul>
              <li>
              <Button
            color="primary"
            variant="contained"
            onClick={Continue}
            className='button'
          >Confirm & Continue</Button>
          <Button
            color="primary"
            variant="contained"
            onClick={back}
            className='button'
          >Back</Button>

          
        </li>
      </ul>
      </>
    </MuiThemeProvider>
  );
}

export default Confirm
