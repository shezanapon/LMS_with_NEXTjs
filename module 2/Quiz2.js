
import * as React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {  useForm } from "react-hook-form";
import Q1 from "../module 2/quiz2questions/Q1";
import Q2 from "../module 2/quiz2questions/Q2";
import Q3 from "../module 2/quiz2questions/Q3";
import Q4 from "../module 2/quiz2questions/Q4";
import Q5 from "../module 2/quiz2questions/Q5";
import Q6 from "../module 2/quiz2questions/Q6";
import Q7 from "../module 2/quiz2questions/Q7";
import Q8 from "../module 2/quiz2questions/Q8";
import Q9 from "../module 2/quiz2questions/Q9";
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Divider, Grid, Step, StepButton, Stepper } from "@material-ui/core";


const stepStyle = {
  "&.MuiStepIcon-root": {
    fontSize: "3rem",
  },

  "& .MuiStepConnector-line": {
    borderTopWidth: 3,
    borderRadius: 1,
  },
  "& .Mui-active": {
    borderTopWidth: 3,
    borderRadius: 1,

    "&.MuiStepIcon-root": {
      color: "#2f9eec",
      fontSize: "1.9rem",
      borderStyle: "solid",
      borderColor: "white",
      borderWidth: "4px",
      borderRadius: "50%",
      boxShadow: "0 0 0 2px #2f9eec",
    },
  },
};


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


export default function Quiz2() {
  const classes = useStyles();

  function getSteps() {
    return ["1", "2", "3", "4", "5", "6", "7","8","9"];
  };
  function getStepContent(step,setValue) {
    switch (step) {
      case 0:
        return <Q1 control={control}/>;
      case 1:
        return <Q2 control={control}/>;
      case 2:
        return <Q3 control={control}/>;
      case 3:
        return <Q4 control={control}/>;
      case 4:
        return <Q5 control={control}/>;
      case 5:
        return <Q6 control={control}/>;
      case 6:
        return <Q7 control={control} />;
        case 7:
        return <Q8 control={control} />;
        case 8:
        return <Q9 control={control} setValue={setValue}/>;
  
      default:
        return "unknown";
    }
  }
  const steps = getSteps();
  const { handleSubmit,setValue, control } = useForm({});
  const handleFinalSubmit = (data) => {
    console.log(data);
  };

 
  
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? 
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };


  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : true);
  };
 
  
  return (
    <Box p={4}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quiz Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion
        style={{ borderRadius: "8px" }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header"expandIcon={<ExpandMoreIcon />}>
          <Typography>Questions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
          <Grid>
           
              <Grid>
               
                  <Typography style={{ fontWeight: "bold" }}>
                    {" "}
                    Questions 
                  </Typography>
                  </Grid>
          
            <br/>
            <Divider />
            <br />
            <Stepper activeStep={activeStep} sx={stepStyle}>
              {steps.map((step, index) => {
                return (
                  <>
                  <Step key={index}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                      {step}
                    </StepButton>
                  </Step>
                  </>
                );
              })}
            </Stepper>
            <br />
            <Grid>
            <form onSubmit={handleSubmit((data) => handleFinalSubmit(data))}>
              <>
                {getStepContent(activeStep)}
                <br />
                <Container sx={{ marginTop: "20px" }} maxWidth={"md"}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid xs={6}>
                        {activeStep === 0 ? null : (
                          <Button
                           
                            onClick={handleBack}
                            variant="contained" color="primary"
                          >
                            Back
                          </Button>
                        )}
                      </Grid>
                      <Grid xs={6} style={{ textAlign: "right" }}>
                        {activeStep === 8 ? null : (
                          <Button
                           
                            onClick={handleNext}
                            variant="contained" color="primary"
                          >
                            NEXT
                          </Button>
                        )}
                        {activeStep === 8 ? (
                          <Button
                          
                            variant="contained" color="secondary"
                            type="submit"
                          >
                            SUBMIT
                          </Button>
                        ) : null}
                      </Grid>
                    </Grid>
                  </Box>
                </Container>
              </>
            </form>
            </Grid>
            </Grid>
          </>
        </AccordionDetails>
      </Accordion>
      <br />
      <Typography variant="h5">Explanation:</Typography>
      <Typography variant="body2" sx={{ color: "#000000" }}>
        No explanation Available
      </Typography>
    </Box>
  );
}
