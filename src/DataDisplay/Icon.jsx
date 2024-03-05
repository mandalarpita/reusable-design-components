import React from "react";
// Can be replaced with you style class
import { makeStyles } from "@mui/styles";
// Import the packages that you need in your project.
// Name the import to something we can easily identify
import * as AntIcon from "react-icons/ai";
import * as BootstrapIcon from "react-icons/bs";
import * as BoxIcon from "react-icons/bi";
import * as CircumIcon from "react-icons/ci";
import * as DevIcon from "react-icons/di";
import * as FeatherIcon from "react-icons/fi";
import * as FlatColorIcon from "react-icons/fc";
import * as FontAwesomeIcon from "react-icons/fa";
import * as FontAwesomeIcon6 from "react-icons/fa6";
import * as GameIcon from "react-icons/gi";
import * as GitIcon from "react-icons/go";
import * as GrommetIcon from "react-icons/gr";
import * as HeroIcon from "react-icons/hi";
import * as HeroIcon2 from "react-icons/hi2";
import * as IcoMoonIcon2 from "react-icons/im";
import * as Icons8Icon from "react-icons/lia";
import * as IonIcon from "react-icons/io";
import * as IonIcon5 from "react-icons/io5";
import * as LucideIcon from "react-icons/lu";
import * as MaterialIcon from "react-icons/md";
import * as PhosphorIcon from "react-icons/pi";
import * as RadixIcon from "react-icons/rx";
import * as RemixIcon from "react-icons/ri";
import * as SimpleIcon from "react-icons/si";
import * as SimpleLineIcon from "react-icons/sl";
import * as TablerIcon from "react-icons/tb";
import * as ThemifyIcon from "react-icons/tfi";
import * as TypeIcon from "react-icons/ti";
import * as VSCIcon from "react-icons/vsc";
import * as CSSGGIcon from "react-icons/cg";
import * as WeatherIcon from "react-icons/wi";
import { getClassBySize, getColorsProps } from "../customClasses";
import { useTheme } from "@mui/system";

//  As per UX needs, icons are switched when hovered.
// Without hover - it is an outlined icon
// On hover - the icon is filled.

