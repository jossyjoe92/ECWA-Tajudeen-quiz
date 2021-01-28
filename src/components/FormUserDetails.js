import React, {useState} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
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
}));


function FormUserDetails({firstName, lastName, email, nextStep, setFirstName,setLastName,setEmail,setStart}) {
  const classes = useStyles();

  const [firstErr, setFirstErr] = useState('')
  const [lastErr, setLastErr] = useState('')
  const [emailErr, setEmailErr] = useState();
  const [isValid, setIsValid] = useState('');
    
    const errStyle = { color: "red", fontSize: "14px" };

  const Continue = e => {
    e.preventDefault();
    formValidation()
    if(isValid){
      setStart(true)
      nextStep();
    }
 
  };

   
  const formValidation = () => {
     
    let firstErr = "";
    let lastErr = "";
    let emailErr = "";


    setIsValid(true)
  
    if (!firstName) {
      firstErr = "Please provide first name";
      setIsValid(false);
    }else if (!lastName) {
        lastErr = "Please provide last name";
        setIsValid(false);
    }else if (!email) {
      emailErr = 'Email address is required';
      setIsValid (false);
  }else if (!/\S+@\S+\.\S+/.test(email)) {
      emailErr = 'Email address is invalid';
      setIsValid(false);
  }
    setLastErr(lastErr);
    setFirstErr(firstErr);
    setEmailErr(emailErr);
  
 
    return isValid;
   

}
  return (
    <MuiThemeProvider >
      <>
        <div className={classes.root}>
     
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
              Enter User Details
              </Typography>
            </Toolbar>
          </AppBar>
          <div className='user_details'>
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={(e)=> setFirstName(e.target.value)}
            defaultValue={firstName}
            margin="normal"
            fullWidth
          />
           <div style={errStyle}>{firstErr}</div>
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={(e)=> setLastName(e.target.value)}
            defaultValue={lastName}
            margin="normal"
            fullWidth
          />
           <div style={errStyle}>{lastErr}</div>
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={(e)=> setEmail(e.target.value)}
            defaultValue={email}
            margin="normal"
            fullWidth
          />
          <div style={errStyle}>{emailErr}</div>
          <br />
          <Button
            color="primary"
            variant="contained"
            onClick={Continue}
          >
            Start Test</Button>
          </div>
        </div>
      </>
    </MuiThemeProvider>
  );
}

export default FormUserDetails

