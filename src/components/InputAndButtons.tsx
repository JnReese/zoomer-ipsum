import "../components/InputAndButtons.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import loremString from "./loremtext";
import Words from "../words";
import Select from "@mui/material/Select";
import { useState } from "react";
import LoremOutput from "../components/LoremOutput";

type PassedTypes = {
  type?: string;
};

export default function BasicButtons({ type }: PassedTypes) {
  const [sentenceCount, setSentenceCount] = useState(8);

  const chooseWords = () => {
    return type === "boomer" ? Words[1] : Words[0];
  };

  const chunkSentences = (arr: string[]) => {
    const chunks = [];
    const chunkSize = 8;
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const sentences = () => {
    const arrayOfStringSentances = loremString.match(/[^\.!\?]+[\.!\?]+/g) ?? [];
    const randomWord = () => {
      return chooseWords()[Math.floor(Math.random() * chooseWords().length)];
    };

    let allSentances = arrayOfStringSentances.filter((el, idx) => idx < sentenceCount);
    let individualWords = allSentances.map((el) => el.split(" ").map((words) => words.replace(words, randomWord)));
    let newSentance = individualWords
      .map((words) => words.join(" ") + ".")
      .join(" ")
      .toLocaleLowerCase();
    let newSentanceSplit = newSentance.match(/[^\.!\?]+[\.!\?]+/g) ?? [];
    let newSentanceUpperCased = newSentanceSplit.map(
      (el) => el.trim().charAt(0).toUpperCase() + el.trim().substring(1)
    );
    let addedSpace = newSentanceUpperCased.map((el) => "  " + el);

    const chunks = chunkSentences(addedSpace);
    return chunks.map((chunk, idx) => {
      return <p key={idx}>{chunk.join("")}</p>;
    });
  };

  return (
    <div className="copy__container">
      <div className="text__output">
        <LoremOutput>{sentences()}</LoremOutput>
      </div>
      <div className="buttons__Container">
        <div className="sentance__select">
          <Box className="input__box" sx={{ minWidth: 150 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Paragraph</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Sentaces"
                value={sentenceCount}
                onChange={(e) => {
                  setSentenceCount(Number(e.target.value));
                }}
              >
                <MenuItem value={8}>One</MenuItem>
                <MenuItem value={24}>Three</MenuItem>
                <MenuItem value={40}>Five</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </div>
  );
}
