import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "../Inputs/Select";
import { Box, InputAdornment } from "@mui/material";
import Icon from "../DataDisplay/Icon";
import { useForm } from "react-hook-form";
import MultiSelect from "../Inputs/MultiSelect";
import Avatar from "../DataDisplay/Avatar";

export default function AutoComplete() {
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <BasicUsageExample />
        </Grid>
        <Grid item>
          <SelectSizesExample />
        </Grid>
        <Grid item>
          <PlaceholdeSingleSelectExample />
        </Grid>
        <Grid item>
          <BasicMultiSelectExample />
        </Grid>
        <Grid item>
          <MultiSelectSizesExample />
        </Grid>
        <Grid item>
          <PlaceholderMultiSelectExample />
        </Grid>
        <Grid item>
          <LimitTagsMultiSelectExample />
        </Grid>
        <Grid item>
          <AutoCompleteReadOnlyExample />
        </Grid>
        <Grid item>
          <AutoCompleteDisabledExample />
        </Grid>

        <Grid item>
          <CustomiseOptionsExample />
        </Grid>
        <Grid item>
          <OptionsGroupingExample />
        </Grid>
        <Grid item>
          <DisabledOptionsExample />
        </Grid>
        <Grid item>
          <FixedOptionsExample />
        </Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
}

const BasicUsageExample = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <Select
        options={dropdownData}
        placeholder="Single Select - Select from Employee Data"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
      />
    </>
  );
};
const SelectSizesExample = () => {
  const [selected, setSelected] = useState("");
  return (
    <>
      <Select
        size="xs"
        options={dropdownData}
        placeholder="XS - Select from Employee Data"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
      />
      <Select
        size="sm"
        options={dropdownData}
        placeholder="SM - Select from Employee Data"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
      />
      <Select
        size="md"
        options={dropdownData}
        placeholder="MD - Select from Employee Data"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
      />
      <Select
        size="lg"
        options={dropdownData}
        placeholder="LG - Select from Employee Data"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
      />
      <Select
        size="xl"
        options={dropdownData}
        placeholder="XL - Select from Employee Data"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
      />
    </>
  );
};

const PlaceholdeSingleSelectExample = () => {
  const [selected, setSelected] = useState("");

  return (
    <>
      <Select
        options={dropdownData}
        placeholder="Single Select - This is placeholder text"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
      />
    </>
  );
};
const BasicMultiSelectExample = () => {
  const [aselected, setASelected] = useState([]);
  return (
    <>
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
    </>
  );
};

const PlaceholderMultiSelectExample = () => {
  const [aselected, setASelected] = useState([]);

  return (
    <>
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
    </>
  );
};

const MultiSelectSizesExample = () => {
  const [aselected, setASelected] = useState([]);
  return (
    <>
      <MultiSelect
        options={dropdownData}
        size={"xs"}
        placeholder="XS - Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
      <MultiSelect
        options={dropdownData}
        size={"sm"}
        placeholder="SM - Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
      <MultiSelect
        options={dropdownData}
        size={"md"}
        placeholder="MD - Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
      <MultiSelect
        options={dropdownData}
        size={"lg"}
        placeholder="LG - Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
      <MultiSelect
        options={dropdownData}
        size={"xl"}
        placeholder="XL - Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
    </>
  );
};

const LimitTagsMultiSelectExample = () => {
  const [aselected, setASelected] = useState([]);

  return (
    <>
      <MultiSelect
        limitTags={2}
        options={dropdownData}
        placeholder="Multi Select - Select from Employee Data"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
      />
    </>
  );
};
const AutoCompleteDisabledExample = () => {
  const [selected, setSelected] = useState("RES025");
  const [aselected, setASelected] = useState(["SUP013", "FIN017"]);

  return (
    <>
      <Select
        options={dropdownData}
        placeholder="Single Select - Disabled"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
        disabled={true}
      />
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Disabled"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
        disabled={true}
      />
    </>
  );
};
const AutoCompleteReadOnlyExample = () => {
  const [selected, setSelected] = useState("RES025");
  const [aselected, setASelected] = useState(["SUP013", "FIN017"]);

  return (
    <>
      <Select
        options={dropdownData}
        placeholder="Single Select - Read Only"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
        readOnly
      />
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Read Only"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
        readOnly
      />
    </>
  );
};

const CustomiseOptionsExample = () => {
  const [selected, setSelected] = useState("RES025");
  const [aselected, setASelected] = useState(["SUP013", "FIN017"]);

  return (
    <>
      <Select
        options={dropdownData}
        placeholder="Single Select - Options ised"
        value={selected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar size="sm" name={option.name} generateBackground={true} />
              </Grid>
              <Grid item>
                {option.name} - {option.role}
              </Grid>
            </Grid>
          </Box>
        )}
      />
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Options ised"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar size="sm" name={option.name} generateBackground={true} />
              </Grid>
              <Grid item>
                {option.name} - {option.employeeId}
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </>
  );
};

