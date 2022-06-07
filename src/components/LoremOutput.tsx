import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../components/LoremOutput.css";
import LoremString from "../components/loremtext";
import Words from "../words";
import { useState, useEffect } from "react";

export default function SimplePaper({ outputSentances }: any) {
  useEffect(() => {}, []);

  /*   const getIpsum = (num: number) => {
      return  lorem(num)
    } */
  return (
    <div className="lorem__container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 650,
            height: 500,
          },
        }}
      >
        <Paper className="innerText" elevation={3}>
          {outputSentances}
        </Paper>
      </Box>
    </div>
  );
}

// generate a specific amount of SENTACES with zoomer words scattered (always HALF of sentence length, never next to eachother)
