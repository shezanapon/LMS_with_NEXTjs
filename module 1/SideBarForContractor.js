import * as React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from '@material-ui/core/Typography';
import ContractorData from "./ContractorData.js";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import InfoIcon from '@material-ui/icons/Info';

const SideBarForContractor = ({setOption,show,secondModule,thirdModule,fourthModule,fifthModule}) => {
  const [color, setColor] = React.useState("Conditions of Engagement");
  const [expanded, setExpanded] = React.useState("Module 1 - Human Resources");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSideBarClick = (option,i) => {
    console.log("option",option);
    if((i<2||((secondModule===true)?(i<3):(i<2)))||(i<2||((thirdModule===true)?(i<4):(i<2)))||(i<2||((fourthModule===true)?(i<5):(i<2)))){
      setOption(option)
      setColor(option?.name)
    }
  };

// console.log("show",show);
  return (
    <div >
      {ContractorData.map((data, i) => {
        return (
          <>
            <div key={i} >
              <Accordion
             
                square
                expanded={expanded === data?.accordion}
                onChange={handleChange(data?.accordion)}
              >
                <AccordionSummary
                 
                 expandIcon={<ExpandMoreIcon />} style={{display:"flex",marginBottom:"5px"}}>
                  <div>
                    
                  <Typography style={{ fontWeight: "bold",float:"left" }}>
                    {data?.accordion}
                  </Typography>
                  </div>
                  <div style={{float:"right"}}>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                 
                     <div>
                     {data?.children?.map((option, index) => {
                       return (
                         <>
                          <div style={{display:"flex"}}>
                         <div style={{width:"97%"}}>
                           <li
                             key={index}
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
                          {(i<1)?<InfoIcon/>: ((i<2||((secondModule===true)?(i<3):(i<2)))||(i<2||((thirdModule===true)?(i<4):(i<2)))||(i<2||((fourthModule===true)?(i<5):(i<2))))
                            ?((((secondModule===true)&&(i<2))||((thirdModule===true)&&(i<3))||((fourthModule===true)&&(i<4)||((fifthModule===true)&&(i<5))))?<CheckCircleIcon style={{color:"green"}}/>:<RadioButtonUncheckedIcon/>):<LockOutlinedIcon/>}
                             
                             <Typography
                               style={{
                                 marginLeft: ".5rem",
                                 marginTop: 0,
                                 marginBottom: 0,
                                 display: "inline-block",
                                 width: "70%",
                               }}
                             
                               onClick={() => {
                                 setOption(null),
                                 handleSideBarClick(option,i)
                               }}
                             >
                               {option?.name}
                             </Typography>
                             
                           </li>
                           </div>
                           <div style={{width:"3%"}}>
                            <MoreVertIcon sx={{ ml: "auto" }} />
                           </div>
                           </div>
                         </>
                       );
                     })}
                   </div>

                </AccordionDetails>
              </Accordion>
            </div>
          </>
        );
      })}
      
    </div>
  );
}


export default SideBarForContractor;