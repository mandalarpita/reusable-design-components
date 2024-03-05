import React, { useState } from "react";
// rds components

// material imports
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// theme and external imports
import { ThemeProvider } from "@mui/material/styles";

import { customTheme as theme } from "../theme";
import Chip from "../DataDisplay/Chip";
import Icon from "../DataDisplay/Icon";
import Avatar from "../DataDisplay/Avatar";
import RadioButton from "../Inputs/RadioButton";
import Button from "../Inputs/Button";
import Input from "../Inputs/Input";

export default function CustomChip() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <BasicUsageExample />
        </Grid>
        <Grid item>
          <SizeOfChip />
        </Grid>
        <Grid item>
          <VariantsChip />
        </Grid>
        <Grid item>
          <ThemeingChip />
        </Grid>
        <Grid item>
          <BorderRadiusChip />
        </Grid>
        <Grid item>
          <DeletableChip />
        </Grid>
        <Grid item>
          <Clickable />
        </Grid>
        <Grid item>
          <DeletableClickableChip />
        </Grid>
        <Grid item>
          <DeleteIcon />
        </Grid>
        <Grid item>
          <ChipAdornments />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export const BasicUsageExample = () => {
  return (
    <>
      <Stack direction="row" spacing={2} justifyContent={"center"}>
        <Chip label="Chip Filled" color="primary" size="xs" />
      </Stack>
    </>
  );
};

export const SizeOfChip = () => {
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
        <Chip label="Size - XS" color="primary" size="xs" />
        <Chip label="Size - SM" color="primary" size="sm" />
        <Chip label="Size - MD" color="secondary" size="md" />
        <Chip label="Size - LG" color="secondary" size="lg" />
        <Chip label="Size - XL" color="secondary" size="xl" />
      </Stack>
    </>
  );
};

export const VariantsChip = () => {
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
        <Chip label="Primary Default Variant" color="primary" />
        <Chip label="Primary Outlined Variant" color="primary" variant="outlined" />
        <Chip label="Secondary Default Variant" color="secondary" />
        <Chip label="Secondary Default Variant" color="secondary" variant="outlined" />
      </Stack>
    </>
  );
};

export const ThemeingChip = () => {
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
          <Chip label="Primary Default Variant" color="primary" />
          <Chip label="Primary Outlined Variant" color="primary" variant="outlined" />
          <Chip label="Secondary Default Variant" color="secondary" />
          <Chip label="Secondary Default Variant" color="secondary" variant="outlined" />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
          <Chip label="Chip Filled without variant" backgroundColor="#DE3163" textColor="#FDFEFE" />
          <Chip label="Chip outlined with variant no border color" variant="outlined" backgroundColor="#DE3163" textColor="#D35400" />
          <Chip label="Chip Outlined" variant="outlined" backgroundColor="#DE3163" textColor="#DE3163" />
          <Chip label="Chip Outlined with border" variant="outlined" borderColor="#D7BDE2" backgroundColor="#DE3163" textColor="#DE3163" />
          <Chip label="Chip Outlined in light background" variant="filled" backgroundColor="#eae9f8" textColor="#2F26B9" borderColor="#2F26B9" />
          <Chip label="Chip Outlined with border" variant="outlined" borderColor="#196F3D" backgroundColor="#DE3163" textColor="#DE3163" />
        </Stack>
      </Stack>
    </>
  );
};

export const BorderRadiusChip = () => {
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
        <Chip label="Default Border" color="primary" />
        <Chip label="Border - 1rem" borderRadius="1rem" color="primary" variant="outlined" />
        <Chip label="Border - 3rem" borderRadius="3rem" backgroundColor="#DE3163" textColor="#FDFEFE" />
        <Chip label="Border - 50%" borderRadius="50%" variant="outlined" backgroundColor="#DE3163" textColor="#DE3163" />
        <Chip label="Border - theme.spacing" borderRadius={theme.spacing(2)} variant="outlined" borderColor="#D7BDE2" backgroundColor="#DE3163" textColor="#DE3163" />
        <Chip label="Border - 1 vh" variant="outlined" borderRadius={"1vh"} borderColor="#196F3D" backgroundColor="#DE3163" textColor="#DE3163" />
      </Stack>
    </>
  );
};

