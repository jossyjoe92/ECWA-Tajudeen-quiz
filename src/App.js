import React, {useState,useEffect} from 'react';
import  UserForm  from './components/UserForm';
import './App.css'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Countdown from 'react-countdown';
import ecwa from './Assets/ecwa-logo.png'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    titleName: {
      flexGrow: 1,
      textAlign: 'end'
    },
    formControl: {
      margin: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1, 1, 0, 0),
    },
}));
 

const App = () => {

  const classes = useStyles();
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [start, setStart] = useState(false)
  const [timeUp, setTimeUp] = useState(false)
  const [loading,setLoading] = useState(null)

  const values = {firstName, lastName, email};

  useEffect(() => {
    setLoading(true)
    setTimeout(function(){ setLoading(false)}, 5000);
  }, [])

  const onComplete= ()=>{
    console.log('completed')
    setTimeUp(true)
  }
  return (loading)?<img className='App-logo' src={ecwa} alt='' /> : (
    <div className="app">
        { (start) && (
          <AppBar position="static">
            <Toolbar>
            
              <Typography variant="p" className={classes.title}>
                Name: {lastName} {firstName}
              </Typography>
              <Typography variant="p" className={classes.titleName}>Time Left: &nbsp;
                <Countdown date={Date.now() + 60000} 
                onComplete={onComplete}
                />
              </Typography>
           </Toolbar>
        </AppBar>  )
        } 
        <UserForm 
        setStart={setStart}
          timeUp={timeUp}
          firstName={firstName}
          lastName={lastName}
          email={email}
          setFirstName={setFirstName}
          setLastName ={setLastName}
          setEmail = {setEmail}
          values= {values}
        />
    </div>
  );
}

export default App;