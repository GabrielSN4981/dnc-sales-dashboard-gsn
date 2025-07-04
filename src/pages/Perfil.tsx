import { AppThemeContext } from "@/contexts/AppThemeContext";
import { ChangeEvent, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

// COMPONENTS
import {
  CardComponent,
  FormComponent,
  Header,
  StyledButton,
  StyledH2,
} from "@/components";
import { Container, Grid } from "@mui/material";

// HOOKS
import { useFormValidation, useDelete, useGet, usePut } from "@/hooks";

// SERVICES
import { Logout } from "@/services";

// TYPES
import {
  InputProps,
  ProfileData,
  ProfileEditableData,
  MessageProps,
} from "@/types";

function Perfil() {
  const themeContext = useContext(AppThemeContext);

  // HOOKS

  const [updateMessage, setUpdateMessage] = useState<MessageProps>({
    type: "success",
    msg: "",
  });

  const clearMessage = () => {
    setTimeout(() => {
      setUpdateMessage({ type: "success", msg: "" });
    }, 3000);
  };

  const { deleteData: profileDeleteData, loading: profileDeleteLoading } =
    useDelete("profile/delete");

  const {
    putData: profilePutData,
    data: profileUpdateData,
    loading: profileUpdateLoading,
    error: profileUpdateError,
  } = usePut<ProfileEditableData>("profile/update");

  const {
    data: profileData,
    loading: profileLoading,
    error: profileError,
  } = useGet<ProfileData>("profile");

  useEffect(() => {
    if (profileData) {
      handleChange(0, profileData.name);
      handleChange(1, profileData.email);
      handleChange(2, profileData.phone);
    }
  }, [profileData]);

  // FORM
  const inputs: InputProps[] = [
    { name: "name", type: "text", placeholder: "Nome", required: true },
    { name: "email", type: "email", placeholder: "Email", disabled: true },
    { name: "phone", type: "tel", placeholder: "Telefone", required: true },
  ];
  const { formValues, formValid, handleChange } = useFormValidation(inputs);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await profilePutData({
      name: String(formValues[0]),
      phone: String(formValues[2]),
    });
  };

  const handleDelete = async () => {
    if (
      confirm(
        "Tem certeza que deseja excluir sua conta? Se sim, não esqueça de deletar seus leads antes!"
      ) === true
    ) {
      try {
        await profileDeleteData();
        alert("Perfil deletado com sucesso!");
        Cookies.remove("Authorization");
        window.location.href = "/";
      } catch (e) {
        alert(
          "Não foi possível deletar o perfil. Entre em contato com o suporte."
        );
      }
    }
  };

  useEffect(() => {
    if (profilePutData !== null) {
      setUpdateMessage({
        msg: "Perfil atualizado com sucesso!",
        type: "success",
      });
    } else if (profileUpdateError) {
      setUpdateMessage({
        msg: "Não foi possível atualizar o perfil. Entre em contato com o suporte.",
        type: "error",
      });
    }
    clearMessage();
  }, [profileUpdateData, profileUpdateError]);

  return (
    <>
      <Header />
      <Container className="mb-2" maxWidth="lg">
        <Grid spacing={4}>
          <Grid className="mb-1" item xs={12} sm={6}>
            {!profileError && (
              <CardComponent
                className={
                  profileLoading ? "skeleton-loading skeleton-loading-mh-1" : ""
                }
              >
                {!profileLoading && profileData && (
                  <>
                    <StyledH2 className="mb-1">Seus dados</StyledH2>
                    <FormComponent
                      inputs={inputs.map((input, index) => ({
                        ...input,
                        type: input.type,
                        placeholder: input.placeholder,
                        value: formValues[index] || "",
                        onChange: (e: ChangeEvent<HTMLInputElement>) =>
                          handleChange(
                            index,
                            (e.target as HTMLInputElement).value
                          ),
                      }))}
                      buttons={[
                        {
                          className: "primary",
                          disabled: !formValid || profileUpdateLoading,
                          type: "submit",
                          onClick: handleSubmit,
                          children: profileUpdateLoading
                            ? "Aguarde..."
                            : "Atualizar meu perfil",
                        },
                        {
                          className: "alert",
                          disabled: profileDeleteLoading,
                          type: "button",
                          onClick: handleDelete,
                          children: profileDeleteLoading
                            ? "Aguarde..."
                            : "Excluir conta",
                        },
                      ]}
                      message={updateMessage}
                    />
                  </>
                )}
              </CardComponent>
            )}
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
