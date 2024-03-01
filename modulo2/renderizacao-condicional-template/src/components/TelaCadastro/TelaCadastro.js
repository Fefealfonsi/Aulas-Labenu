import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro({mudarTela}) {
  

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input id="titulo" />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input id="foto" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input id="descricao" />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input id="descricao" />
        </StyledLabel>

        <SendButton onClick={()=>mudarTela("principal")}>Cadastrar</SendButton>

        <BackToLoginButton onClick={()=>mudarTela("login")}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>
  );
}

export default TelaCadastro;
