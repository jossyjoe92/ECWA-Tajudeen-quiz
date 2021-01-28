import React, {useState,useEffect} from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import shuffle from '../utilities'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));


function QuestionsDisplay({ test,nextStep, prevStep,step, userAnswer,setUserAnswer,i}) {

  const classes = useStyles();
  const [options] = useState([...test.options, test.ans])
  const [show, setShow] = useState(false)

  useEffect(() => {
 
    setShow(false)
    shuffle(options)
    setShow(true)
 
  }, [step,options])

  const Continue = e => {
    e.preventDefault();
    nextStep();
  };

  const back = e => {
    e.preventDefault();
    prevStep();
  };

const handleRadioChange = (event) => {
    const answer = userAnswer
    answer[i] = event.target.value
   setUserAnswer(answer)
  
  };

  return (show) && (
    <MuiThemeProvider>
      <>
      <div className='app_body'>
        <Typography variant="h6" className={classes.title}>
          {step+1}) {test.que}
        </Typography>
            
        <form >
          <FormControl component="fieldset"  className={classes.formControl}>
     
            <RadioGroup aria-label="quiz" name="quiz" value={userAnswer[i]} onChange={handleRadioChange}>
              <FormLabel component="legend"> A  <FormControlLabel value={options[0]} control={<Radio />} label={options[0]} />  </FormLabel>
              <FormLabel component="legend"> B  <FormControlLabel value={options[1]} control={<Radio />} label={options[1]} />  </FormLabel>
              <FormLabel component="legend"> C  <FormControlLabel value={options[2]} control={<Radio />} label={options[2]} /> </FormLabel>
              <FormLabel component="legend"> D  <FormControlLabel value={options[3]} control={<Radio />} label={options[3]} /> </FormLabel>
            </RadioGroup>
            <ul>
              <li>
              {(i>0)&& (<Button
              color="primary"
              variant="outlined"
              onClick={back}
              className={classes.button}
            >Previous</Button>)
          }
           
            <Button
              color="primary"
              variant="outlined"
              onClick={Continue}
              className={classes.button}
            >Next</Button>
              </li>
            </ul>
         

          </FormControl>
        </form>
        <br />  
        </div>
      </>
    </MuiThemeProvider>
  )
  
}

export default QuestionsDisplay


