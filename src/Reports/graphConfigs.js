const graphDimensions = {
  MIXED: {
    chartKey: "line",
    stacked: false,
    horizontal: false,
    library: "APEX",
    isEnabled: false,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN", "STACK_AREA", "STACK_LINE"],
  },
  //works
  BAR: {
    chartKey: "bar",
    stacked: false,
    horizontal: true,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN", "PIE", "DONUT", "STACK_AREA", "STACK_LINE"],
  },
  COLUMN: {
    chartKey: "bar", //works
    stacked: false,
    horizontal: false,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN", "PIE", "DONUT", "STACK_AREA", "STACK_LINE"],
  },
  LINE: {
    chartKey: "line",
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN", "PIE", "DONUT", "STACK_AREA", "STACK_LINE"],
  },
  AREA: {
    chartKey: "area",
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN", "PIE", "DONUT", "STACK_AREA", "STACK_LINE"],
  },
  STACK_COLUMN: {
    //works
    chartKey: "bar",
    stacked: true,
    horizontal: false,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["LINE", "AREA", "COLUMN", "BAR", "PIE", "DONUT"],
  },
  STACK_BAR: {
    chartKey: "bar", //works
    stacked: true,
    horizontal: true,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["LINE", "AREA", "COLUMN", "BAR", "PIE", "DONUT"],
  },
  STACK_AREA: {
    //works
    chartKey: "area",
    stacked: true,
    horizontal: false,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["LINE", "AREA", "COLUMN", "BAR", "PIE", "DONUT"],
  },
  STACK_LINE: {
    chartKey: "line", //works
    stacked: true,
    horizontal: true,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["LINE", "AREA", "COLUMN", "BAR", "PIE", "DONUT"],
  },
  DONUT: {
    chartKey: "donut",
    stacked: null,
    horizontal: null,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN", "LINE", "AREA", "COLUMN", "BAR"],
  },
  PIE: {
    chartKey: "pie",
    stacked: null,
    horizontal: null,
    library: "APEX",
    isEnabled: true,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN", "LINE", "AREA", "COLUMN", "BAR"],
  },
  BTIMELINE: {
    chartKey: "rangeBar",
    stacked: false,
    horizontal: true,
    library: "APEX",
    isEnabled: false,
    nonConvertible: ["STACK_BAR", "STACK_COLUMN"],
  },
};
export default graphDimensions;
