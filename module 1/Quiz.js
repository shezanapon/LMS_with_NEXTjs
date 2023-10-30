import { useEffect, useState } from "react";
import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";


const Quiz = ({ option,setSecondModule,setThirdModule,setFourthModule,setFifthModule}) => {
  console.log("option",option);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  
  const [selectedAnswersObject, setSelectedAnswersObject] = useState([]);
  useEffect(() => {
    setSelectedAnswersObject([])
    const quiz = option?.quiz;
    const { questions } = quiz;
    setActiveQuestion(0);
    setResult({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    });
    setResultShow(false);
    setQuestions(questions);
  }, [option?.name]);

  const onClickNext = () => {
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

    setSelectedAnswersObject((prevAnswers) => {
      return { ...prevAnswers, [activeQuestion+1]: answer.toString()};
    });
    
    if (answer.toString() === questions?.[activeQuestion].correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };
  
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    if(questions.length===7){
      setSecondModule(true)
    }
    if(questions.length===9){
      setThirdModule(true)
    }
    if(questions.length===3){
      setFourthModule(true)
    }
    if(questions.length===1){
      setFifthModule(true)
    }
    console.log("juuu",questions.length);
    const completeObject={selectedAnswers: selectedAnswersObject,quiz:option?.quiz?.number,Name:option?.name,Program:option?.program,correctAnswer:result?.correctAnswers,WrongAnswer:result?.wrongAnswers};
    console.log("completeObject",completeObject);
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

  const [activeButton, setActiveButton] = useState(null);

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [resultShow, setResultShow] = useState(false);


  if (!questions) {
    return <p>Loading</p>;
  }

  if (resultShow) {
    return (
      <Box
        open={open}
        onClose={handleClose}
        style={{ padding: "0px 100px 0px 150px" }}
      >
        <Box
          style={{
            backgroundColor: "#ef5350",
            width: "300px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
              color: "white",
              padding: "15px 15px 15px 115px",
            }}
          >
            Result
          </h3>
        </Box>
        <Box
          style={{
            backgroundColor: "#005D7E",
            width: "300px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <Typography
            style={{ color: "white", padding: "15px 15px 15px 75px" }}
          >
            Total Question: <span>{questions?.length}</span>
          </Typography>
        </Box>
        <Box
          style={{
            backgroundColor: "#005D7E",
            width: "300px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <Typography
            style={{ color: "white", padding: "15px 15px 15px 75px" }}
          >
            Total Score:<span> {result?.score}</span>
          </Typography>
        </Box>

        <Box
          style={{
            backgroundColor: "#005D7E",
            width: "300px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <Typography
            style={{ color: "white", padding: "15px 15px 15px 75px" }}
          >
            Correct Answers:<span> {result?.correctAnswers}</span>
          </Typography>
        </Box>
        <Box
          style={{
            backgroundColor: "#005D7E",
            width: "300px",
            borderRadius: "15px",
            marginBottom: "20px",
          }}
        >
          <Typography
            style={{ color: "white", padding: "15px 15px 15px 75px" }}
          >
            Wrong Answers:<span> {result?.wrongAnswers}</span>
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box >
      
      <Card variant="outlined" style={{ maxWidth: "1000px" }}>
        <CardContent style={{ padding:"20px 0px 20px 30px" }}>
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
          <Typography
            style={{
              paddingTop: "50px",
              fontWeight: "bold",
              fontSize: "17px",
            }}
          >
            {questions?.[activeQuestion].question}
          </Typography>
          <ul>
            
            {questions?.[activeQuestion].choices?.map((answer, index) => (
              

              <>
                
                <div key={index}>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="Answers"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value={Object.values(answer)[0]}
                        control={<Radio />}
                        name="quiz"
                        onClick={() =>
                          onAnswerSelected(Object.keys(answer), index)
                        }
                        label={Object.values(answer)}
                      />
                    </RadioGroup>
                  </FormControl>

                </div>
              </>
            ))}
          </ul>

          <div>
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
                onClick={()=>handleClickOpen(questions.length)}
                // onSubmit={selectedAnswers}
              >
                SUBMIT
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>
      
    </Box>
  );
};

export default Quiz;
