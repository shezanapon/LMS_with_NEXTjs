import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogContent,
  DialogContentText,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";

const Quiz = ({ option }) => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  
  const quiz=option.quiz;
  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    // again reset the selectedAnwerIndex, so it won't effect next question
    setActiveButton(null);
    setSelectedAnswerIndex(null);
    setActiveQuestion((prev) => prev + 1);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
  };

  const onAnswerSelected = (answer, index) => {
    setActiveButton(index);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
setResultShow(true);
    setResult((prev) =>
    selectedAnswer
      ? {
          ...prev,
          score: prev.score + 1,
          correctAnswers: prev.correctAnswers + 1,
        }
      : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
  );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [activeButton, setActiveButton] = useState(null)

  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [resultShow,setResultShow]=useState(false);
  return (
    <>{!resultShow?(
    <div style={{ paddingTop: "100px" }}>
      <Card variant="outlined" style={{maxWidth:"1000px"}}>
        <CardContent>
          <div>
            <Typography style={{ fontWeight: "bold" }}>
              <span className="active-question-no">
                Question: {addLeadingZero(activeQuestion + 1)}/
              </span>
              <span className="total-question">
                {addLeadingZero(questions.length)}
              </span>
            </Typography>
          </div>
          <Typography style={{ paddingTop: "50px", fontWeight:"bold",fontSize:"17px" }}>{question}</Typography>
          <ul>
            {choices.map((answer, index) => (
              <>
              <Grid xs={12}>
             
              <FormControl component="fieldset">
      
      <RadioGroup aria-label="gender" name={index} value={value} onChange={handleChange}>
        <FormControlLabel value={answer}control={<Radio />} onClick={() => onAnswerSelected(answer, index)} label={answer}/>
        
      </RadioGroup>
    </FormControl>
              </Grid>
              </>
            ))}
          </ul>

          <Grid xs={8} >
           
            {activeQuestion === questions.length - 1 ? null : (
              <Button
                variant="contained"
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                NEXT
              </Button>
            )}

            {activeQuestion === questions.length - 1 ? (
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                disabled={selectedAnswerIndex === null}
                onClick={handleClickOpen}
              >
                SUBMIT
              </Button>
            ) : null}
          </Grid>
          
        </CardContent>
      </Card>
     
    </div>
    ):(
      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      
      
    >
      <DialogContent >
        <DialogContentText id="alert-dialog-description">
          <Box style={{backgroundColor:"#ef5350",width:"300px",borderRadius:"15px",marginBottom:"20px"}}><h3 style={{fontWeight:"bold",color:"white",padding:"15px 15px 15px 115px"}}>Result</h3></Box>
          <Box style={{backgroundColor:"#005D7E",width:"300px",borderRadius:"15px",marginBottom:"20px"}}>
            <Typography style={{color:"white",padding:"15px 15px 15px 75px"}}>Total Question: <span>{questions.length}</span></Typography>
          </Box>
          <Box style={{backgroundColor:"#005D7E",width:"300px",borderRadius:"15px",marginBottom:"20px"}}>
          <Typography style={{color:"white",padding:"15px 15px 15px 75px"}}>Total Score:<span> {result.score}</span></Typography> 
          </Box>
        
          <Box style={{backgroundColor:"#005D7E",width:"300px",borderRadius:"15px",marginBottom:"20px"}}>
          <Typography style={{color:"white",padding:"15px 15px 15px 75px"}}>Correct Answers:<span> {result.correctAnswers}</span></Typography> 
          </Box>
          <Box style={{backgroundColor:"#005D7E",width:"300px",borderRadius:"15px",marginBottom:"20px"}}>
          <Typography style={{color:"white",padding:"15px 15px 15px 75px"}}>Wrong Answers:<span> {result.wrongAnswers}</span></Typography>
          </Box>
        </DialogContentText>
      </DialogContent>
    </Dialog>

    )}
    </>
  );
};

export default Quiz;
