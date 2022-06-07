import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../components/InputAndButtons.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import loremString from "./loremtext";
import Words from "../words";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import LoremOutput from "../components/LoremOutput";

export default function BasicButtons() {
  const [sentances, setSentances] = useState<string>("");
  const [outputSentances, setOutputSentances] = useState<string>("");
  const [lastZoomerWordSelected, setLastZoomerWordSelected] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    const numberOfSentances = parseInt(event.target.value);
    const arrayOfStringSentances = loremString.match(/[^\.!\?]+[\.!\?]+/g);
    const randomZoomerWord = () => {
      return Words[Math.floor(Math.random() * Words.length)];
    };
    if (arrayOfStringSentances && numberOfSentances === 1) {
      let firstTenSentances = arrayOfStringSentances.filter((el, idx) => idx < 6);
      let individualWords = firstTenSentances.map((el) =>
        el.split(" ").map((words) => words.replace(words, randomZoomerWord))
      );
      let newSentance = individualWords
        .map((words) => words.join(" ") + ".")
        .join(" ")
        .toLocaleLowerCase();
      let newSentanceSplit = newSentance.match(/[^\.!\?]+[\.!\?]+/g);
      if (newSentanceSplit) {
        let structuredWords = newSentanceSplit?.map((el) =>
          el
            .split(" ")
            .map((words) => words)
            .join(" ")
            .trim()
        );
        let finalOutput = structuredWords?.map((el) => el.charAt(0).toUpperCase() + el.substring(1)).join(" ");
        console.log(finalOutput);
        setOutputSentances(finalOutput);
      }
    }
    setSentances(event.target.value as string);
  };
  return (
    <div className="copy__container">
      <div className="text__output">
        <LoremOutput outputSentances={outputSentances} />
      </div>
      <div className="buttons__Container">
        <div className="sentance__select">
          <Box className="input__box" sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Paragraph</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sentances}
                label="Sentaces"
                onChange={handleChange}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Copy</Button>
        </Stack>
      </div>
    </div>
  );
}
