// rds components
import Avatar from "../DataDisplay/Avatar";
import Badge from "../DataDisplay/Badge";

// material imports
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/system";

export default function Avatars() {
  return (
    <>
      <Grid container spacing={2} direction="column">
        <Grid item>
          {"BasicUsageExample"}
          <BasicUsageExample />
        </Grid>
        <Grid item>
          {"AvatarSizesExample"}
          <AvatarSizesExample />
        </Grid>
        <Grid item>
          {"AvatarBadgeExample"}
          <AvatarBadgeExample />
        </Grid>
        <Grid item>
          {"AvatarShapeExample"}
          <AvatarShapeExample />
        </Grid>
        <Grid item>
          {"AvatarThemeExample"}
          <AvatarThemeExample />
        </Grid>
        <Grid item>
          {"AvatarGenerateBackgroundExample"}
          <AvatarGenerateBackgroundExample />
        </Grid>
      </Grid>
    </>
  );
}

const BasicUsageExample = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Avatar name="Arpita Lang" />
    </Stack>
  );
};

const AvatarSizesExample = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Avatar size="xs" name="Scott Lang" />
      <Avatar size="sm" name="Scott Lang" />
      <Avatar size="md" name="Scott Lang" />
      <Avatar size="lg" name="Scott Lang" />
      <Avatar size="xl" name="Scott Lang" />
    </Stack>
  );
};

const AvatarBadgeExample = () => {
  return (
    <Stack direction="row" justifyContent={"center"}>
      <Badge badgeContent={4} color="primary">
        <Avatar color="primary" size="md" name="Scott Lang" />
      </Badge>
    </Stack>
  );
};

const AvatarShapeExample = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Avatar size="md" overrideColor="#643843" name="Scott Lang" />
      <Avatar size="md" overrideColor="#99627A" name="Scott Lang" variant={"rounded"} />
      <Avatar size="md" overrideColor="#C88EA7" name="Scott Lang" variant={"square"} />
    </Stack>
  );
};

const AvatarThemeExample = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Avatar size="md" color={"primary"} name="Scott Lang" />
      <Avatar size="md" color={"secondary"} name="Scott Lang" />
    </Stack>
  );
};

const AvatarGenerateBackgroundExample = () => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      <Avatar size={"md"} name="opitdsa snkjaddsafas" generateBackground={true} />
      <Avatar size={"md"} name="asnfkajsfkaf mandal" generateBackground={false} />
      <Avatar size={"md"} name="wweqqwe mandal" generateBackground={true} />
      <Avatar size={"md"} name=" mandal" generateBackground={true} />
      <Avatar size={"md"} name="arpidssta mandal" generateBackground={true} />
    </Stack>
  );
};
