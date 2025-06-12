import { Box, Container, Grid } from "@mui/material";
import {
  BannerImage,
  FormComponent,
  StyledH1,
  StyledP,
  Logo,
} from "@/components";
import { pxToRem } from "@/utils";

function Login() {
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
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <Logo height={41} width={100} />
              </Box>
              <Box sx={{ marginBottom: pxToRem(24) }}>
                <StyledH1>Bem-vindo</StyledH1>
                <StyledP>Digite sua senha e email para logar</StyledP>
              </Box>
              <FormComponent
                inputs={[
                  { type: "email", placeholder: "Email", disabled: true },
                  { type: "password", placeholder: "Senha" },
                ]}
                buttons={[
                  {
                    className: "primary",
                    type: "submit",
                    children: "Login",
                    /* disabled: true, */ // not working yet
                  },
                ]}
                message={{
                  msg: "SUCESSO!!!",
                  type: "success",
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

export default Login;
