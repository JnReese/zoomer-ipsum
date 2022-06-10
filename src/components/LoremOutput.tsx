import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "../components/LoremOutput.css";
import Popper from "@mui/material/Popper";
import React, { useRef, useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";

type Props = {
  children?: React.ReactNode;
};

export default function SimplePaper({ children }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  useEffect(() => {
    const timer = setTimeout(() => setAnchorEl(null), 2000);
    return () => clearTimeout(timer);
  }, [anchorEl]);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
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
            width: 600,
            height: 300,
          },
        }}
      >
        <Paper className="innerText" elevation={3} ref={ref}>
          {children}
        </Paper>
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={(event) => [checkRef(), handleClick(event)]}>
          Copy Text
        </Button>
        <Popper id={id} open={open} anchorEl={anchorEl}>
          <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>Copied {<FaRegCheckCircle />}</Box>
        </Popper>
      </Stack>
    </div>
  );
}

// generate a specific amount of SENTACES with zoomer words scattered (always HALF of sentence length, never next to eachother)