/* Note by Arpita - 
if in makeStyles, you are using theme prop then handle no theme scenario
add the following lines before the return statement and import customtheme
if (Object.keys(theme).length === 0) {
  theme = customTheme;
}

customtheme will act as a fallback theme */
const useCustomStyles = makeStyles(() => ({
  iconContainer: {
    alignItems: "center",
    "&:hover": {
      "& $outlineIcon": {
        display: "none",
      },
      "& $filledIcon": {
        display: "flex",
      },
    },
  },
  filledIcon: {
    display: "none",
  },
  outlineIcon: {
    display: "flex",
  },
}));
// { iconSrc, isSelected, onClick }
const Icon = (props) => {
  const { isSelected = false, icon, hoverIcon, elementid, ...others } = props;

  const classes = useCustomStyles();
  return (
    <>
      {isSelected ? (
        <IconWrapper {...others} icon={hoverIcon} elementid={elementid} />
      ) : (
        <div className={classes.iconContainer} elementid={elementid}>
          <span className={`${classes.outlineIcon}`}>
            <IconWrapper {...others} icon={icon || hoverIcon} />
          </span>
          <span className={`${classes.filledIcon}`}>
            <IconWrapper {...others} icon={hoverIcon || icon} />
          </span>
        </div>
      )}
    </>
  );
};
export default Icon;
const IconWrapper = ({ icon = MaterialIcon["MdDoNotDisturb"], size = "xs", height, width, color, overrideColor, ...others }) => {
  // const classes = getClassBySize(size, "customIcon", color, overrideColor);
  const theme = useTheme();
  const colorProps = getColor(color, overrideColor, theme);

  let iconSrc = "MdDoNotDisturb";

  if (typeof icon === "string" || icon instanceof String) {
    if (icon?.split(".").length === 2) {
      iconSrc = icon?.split(".")[1];
      switch (icon?.split(".")[0]) {
        case "AntIcon":
          icon = AntIcon[iconSrc];
          break;
        case "BootstrapIcon":
          icon = BootstrapIcon[iconSrc];
          break;
        case "BoxIcon":
          icon = BoxIcon[iconSrc];
          break;
        case "CircumIcon":
          icon = CircumIcon[iconSrc];
          break;
        case "DevIcon":
          icon = DevIcon[iconSrc];
          break;
        case "FeatherIcon":
          icon = FeatherIcon[iconSrc];
          break;
        case "FlatColorIcon":
          icon = FlatColorIcon[iconSrc];
          break;
        case "FontAwesomeIcon":
          icon = FontAwesomeIcon[iconSrc];
          break;
        case "FontAwesomeIcon6":
          icon = FontAwesomeIcon6[iconSrc];
          break;
        case "GameIcon":
          icon = GameIcon[iconSrc];
          break;
        case "GitIcon":
          icon = GitIcon[iconSrc];
          break;
        case "GrommetIcon":
          icon = GrommetIcon[iconSrc];
          break;
        case "HeroIcon":
          icon = HeroIcon[iconSrc];
          break;
        case "HeroIcon2":
          icon = HeroIcon2[iconSrc];
          break;
        case "IcoMoonIcon2":
          icon = IcoMoonIcon2[iconSrc];
          break;
        case "Icons8Icon":
          icon = Icons8Icon[iconSrc];
          break;
        case "IonIcon":
          icon = IonIcon[iconSrc];
          break;
        case "IonIcon5":
          icon = IonIcon5[iconSrc];
          break;
        case "LucideIcon":
          icon = LucideIcon[iconSrc];
          break;
        case "MaterialIcon":
          icon = MaterialIcon[iconSrc];
          break;
        case "PhosphorIcon":
          icon = PhosphorIcon[iconSrc];
          break;
        case "RadixIcon":
          icon = RadixIcon[iconSrc];
          break;
        case "RemixIcon":
          icon = RemixIcon[iconSrc];
          break;
        case "SimpleIcon":
          icon = SimpleIcon[iconSrc];
          break;
        case "SimpleLineIcon":
          icon = SimpleLineIcon[iconSrc];
          break;
        case "TablerIcon":
          icon = TablerIcon[iconSrc];
          break;
        case "ThemifyIcon":
          icon = ThemifyIcon[iconSrc];
          break;
        case "TypeIcon":
          icon = TypeIcon[iconSrc];
          break;
        case "VSCIcon":
          icon = VSCIcon[iconSrc];
          break;
        case "CSSGGIcon":
          icon = CSSGGIcon[iconSrc];
          break;
        case "WeatherIcon":
          icon = WeatherIcon[iconSrc];
          break;
        case "SVGIcon":
          icon = iconSrc;

          break;
        default:
          icon = [icon?.split(".")[0]]?.[iconSrc];
      }
      if (!icon) {
        // If the icon is not fetched it will show this icon.
        icon = MaterialIcon["MdDoNotDisturb"];
      }
    }
    return (
      <>
        {React.createElement(icon, {
          style: getHeightWidth(size, height, width),
          ...colorProps,
          // className: className ? `${classes.classes} ${className} ` : `${classes.classes}`,
          ...others,
        })}
      </>
    );
  } else {
    return icon;
  }
};
const getHeightWidth = (size, height, width) => {
  if (!height && !width) {
    // Both height and width are not present
    switch (size) {
      case "xs":
      case "xsmall":
        return { height: "1.125rem", width: "1.125rem" }; // 18

        break;
      case "sm":
      case "small":
        return { height: "1.5rem", width: "1.5rem" }; //24

        break;
      case "md":
      case "medium":
        return { height: "1.875rem", width: "1.875rem" }; //30 - 32

        break;
      case "lg":
      case "large":
        return { height: "2.25rem", width: "2.25rem" }; //36 - 48

        break;
      case "xl":
      case "xlarge":
        return { height: "2.75rem", width: "2.75rem" }; //36   -  64

        break;
      default:
        return { height: "1.125rem", width: "1.125rem" }; // 18
    }
  } else if (!height) {
    // Height is not present, assign initial value to height
    return { height: width, width: width };
  } else if (!width) {
    // Width is not present, assign initial value to width
    return { height: height, width: height };
  } else {
    // Both height and width are present
    return { height: height, width: width };
  }
};

const getColor = (color, overrideColor, theme) => {
  if (overrideColor) {
    return { color: overrideColor };
  } else if (color) {
    return { color: theme.palette?.[color]?.["main"] || "#000000" };
  } else {
    return {};
  }
};
