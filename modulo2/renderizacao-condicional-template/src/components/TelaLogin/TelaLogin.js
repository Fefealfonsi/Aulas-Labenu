import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin({mudarTela}) {
  

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          <Input />
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} />
        </StyledLabel>

        <SendButton onClick={()=>mudarTela("principal")}>Entrar</SendButton>

        <RegisterButton onClick={()=>mudarTela("cadastro")}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
