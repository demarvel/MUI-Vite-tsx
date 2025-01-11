/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["EvoGloss", "P001"];
interface Props {
  label?: React.ReactNode;
}

export default function Autocomplete_MainOrder(
  props: React.PropsWithChildren<Props>
) {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br /> */}
      <Autocomplete
        fullWidth={true}
        value={value}
        onChange={(_event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        renderInput={(params) => <TextField {...params} label={props.label} />}
      />
    </div>
  );
}
