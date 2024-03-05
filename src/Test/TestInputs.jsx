import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Input from "../Inputs/Input";
import { InputAdornment } from "@mui/material";
import Icon from "../DataDisplay/Icon";
import { useForm } from "react-hook-form";

export default function Inputs() {
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <BasicUsageExample />
        </Grid>
        <Grid item>
          <InputSizesExample />
        </Grid>
        <Grid item>
          <InputTypesExample />
        </Grid>
        <Grid item>
          <InputWithIconsExample />
        </Grid>
        <Grid item>
          <InputPlaceholderExample />
        </Grid>
        <Grid item>
          <InputCharacterCountExample />
        </Grid>
        <Grid item>
          <InputHelperTextExample />
        </Grid>
        <Grid item>
          <InputMultilineExample />
        </Grid>
        <Grid item>
          <InputMultilineSizesExample />
        </Grid>
        <Grid item>
          <InputMultiLineCharacterCountExample />
        </Grid>
        <Grid item>
          <InputReadOnlyExample />
        </Grid>
        <Grid item>
          <InputDisabledExample />
        </Grid>
      </Grid>
    </>
  );
}

const BasicUsageExample = () => {
  return (
    <>
      <Input />
    </>
  );
};

const InputSizesExample = () => {
  const [xs, setXS] = useState("");
  const [sm, setSM] = useState("");
  const [md, setMD] = useState("");
  const [lg, setLG] = useState("");
  const [xl, setXL] = useState("");

  return (
    <>
      <Input
        size="xs"
        placeholder="Input Size -  xs"
        value={xs}
        onChange={(e) => {
          setXS(e);
        }}
      />
      <p></p>

      <Input
        size="sm"
        placeholder="Input Size -  sm"
        value={sm}
        onChange={(e) => {
          setSM(e);
        }}
      />
      <p></p>

      <Input
        size="md"
        placeholder="Input Size -  md"
        value={md}
        onChange={(e) => {
          setMD(e);
        }}
      />
      <p></p>
      <Input
        size="lg"
        placeholder="Input Size -  lg"
        value={lg}
        onChange={(e) => {
          setLG(e);
        }}
      />
      <p></p>

      <Input
        size="xl"
        placeholder="Input Size -  xl"
        value={xl}
        onChange={(e) => {
          setXL(e);
        }}
      />
    </>
  );
};

const InputTypesExample = () => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Input
        size="xs"
        value={text}
        placeholder=" Type Text"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
      />
      <Input
        size="sm"
        value={password}
        placeholder="Type password"
        type="password"
        onChange={(e) => {
          setPassword(e);
        }}
      />
      <Input
        size="md"
        value={number}
        placeholder="Type Number"
        type="number"
        onChange={(e) => {
          setNumber(e);
        }}
      />
    </>
  );
};

const InputWithIconsExample = () => {
  const [text, setText] = useState("");

  return (
    <>
      <Input
        value={text}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
            </InputAdornment>
          ),
        }}
        placeholder="Start Adornment"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
        showCount
        // maxLength={100}
      />
      <Input
        value={text}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
            </InputAdornment>
          ),
        }}
        placeholder="End Adornment"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
      />
      <Input
        value={text}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Icon icon={"BoxIcon.BiSmile"} hoverIcon={"BoxIcon.BiWinkSmile"} />
            </InputAdornment>
          ),
          startAdornment: (
            <InputAdornment position="start">
              <Icon icon={"RemixIcon.RiAppsFill"} hoverIcon={"RemixIcon.RiAppsFill"} />
            </InputAdornment>
          ),
        }}
        placeholder="Start and End Adornment"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
      />
    </>
  );
};

const InputPlaceholderExample = () => {
  const [text, setText] = useState("");

  return (
    <>
      <Input
        value={text}
        placeholder="Placeholder Text"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
      />
    </>
  );
};
const InputCharacterCountExample = () => {
  const [textWithoutMessage, setTextWithMessage] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Input
        value={textWithoutMessage}
        placeholder="Charater limit Example"
        type="text"
        onChange={(e) => {
          setTextWithMessage(e);
        }}
        showCount
        rules={{
          required: "Required",
          maxLength: {
            value: 25,
            message: "",
          },
        }}
      />
      <Input
        value={text}
        placeholder="Charater limit with maxLength"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
        showCount
        rules={{
          required: "Required",
          maxLength: 10,
        }}
      />
    </>
  );
};

const InputHelperTextExample = () => {
  const [textLg, setTextLg] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Input
        value={text}
        placeholder="Helper Text with Max Count"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
        helperText="Some important text"
        showCount
        rules={{
          required: "Required",
          maxLength: 10,
        }}
      />
      <Input
        value={textLg}
        placeholder="Helper Text for larger input"
        type="text"
        onChange={(e) => {
          setTextLg(e);
        }}
        showCount
        size="lg"
        helperText="Some important text"
      />
    </>
  );
};
const InputMultilineSizesExample = () => {
  const [multilineText, setMultilineText] = useState("");
  const [rowsText, setRowsText] = useState("");
  const [maxRowsText, setMaxRowsText] = useState("");
  const [rowsWithMaxRowsText, setRowsWithMaxRows] = useState("");
  const [rowsWithMaxRowsTextXL, setRowsWithMaxRowsXL] = useState("");

  return (
    <>
      <Input
        size="xs"
        placeholder="xs - Rows (3)"
        multiline
        rows={3}
        value={multilineText}
        onChange={(e) => {
          setMultilineText(e);
        }}
      />
      <Input
        placeholder="sm - Rows (3)"
        multiline
        size="sm"
        rows={3}
        value={rowsText}
        onChange={(e) => {
          setRowsText(e);
        }}
      />
      <Input
        placeholder="md - Rows (3)"
        multiline
        size="md"
        rows={3}
        value={maxRowsText}
        onChange={(e) => {
          setMaxRowsText(e);
        }}
      />
      <Input
        placeholder="lg - Rows (3)"
        size="lg"
        multiline
        rows={3}
        value={rowsWithMaxRowsText}
        onChange={(e) => {
          setRowsWithMaxRows(e);
        }}
      />
      <Input
        placeholder="xl - Rows (3) "
        size="xl"
        multiline
        rows={3}
        maxRows={10}
        value={rowsWithMaxRowsTextXL}
        onChange={(e) => {
          setRowsWithMaxRowsXL(e);
        }}
      />
    </>
  );
};

