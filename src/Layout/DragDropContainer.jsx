import React from "react";
import PropTypes from "prop-types";
import map from "lodash/map";
import range from "lodash/range";
import random from "lodash/random";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

// Please Note ---- Added by Arpita 16/03/22
// Temporary fix- hidden expand icon for all non static div.
// To fix we can have ".react-grid-item > .react-resizable-handle " this in makestyle and add span with this classname in the generate dom
// In future updates will be replacing the parent library with some other library
export default class DragDropContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBreakpoint: props.currentBreakpoint,
      compactType: props.compactType,
      mounted: props.mounted,
      layouts: { lg: props.layouts },

      layout: props.layout,
      styles: props.styles,
    };
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  componentDidMount() {
    this.setState({ mounted: true });
  }
  generateDOM(border) {
    return map(this.state.layouts.lg, function (l, i) {
      return (
        <div key={i} style={border}>
          {l.render}
        </div>
      );
    });
  }

  onBreakpointChange(breakpoint) {
    this.setState({
      currentBreakpoint: breakpoint,
    });
    this.props?.onBreakpointChange(breakpoint);
  }

  onLayoutChange(layout, layouts) {
    this.setState({ layout: layout });
    this.props?.onLayoutChange(layout, layouts);
  }
  render() {
    return (
      <div>
        {this.props.children}

        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          // rowHeight={300}
          // width={1000}
          // onBreakpointChange={this.onBreakpointChange}
          // onLayoutChange={this.onLayoutChange}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          {this.generateDOM(this.state.styles)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

DragDropContainer.propTypes = {
  onLayoutChange: PropTypes.func.isRequired,
};

DragDropContainer.defaultProps = {
  className: "layout",
  rowHeight: 30,
  compactType: "horizontal",
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  children: <></>,
  mounted: false,
  layouts: { lg: generateLayout() },
  layout: [],
  onBreakpointChange: function () {},
  onLayoutChange: function () {},
};

function generateLayout() {
  const temp = map(range(0, 10), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: false,
    };
  });
  return temp;
}
