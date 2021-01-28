import React, {useState, useEffect} from 'react';
import Dialog from '@material-ui/core/Dialog';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center'
  },
}));


function Success({userAnswer, answers, values, setStart}) {
  const classes = useStyles();
  const {firstName, lastName} = values
const [score, setScore] = useState(0)

useEffect(() => {

  setStart(false)

    for (let i=0; i <answers.length; i++){
 
      if(answers[i] === userAnswer[i]) setScore(score=>score+1)
    }
    setScore(score=>score*10)
}, [])
 
    
     
    
   
  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
        <AppBar position="static">
          <Typography variant="h6" className={classes.title}>
              Result
          </Typography>
       
        </AppBar>
        <div style={{padding:'10px'}} className='success'>
            <h2>Thank You {lastName} {firstName} For Your Submission</h2>
            <p>Your Score: {score}%</p>
            <p>You will get an email with further instructions.</p>
        </div>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
}

export default Success