const InputMultilineExample = () => {
  const [multilineText, setMultilineText] = useState("");
  const [rowsText, setRowsText] = useState("");
  const [maxRowsText, setMaxRowsText] = useState("");
  const [rowsWithMaxRowsText, setRowsWithMaxRows] = useState("Rows and Max rows together does not show up, it is not supported by MUI at the time of publish |");
  return (
    <>
      <Input
        placeholder="No rows or max rows defined Default Size - (md)"
        multiline
        value={multilineText}
        onChange={(e) => {
          setMultilineText(e);
        }}
      />
      <Input
        placeholder="Rows set to 4 - Default Size - (md)"
        multiline
        rows={4}
        value={rowsText}
        onChange={(e) => {
          setRowsText(e);
        }}
      />
      <Input
        placeholder="Max Rows set to 10 Default Size - (md)"
        multiline
        maxRows={10}
        value={maxRowsText}
        onChange={(e) => {
          setMaxRowsText(e);
        }}
      />
      <Input
        placeholder="Rows and Max rows together does not show up, it is not supported by MUI at the time of publish | Rows (4) and max rows (10) defined Default Size - (md)"
        multiline
        rows={4}
        maxRows={10}
        value={rowsWithMaxRowsText}
        onChange={(e) => {
          setRowsWithMaxRows(e);
        }}
      />
    </>
  );
};
const InputMultiLineCharacterCountExample = () => {
  const [textWithoutMessage, setTextWithMessage] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <Input
        value={textWithoutMessage}
        placeholder="Charater limit Example"
        type="text"
        multiline
        rows={4}
        maxRows={10}
        onChange={(e) => {
          setTextWithMessage(e);
        }}
        showCount
        rules={{
          required: "Required",
          maxLength: {
            value: 25,
            message: "",
          },
        }}
      />
      <Input
        value={text}
        placeholder="Charater limit with maxLength"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
        multiline
        maxRows={4}
        showCount
        rules={{
          required: "Required",
          maxLength: 10,
        }}
      />
    </>
  );
};

const InputReadOnlyExample = () => {
  const [text, setText] = useState("This is Read Only text in Input Control");
  const [multilineText, setMultilineText] = useState("This is Read Only text in Input Multiline Control");

  return (
    <>
      <Input
        value={text}
        onChange={(e) => {
          setText(e);
        }}
        InputProps={{
          readOnly: true,
        }}
      />
      <p></p>

      <Input
        value={multilineText}
        onChange={(e) => {
          setMultilineText(e);
        }}
        InputProps={{
          readOnly: true,
        }}
        multiline
        rows={3}
      />
    </>
  );
};

const InputDisabledExample = () => {
  const [text, setText] = useState("This is Disabled text in Input Control");
  const [multilineText, setMultilineText] = useState("This is Disabled text in Input Multiline Control");

  return (
    <>
      <Input
        value={text}
        onChange={(e) => {
          setText(e);
        }}
        InputProps={{
          readOnly: true,
        }}
        disabled
      />
      <p></p>

      <Input
        value={multilineText}
        onChange={(e) => {
          setMultilineText(e);
        }}
        InputProps={{
          readOnly: true,
        }}
        disabled
        multiline
        rows={3}
      />
    </>
  );
};
const InputCharacterCountRHFExample = () => {
  const [textWithoutMessage, setTextWithMessage] = useState("");
  const [text, setText] = useState("");
  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      graphName: "",
      graphType: "",
    },
  });
  const onSubmit = (payload) => {
    console.log("submited");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Placeholder Text"
          type="text"
          control={control}
          name={"graphName"}
          rules={{
            required: "Required",
            maxLength: 7,
          }}
          errors={formState?.errors}
          showCount
        />
        <Input
          placeholder="Placeholder Text"
          type="text"
          control={control}
          name={"graphType"}
          rules={{
            required: "Required",
            maxLength: {
              value: 10,
              message: "graphType - Character limit exceeded",
            },
          }}
          errors={formState?.errors}
          showCount
        />
      </form>
      <p></p>
      <Input
        value={textWithoutMessage}
        placeholder="Placeholder Text"
        type="text"
        onChange={(e) => {
          setTextWithMessage(e);
        }}
        showCount
        rules={{
          required: "Required",
          maxLength: {
            value: 25,
            message: "Character limit exceeded",
          },
        }}
      />
      <Input
        value={text}
        placeholder="Placeholder Text"
        type="text"
        onChange={(e) => {
          setText(e);
        }}
        showCount
        rules={{
          required: "Required",
          maxLength: 10,
        }}
      />
    </>
  );
};
