import React from "react";
import { Typography, Stack } from "@mui/material";
import Inputs from "./TestInputs";
import AutoComplete from "./TestAutoComplete";
import TestAvatars from "./TestAvatars";
import TestBadge from "./TestBadge";
import TestChip from "./TestChip";
import TestIcons from "./TestIcons";
import TestReports from "./TestReports";
import TestTabs from "./TestTabs";
import TestCheckbox from "./TestCheckbox";
import TestButtons from "./TestButtons";
import TestSwitch from "./TestSwitch";
import TestRadioButtons from "./TestRadioButtons";
import TestDialog from "./TestDialog";
import TestTooltips from "./TestTooltips";
import TestKPI from "./TestKPI";
import TestPopper from "./TestPopper";

export default function TestComponents() {
  return (
    <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={1}>
      <Typography variant="h3">Inputs</Typography>
      <Inputs />
      <Typography variant="h3"> Select and Multi Select</Typography>
      <AutoComplete />
      <Typography variant="h3">Switch</Typography>
      <TestSwitch />
      <Typography variant="h3">Radio Button</Typography>
      <TestRadioButtons />
      <Typography variant="h3">Checkbox</Typography>
      <TestCheckbox />
      <Typography variant="h3">Buttons</Typography>
      <TestButtons />
      <Typography variant="h3">Tabs</Typography>
      <TestTabs />
      <Typography variant="h3">Avatar</Typography>
      <TestAvatars />
      <Typography variant="h3">Badge</Typography>
      <TestBadge />

      <Typography variant="h3">Chips</Typography>
      <TestChip />
      <Typography variant="h3">Icons</Typography>
      <TestIcons />
      <Typography variant="h3">Dialog</Typography>
      <TestDialog />
      <Typography variant="h3">Popper</Typography>
      <TestPopper />
      <Typography variant="h3">Tooltip</Typography>
      <TestTooltips />
      <Typography variant="h3">KPI</Typography>

      <TestKPI />
      <Typography variant="h3">Graphs</Typography>
      <Typography variant="h3">Bar</Typography>
      <TestReports chartType={"BAR"} />

      <Typography variant="h3">Column</Typography>
      <TestReports chartType={"COLUMN"} />

      <Typography variant="h3">Line</Typography>
      <TestReports chartType={"LINE"} />

      <Typography variant="h3">Area</Typography>
      <TestReports chartType={"AREA"} />

      <Typography variant="h3">Stack Line</Typography>
      <TestReports chartType={"STACK_LINE"} />

      <Typography variant="h3">Stack Area</Typography>
      <TestReports chartType={"STACK_AREA"} />

      <Typography variant="h3">Stack Bar</Typography>
      <TestReports chartType={"STACK_BAR"} />

      <Typography variant="h3">Stack Column</Typography>
      <TestReports chartType={"STACK_COLUMN"} />

      <Typography variant="h3">Pie</Typography>
      <TestReports chartType={"PIE"} />

      <Typography variant="h3">Donut</Typography>
      <TestReports chartType={"DONUT"} />
    </Stack>
  );
}
