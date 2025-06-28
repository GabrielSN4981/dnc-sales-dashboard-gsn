import { AppThemeContext } from "@/contexts/AppThemeContext";
import { useContext } from "react";

// COMPONENTS
import { CardComponent, Header, StyledButton, StyledH2 } from "@/components";
import { Container, Grid } from "@mui/material";

// SERVICES
import { Logout } from "@/services";

function Perfil() {
  const themeContext = useContext(AppThemeContext);
  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid spacing={4}>
          <Grid className="mb-1" item xs={12} sm={6}>
            <CardComponent>Seus dados...</CardComponent>
          </Grid>
          <Grid item xs={12} sm={6}>
            <CardComponent>
              <StyledH2 className="mb-1">Definições de conta</StyledH2>
              <StyledButton
                className="primary mb-1"
                onClick={themeContext?.toggleTheme}
              >
                Trocar para tema{" "}
                {themeContext?.appTheme === "light" ? "escuro" : "claro"}
              </StyledButton>
              <StyledButton className="alert" onClick={Logout}>
                Logout
              </StyledButton>
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Perfil;