const OptionsGroupingExample = () => {
  const [selected, setSelected] = useState("RES025");
  const [aselected, setASelected] = useState(["SUP013", "FIN017"]);

  return (
    <>
      <Select
        options={dropdownData}
        placeholder="Single Select - Options ised"
        value={selected}
        groupBy={(option) => option.role}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar size="sm" name={option.name} generateBackground={true} />
              </Grid>
              <Grid item>
                {option.name} - {option.role}
              </Grid>
            </Grid>
          </Box>
        )}
      />
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Options ised"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        groupBy={(option) => option.role}
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar size="sm" name={option.name} generateBackground={true} />
              </Grid>
              <Grid item>
                {option.name} - {option.employeeId}
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </>
  );
};
const DisabledOptionsExample = () => {
  const [selected, setSelected] = useState("RES025");
  const [aselected, setASelected] = useState(["SUP013", "FIN017"]);

  return (
    <>
      <Select
        options={dropdownData}
        placeholder="Single Select - Options Disabled for HR Coordinator"
        value={selected}
        groupBy={(option) => option.role}
        optionKey="employeeId"
        optionLabel="name"
        onChange={(oSelected) => {
          setSelected(oSelected);
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar size="sm" name={option.name} generateBackground={true} />
              </Grid>
              <Grid item>
                {option.name} - {option.role}
              </Grid>
            </Grid>
          </Box>
        )}
        getOptionDisabled={(option) => option?.role === "HR Coordinator"}
      />
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Options Disabled for John Doe"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        getOptionDisabled={(option) => option?.name === "John Doe"}
        groupBy={(option) => option.role}
        onChange={(oSelected) => {
          setASelected(oSelected);
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar size="sm" name={option.name} generateBackground={true} />
              </Grid>
              <Grid item>
                {option.name} - {option.employeeId}
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </>
  );
};
const FixedOptionsExample = () => {
  const [aselected, setASelected] = useState(["SUP013", "FIN017"]);
  const fixedOptionsMultiSelect = [dropdownData[11].employeeId, dropdownData[10].employeeId];
  return (
    <>
      <MultiSelect
        options={dropdownData}
        placeholder="Multi Select - Options Disabled for John Doe"
        value={aselected}
        optionKey="employeeId"
        optionLabel="name"
        getOptionDisabled={(option) => option?.name === "John Doe"}
        groupBy={(option) => option.role}
        onChange={(oSelected) => {
          setASelected([...oSelected, ...fixedOptionsMultiSelect]);
        }}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar size="sm" name={option.name} generateBackground={true} />
              </Grid>
              <Grid item>
                {option.name} - {option.employeeId}
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </>
  );
};
const dropdownData = [
  {
    id: 2,
    name: "Jane Smith",
    role: "Architect",
    employeeId: "DEV002",
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Architect",
    employeeId: "DSN003",
  },
  {
    id: 6,
    name: "Olivia Wilson",
    role: "Architect",
    employeeId: "ENG006",
  },
  {
    id: 7,
    name: "James Taylor",
    role: "Architect",
    employeeId: "ADM007",
  },
  {
    id: 11,
    name: "Ethan Thomas",
    role: "Architect",
    employeeId: "SCR011",
  },
  {
    id: 12,
    name: "Ava White",
    role: "Architect",
    employeeId: "QA012",
  },
  {
    id: 13,
    name: "Matthew Thompson",
    role: "Architect",
    employeeId: "SUP013",
  },
  {
    id: 15,
    name: "William Robinson",
    role: "Architect",
    employeeId: "SLS015",
  },
  {
    id: 16,
    name: "Abigail Clark",
    role: "HR Coordinator",
    employeeId: "HRC016",
  },
  {
    id: 17,
    name: "Benjamin Lewis",
    role: "HR Coordinator",
    employeeId: "FIN017",
  },
  {
    id: 20,
    name: "Sofia Hernandez",
    role: "HR Coordinator",
    employeeId: "DSC020",
  },
  {
    id: 21,
    name: "Andrew King",
    role: "HR Coordinator",
    employeeId: "CNT021",
  },
  {
    id: 22,
    name: "Grace Adams",
    role: "HR Coordinator",
    employeeId: "GPH022",
  },
  {
    id: 1,
    name: "John Doe",
    role: "Manager",
    employeeId: "EMP001",
  },
  {
    id: 9,
    name: "Daniel Martinez",
    role: "Manager",
    employeeId: "PRJ009",
  },
  {
    id: 14,
    name: "Emma Garcia",
    role: "Manager",
    employeeId: "MKT014",
  },
  {
    id: 19,
    name: "Henry Young",
    role: "Manager",
    employeeId: "OPM019",
  },
  {
    id: 10,
    name: "Mia Johnson",
    role: "Product Owner",
    employeeId: "PRO010",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Researcher",
    employeeId: "TST004",
  },
  {
    id: 5,
    name: "David Brown",
    role: "Researcher",
    employeeId: "ANA005",
  },
  {
    id: 8,
    name: "Sophia Anderson",
    role: "Researcher",
    employeeId: "ARC008",
  },
  {
    id: 18,
    name: "Harper Hall",
    role: "Researcher",
    employeeId: "CUS018",
  },
  {
    id: 23,
    name: "Joseph Turner",
    role: "Researcher",
    employeeId: "ITA023",
  },
  {
    id: 24,
    name: "Chloe Walker",
    role: "Researcher",
    employeeId: "BAN024",
  },
  {
    id: 25,
    name: "Liam Moore",
    role: "Researcher",
    employeeId: "RES025",
  },
];
