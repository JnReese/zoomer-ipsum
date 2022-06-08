import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../components/LoremOutput.css";
import React, { useState, useEffect, useRef } from "react";

type Props = {
  children?: React.ReactNode;
};

export default function SimplePaper({ children }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);
  const checkRef = () => {
    let text = ref.current?.innerText;
    navigator.clipboard.writeText(text ?? "");
  };

  return (
    <div className="lorem__container">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 450,
            height: 300,
          },
        }}
      >
        <Paper className="innerText" elevation={3} ref={ref}>
          {children}
        </Paper>
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={checkRef}>
          Copy Text
        </Button>
      </Stack>
    </div>
  );
}

// generate a specific amount of SENTACES with zoomer words scattered (always HALF of sentence length, never next to eachother)
