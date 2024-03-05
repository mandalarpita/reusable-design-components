import React, { useState } from "react";
// rds components

// material imports
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// theme and external imports
import { ThemeProvider } from "@mui/material/styles";
import DialogContent from "@mui/material/DialogContent";
import Button from "../Inputs/Button";
import Dialog from "../Feedback/Dialog";
import { customTheme } from "../theme";
export default function TestDialog() {
  return (
    <ThemeProvider theme={customTheme}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <DialogExample />
        </Grid>
        <Grid item>
          <LongText />
        </Grid>
        <Grid item>
          <XSDialog />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export function DialogExample() {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Grid container direction="row" spacing={2} alignItems={"start"} justifyContent={"start"}>
          <Grid item>
            <Button
              color="primary"
              onClick={() => {
                setConfirmOpen(true);
              }}
            >
              {"Click to proceed"}
            </Button>
            <Dialog
              open={confirmOpen}
              title={"Confirm delete"}
              setOpen={setConfirmOpen}
              maxWidth={"md"}
              dialogActions={
                <Stack justifyContent="end" direction="row">
                  <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      alert("Clicked on Delete");
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              }
            >
              <DialogContent>
                <Typography variant="body2" sx={{ color: "black" }}>
                  You are about to delete a system assigned to user. Click delete to proceed.
                </Typography>
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export function LongText() {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Grid container direction="row" spacing={2} alignItems={"start"} justifyContent={"start"}>
          <Grid item>
            <Button
              color="primary"
              onClick={() => {
                setConfirmOpen(true);
              }}
            >
              {"Click to proceed"}
            </Button>
            <Dialog
              open={confirmOpen}
              title={"Confirm delete"}
              setOpen={setConfirmOpen}
              maxWidth={"md"}
              dialogActions={
                <Stack justifyContent="end" direction="row" spacing={2}>
                  <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      alert("Clicked on Delete");
                    }}
                  >
                    Delete
                  </Button>
                </Stack>
              }
            >
              <DialogContent>
                <Typography variant="body2" sx={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Volutpat odio facilisis mauris sit. Id semper risus in hendrerit gravida rutrum quisque. Natoque penatibus et magnis dis
                  parturient montes nascetur ridiculus mus. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ornare arcu dui vivamus arcu felis bibendum. Nibh tortor id aliquet lectus proin nibh nisl. Urna nunc id cursus metus aliquam eleifend mi. Vel quam elementum pulvinar etiam. Lacus sed viverra tellus in hac habitasse platea dictumst. Gravida quis blandit turpis
                  cursus in hac habitasse. Lacus sed turpis tincidunt id aliquet risus feugiat in. Arcu non odio euismod lacinia at quis risus sed. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Sit amet dictum sit amet justo donec enim. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed vulputate mi sit amet mauris commodo quis imperdiet massa.
                  Nunc mattis enim ut tellus elementum sagittis vitae et.{" "}
                </Typography>
                <br />
                <Typography variant="body2" sx={{ color: "black" }}>
                  Commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Metus aliquam eleifend mi in nulla posuere sollicitudin. Tempor commodo ullamcorper a lacus vestibulum sed. Sit amet massa vitae tortor condimentum lacinia quis vel eros. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Nec ullamcorper sit amet risus nullam eget felis. Pretium vulputate
                  sapien nec sagittis aliquam malesuada bibendum. Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Enim nunc faucibus a pellentesque sit amet. Tortor aliquam nulla facilisi cras fermentum odio eu. At volutpat diam ut venenatis tellus. Eget egestas purus viverra accumsan in nisl nisi scelerisque.
                  Rhoncus dolor purus non enim praesent elementum. Varius vel pharetra vel turpis nunc. Pellentesque dignissim enim sit amet venenatis urna cursus eget nunc. Est velit egestas dui id ornare arcu. Ultrices tincidunt arcu non sodales. Viverra nam libero justo laoreet sit amet cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Mattis rhoncus urna neque viverra justo.{" "}
                </Typography>
                <br />

                <Typography variant="body2" sx={{ color: "black" }}>
                  Dolor sed viverra ipsum nunc aliquet bibendum enim. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. Sed nisi lacus sed viverra tellus in hac habitasse. Ipsum suspendisse ultrices gravida dictum fusce ut. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Eu non diam phasellus vestibulum. Vel fringilla est ullamcorper eget nulla facilisi etiam
                  dignissim diam. Lectus sit amet est placerat in. Fusce ut placerat orci nulla pellentesque. Feugiat sed lectus vestibulum mattis ullamcorper velit sed. Nibh tortor id aliquet lectus proin nibh nisl. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Dictum non consectetur a erat nam. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Urna
                  id volutpat lacus laoreet. Elementum nibh tellus molestie nunc non blandit massa. Tortor posuere ac ut consequat semper viverra nam libero. Eget nunc scelerisque viverra mauris in aliquam.
                </Typography>
                <br />

                <Typography variant="body2" sx={{ color: "black" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci dapibus ultrices in iaculis nunc. Vivamus arcu felis bibendum ut tristique et egestas quis. Rhoncus est pellentesque elit ullamcorper dignissim. Velit sed ullamcorper morbi tincidunt ornare. Mollis aliquam ut porttitor leo a diam. Eget gravida cum
                  sociis natoque penatibus et magnis dis. Eu facilisis sed odio morbi quis commodo. In nibh mauris cursus mattis molestie a. Metus aliquam eleifend mi in. Diam sit amet nisl suscipit adipiscing bibendum. Tristique nulla aliquet enim tortor at auctor. Tincidunt ornare massa eget egestas purus viverra. Pellentesque adipiscing commodo elit at imperdiet dui. Diam sollicitudin tempor id
                  eu nisl nunc mi ipsum faucibus. Rhoncus mattis rhoncus urna neque viverra. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Tempus urna et pharetra pharetra massa massa ultricies.
                </Typography>
                <br />

                <Typography variant="body2" sx={{ color: "black" }}>
                  Imperdiet sed euismod nisi porta lorem mollis aliquam. Amet nulla facilisi morbi tempus iaculis. Pretium fusce id velit ut tortor pretium viverra. Nibh cras pulvinar mattis nunc sed blandit. At tellus at urna condimentum mattis pellentesque. Leo duis ut diam quam nulla porttitor massa id. Sem et tortor consequat id. Neque sodales ut etiam sit amet nisl purus in. Sit amet volutpat
                  consequat mauris nunc congue nisi vitae suscipit. Bibendum est ultricies integer quis. Euismod quis viverra nibh cras pulvinar mattis nunc. Lacus laoreet non curabitur gravida. Pellentesque dignissim enim sit amet venenatis urna cursus. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Sed tempus urna et pharetra pharetra massa massa
                  ultricies mi. Quis ipsum suspendisse ultrices gravida. Ante in nibh mauris cursus mattis molestie a. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Sit amet nisl suscipit adipiscing bibendum. Semper eget duis at tellus at urna. Non quam lacus suspendisse faucibus interdum. Eleifend donec pretium vulputate sapien nec sagittis. Faucibus scelerisque eleifend donec
                  pretium. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Nibh sit amet commodo nulla facilisi nullam. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Neque egestas congue quisque egestas diam in arcu cursus euismod. Sed faucibus turpis in eu mi. Urna porttitor rhoncus dolor purus non. Fusce ut placerat orci nulla pellentesque. Tortor
                  aliquam nulla facilisi cras fermentum odio eu. Turpis massa tincidunt dui ut. Lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor condimentum lacinia quis. Vulputate mi sit amet mauris commodo quis. Amet dictum sit amet justo donec enim diam vulputate. Vel eros donec ac odio. Ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a. Sit amet est
                  placerat in egestas. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Tristique senectus et netus et. Vitae suscipit tellus mauris a diam maecenas sed. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Eu scelerisque felis imperdiet proin fermentum leo vel orci
                  porta. Vestibulum lorem sed risus ultricies. Faucibus purus in massa tempor. Volutpat ac tincidunt vitae semper. Suscipit adipiscing bibendum est ultricies integer. Posuere lorem ipsum dolor sit. Ut venenatis tellus in metus vulputate eu.
                </Typography>
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export function XSDialog() {
  const [confirmOpen, setConfirmOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Button
          color="primary"
          onClick={() => {
            setConfirmOpen(true);
          }}
        >
          {"Max width - xs"}
        </Button>
        <Dialog
          open={confirmOpen}
          title={"Confirm delete"}
          setOpen={setConfirmOpen}
          maxWidth={"xs"}
          dialogActions={
            <Stack justifyContent="end" direction="row" spacing={2}>
              <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
              <Button
                variant="contained"
                onClick={() => {
                  alert("Clicked on Delete");
                }}
              >
                Delete
              </Button>
            </Stack>
          }
        >
          <DialogContent>
            <Typography variant="body2" sx={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Volutpat odio facilisis mauris sit. Id semper risus in hendrerit gravida rutrum quisque. Natoque penatibus et magnis dis
              parturient montes nascetur ridiculus mus. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim. Ornare arcu dui vivamus arcu felis bibendum. Nibh tortor id aliquet lectus proin nibh nisl. Urna nunc id cursus metus aliquam eleifend mi. Vel quam elementum pulvinar etiam. Lacus sed viverra tellus in hac habitasse platea dictumst. Gravida quis blandit turpis cursus
              in hac habitasse. Lacus sed turpis tincidunt id aliquet risus feugiat in. Arcu non odio euismod lacinia at quis risus sed. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Sit amet dictum sit amet justo donec enim. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Sed vulputate mi sit amet mauris commodo quis imperdiet massa. Nunc mattis
              enim ut tellus elementum sagittis vitae et.{" "}
            </Typography>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    </>
  );
}