export const DeletableChip = () => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
        <Chip label="Primary Default Variant" color="primary" onDelete={handleDelete} />
        <Chip label="Primary Outlined Variant" color="primary" variant="outlined" onDelete={handleDelete} />
        <Chip label="Secondary Default Variant" color="secondary" onDelete={handleDelete} />
        <Chip label="Secondary Default Variant" color="secondary" variant="outlined" onDelete={handleDelete} />
        <Chip label="Chip Filled without variant" backgroundColor="#DE3163" textColor="#FDFEFE" onDelete={handleDelete} />
        <Chip label="Chip outlined with variant no border color" variant="outlined" backgroundColor="#DE3163" textColor="#D35400" onDelete={handleDelete} />
        <Chip label="Chip Outlined" variant="outlined" backgroundColor="#DE3163" textColor="#DE3163" onDelete={handleDelete} />
      </Stack>
    </>
  );
};

export const Clickable = () => {
  const handleClick = (e) => {
    console.log("On Click of Chip");
  };
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
        <Chip label="Primary Default Variant" color="primary" onClick={handleClick} />
        <Chip label="Primary Outlined Variant" color="primary" variant="outlined" onClick={handleClick} />
        <Chip label="Secondary Default Variant" color="secondary" onClick={handleClick} />
        <Chip label="Secondary Default Variant" color="secondary" variant="outlined" onClick={handleClick} />
        <Chip label="Chip Filled without variant" backgroundColor="#DE3163" textColor="#FDFEFE" onClick={handleClick} />
        <Chip label="Chip outlined with variant no border color" variant="outlined" backgroundColor="#DE3163" textColor="#D35400" onClick={handleClick} />
        <Chip label="Chip Outlined" variant="outlined" backgroundColor="#DE3163" textColor="#DE3163" onClick={handleClick} />
      </Stack>
    </>
  );
};

export const DeletableClickableChip = () => {
  const handleClick = (e) => {
    console.log("On Click of Chip");
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
        <Chip label="Primary Default Variant" color="primary" onClick={handleClick} size="xs" onDelete={handleDelete} />

        <Chip label="Chip Filled without variant" backgroundColor="#DE3163" size="sm" textColor="#FDFEFE" onClick={handleClick} onDelete={handleDelete} />
        <Chip label="Chip Filled without variant" backgroundColor="#DE3163" size="md" textColor="#FDFEFE" onClick={handleClick} onDelete={handleDelete} />
        <Chip label="Chip outlined with variant no border color" variant="outlined" size="lg" backgroundColor="#DE3163" textColor="#D35400" onClick={handleClick} onDelete={handleDelete} />
        <Chip label="Chip Outlined" variant="outlined" backgroundColor="#DE3163" size="xl" textColor="#DE3163" onClick={handleClick} onDelete={handleDelete} />
      </Stack>
    </>
  );
};

export const DeleteIcon = () => {
  const handleClick = (e) => {
    console.log("On Click of Chip");
  };
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
        <Chip label="Primary Default Variant" color="primary" onClick={handleClick} size="xs" onDelete={handleDelete} deleteIcon={<Icon icon="MaterialIcon.MdOutlineDelete" />} />
        <Chip label="Chip Filled without variant" backgroundColor="#DE3163" size="sm" textColor="#FDFEFE" onClick={handleClick} onDelete={handleDelete} deleteIcon={<Icon icon="MaterialIcon.MdOutlineDelete" />} />
        <Chip label="Chip Filled without variant" backgroundColor="#DE3163" size="md" textColor="#FDFEFE" onClick={handleClick} onDelete={handleDelete} deleteIcon={<Icon icon="MaterialIcon.MdOutlineDelete" />} />
        <Chip label="Chip outlined with variant no border color" variant="outlined" size="lg" backgroundColor="#DE3163" textColor="#D35400" onClick={handleClick} onDelete={handleDelete} deleteIcon={<Icon icon="MaterialIcon.MdOutlineDelete" />} />
        <Chip label="Chip Outlined" variant="outlined" backgroundColor="#DE3163" size="xl" textColor="#DE3163" onClick={handleClick} onDelete={handleDelete} deleteIcon={<Icon icon="MaterialIcon.MdOutlineDelete" size="md" />} />
      </Stack>
    </>
  );
};

