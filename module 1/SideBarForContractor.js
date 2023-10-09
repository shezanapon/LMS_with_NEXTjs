import * as React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ContractorData from "./ContractorData.js";
import ContractorInductionProgram from "../pages/furlongCourses/ContractorInductionProgram.js";

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
const SideBarForContractor = ({ handleOption }) => {
    const [color, setColor] = React.useState('Conditions of Engagement');
  const [expanded, setExpanded] = React.useState('Module 1 - Human Resources');
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChangeExpanded = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSideBarClick = (option) => {
    handleOption(option);
    // console.log(option);
      setColor(option.name);

  };

  return (
    <div>
      {ContractorData.map((data,i) => {
        // console.log(i);
        return (
          <>
            <Accordion
          square  expanded={expanded === data.accordion} onChange={handleChange(data.accordion)}
            >
              <AccordionSummary>
                <Typography style={{ fontWeight: "bold" }}>
                  {data.accordion}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid>
                  {data.children.map((option, i) => {
                    // console.log(i);
                    <ContractorInductionProgram initial={option.name} content={option.url}/>
                    return (
                      <>
                      
                        <li
                          className="pointer"
                          style={{
                            display: "flex",
                            marginBottom: "14px",
                            fontSize: "16px",
                            backgroundColor:
                              color === option.name ? "#106786" : "#fff",
                            color: color === option.name ? "#fff" : "#000",
                            
                            
                          }}
                        >
                          <DescriptionIcon />

                          <Typography
                            style={{
                              marginLeft: ".5rem",
                              marginTop: 0,
                              marginBottom: 0,
                              display: "inline-block",
                              width: "70%",
                            }}
                            onClick={() => {handleSideBarClick(option);}}
                          >
                            {option.name}
                            
                          </Typography>
                          <MoreVertIcon sx={{ ml: "auto" }} />
                        </li>
                      </>
                    );
                  })}
                </Grid>
              </AccordionDetails>
            </Accordion>
          </>
        );
      })}
    </div>
  );

};

export default SideBarForContractor;