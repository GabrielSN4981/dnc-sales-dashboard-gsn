<<<<<<< Updated upstream
import styled from "styled-components";

const LoginArea = styled.div`
  background: #666;
`;

const LoginImage = styled.div`
  background-image: url(/login-image.svg);
  background-size: cover;
  height: 100vh;
  width: 50vw;
`;
=======
import { Box, Container, Grid } from "@mui/material";
import { BannerImage, FormComponent } from "@/components";
>>>>>>> Stashed changes

function Login() {
  return (
    <>
<<<<<<< Updated upstream
      <LoginArea>LOGIN</LoginArea>
      <LoginImage />
=======
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
              <h1>LOGIN</h1>
              <FormComponent
                inputs={[
                  { type: "email", placeholder: "Email" },
                  { type: "password", placeholder: "Senha" },
                ]}
                buttons={[
                  { className: "primary", type: "submit", children: "Login" },
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
>>>>>>> Stashed changes
    </>
  );
}

export default Login;