export const ChipAdornments = () => {
  return (
    <>
      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
          <Chip label="Primary Default Variant" color="primary" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Primary Outlined Variant" color="primary" variant="outlined" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Secondary Default Variant" color="secondary" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Secondary Default Variant" color="secondary" variant="outlined" avatar={<Avatar name={"Arpita Mandal"} />} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
          <Chip label="Chip Filled without variant" size="xs" backgroundColor="#DE3163" textColor="#FDFEFE" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Chip outlined with variant no border color" size="sm" variant="outlined" backgroundColor="#DE3163" textColor="#D35400" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Chip Outlined" variant="outlined" size="md" backgroundColor="#DE3163" textColor="#DE3163" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Chip Outlined with border" variant="outlined" size="lg" borderColor="#D7BDE2" backgroundColor="#DE3163" textColor="#DE3163" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Chip Outlined in light background" variant="outlined" size="xl" backgroundColor="#eae9f8" textColor="#2F26B9" borderColor="#2F26B9" avatar={<Avatar name={"Arpita Mandal"} />} />
          <Chip label="Chip Outlined with border" variant="outlined" size="xl" borderColor="#196F3D" backgroundColor="#DE3163" textColor="#DE3163" avatar={<Avatar name={"Arpita Mandal"} />} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
          <Chip label="Primary Default Variant" color="primary" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Primary Outlined Variant" color="primary" variant="outlined" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Secondary Default Variant" color="secondary" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Secondary Default Variant" color="secondary" variant="outlined" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent={"center"}>
          <Chip label="Chip Filled without variant" backgroundColor="#DE3163" size="xs" textColor="#FDFEFE" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Chip outlined with variant no border color" size="sm" variant="outlined" backgroundColor="#DE3163" textColor="#D35400" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Chip Outlined" variant="outlined" backgroundColor="#DE3163" size="md" textColor="#DE3163" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Chip Outlined with border" variant="outlined" size="lg" borderColor="#D7BDE2" backgroundColor="#DE3163" textColor="#DE3163" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Chip Outlined in light background" variant="filled" size="xl" backgroundColor="#eae9f8" textColor="#2F26B9" borderColor="#2F26B9" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
          <Chip label="Chip Outlined with border" variant="outlined" size="xl" borderColor="#196F3D" backgroundColor="#DE3163" textColor="#DE3163" icon={<Icon icon="FontAwesome.FaUserAstronaut" />} />
        </Stack>
      </Stack>
    </>
  );
};
// Not fully done - skip
export const Interactive = () => {
  const [variant, setVariant] = useState("filled");
  const [size, setSize] = useState("xs");
  const [textColor, setTextColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState();
  const [borderColor, setBorderColor] = useState();
  const [color, setColor] = useState("secondary");
  return (
    <>
      <Chip label="Interactive Chip" variant={variant} color={color} size={size} />

      {/* size={size} borderColor={borderColor} backgroundColor={backgroundColor} textColor={textColor} icon={<Icon icon="BoxIcon.BiTestTube" />}  */}

      <RadioButton
        label="Filled"
        value="filled"
        checked={variant === "filled"}
        onChange={(e, val) => {
          setVariant("filled");
        }}
      />
      <RadioButton
        label="Outlined"
        value="outlined"
        checked={variant === "outlined"}
        onChange={(e, val) => {
          setVariant("outlined");
        }}
      />
      <Button
        onClick={(e, val) => {
          setVariant();
        }}
      >
        {"Reset"}
      </Button>

      <p />

      <RadioButton
        label="xs"
        value="xs"
        checked={size === "xs"}
        onChange={(e, val) => {
          setSize("xs");
        }}
      />
      <RadioButton
        label="sm"
        value="sm"
        checked={size === "sm"}
        onChange={(e, val) => {
          setSize("sm");
        }}
      />
      <RadioButton
        label="md"
        value="md"
        checked={size === "md"}
        onChange={(e, val) => {
          setSize("md");
        }}
      />
      <RadioButton
        label="lg"
        value="lg"
        checked={size === "lg"}
        onChange={(e, val) => {
          setSize("lg");
        }}
      />
      <RadioButton
        label="xl"
        value="xl"
        checked={size === "xl"}
        onChange={(e, val) => {
          setSize("xl");
        }}
      />
      <Button
        onClick={(e, val) => {
          setSize();
        }}
      >
        {"Reset"}
      </Button>
      <p />
      <Input
        value={color}
        onChange={(e, val) => {
          setColor(e);
        }}
        placeholder="set primary or secondary"
      ></Input>
    </>
  );
};

export const ChipsArray = () => {};
