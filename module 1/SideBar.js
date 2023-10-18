import * as React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import resData from "./Data.js";
import Typography from "@material-ui/core/Typography";
import { Accordion, AccordionDetails, AccordionSummary, Box } from "@material-ui/core";


export default function SideBar({ setOption }) {
  const [color, setColor] = React.useState("Conditions of Engagement");
  const [expanded, setExpanded] = React.useState("Module 1 - Human Resources");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSideBarClick = async (option) => {
    await setOption(option);
    setColor(option?.name);

  };

  return (
    <div>
      {resData.map((data, i) => {
        return (
          <>
            <div key={i}>
              <Accordion
                square
                expanded={expanded === data?.accordion}
                onChange={handleChange(data?.accordion)}
              >
                <AccordionSummary>
                  <Typography style={{ fontWeight: "bold" }}>
                    {data?.accordion}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    {data?.children?.map((option, index) => {
                      return (
                        <>
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
                            <DescriptionIcon />
                            <Typography
                              style={{
                                marginLeft: ".5rem",
                                marginTop: 0,
                                marginBottom: 0,
                                display: "inline-block",
                                width: "70%",
                              }}
                              onClick={() => {
                                setOption(null), handleSideBarClick(option);
                              }}
                            >
                              {option?.name}
                            </Typography>
                            <MoreVertIcon sx={{ ml: "auto" }} />
                          </li>
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
      {/* {<Quiz count={count}/>} */}
    </div>
  );
}
