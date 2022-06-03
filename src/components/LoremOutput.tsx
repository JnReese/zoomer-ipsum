import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../components/LoremOutput.css";
import LoremString from "../components/loremtext";
import Words from "../words";
import { useState, useEffect } from "react";

export default function SimplePaper() {
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
            width: 300,
            height: 300,
          },
        }}
      >
        <Paper elevation={3} />
      </Box>
    </div>
  );
}
