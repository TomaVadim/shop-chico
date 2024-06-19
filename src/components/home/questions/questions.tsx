"use client";
import { useState } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { Question } from "@/shared/enums/routes/interfaces/question";
import { Typography } from "@mui/material";

interface Props {
  list: Question[];
}

export const Questions = ({ list }: Props): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState("");

  const handleExpand = (panel: string) => () => {
    setIsExpanded(panel === isExpanded ? "" : panel);
  };

  return (
    <div>
      {list.map(({ panel, title, description }) => (
        <Accordion
          key={panel}
          expanded={isExpanded === panel}
          onChange={handleExpand(panel)}
        >
          <AccordionSummary
            sx={{ border: "1px solid #ffde21" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${panel}-content`}
            id={panel}
          >
            <Typography variant="h2">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ border: "1px solid #ffde21" }}>
            {description}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
