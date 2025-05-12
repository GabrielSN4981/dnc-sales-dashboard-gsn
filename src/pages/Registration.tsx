import { Box, Container, Grid } from "@mui/material";
import { BannerImage, FormComponent } from "@/components";

function Registration() {
  return (
    <>
      <Box sx={{ overflowX: "hidden" }}>
        <Grid container spacing={2}>
          <Grid
            size={6}
            item
            xs={12}
            sm={6}
            sx={{ alignItems: "center", display: "flex", height: "100vh" }}
          >
            <Container maxWidth="sm">
              <h1>REGISTRATION</h1>
              <FormComponent
                inputs={[
                  { type: "email", placeholder: "Email" },
                  { type: "password", placeholder: "Senha" },
                ]}
                buttons={[
                  { className: "primary", type: "submit", children: "Login" },
                ]}
                message={{
                  msg: "ERRO!!!",
                  type: "error",
                }}
              />
            </Container>
          </Grid>
          <Grid
            size={6}
            item
            sm={6}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <BannerImage />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Registration;
