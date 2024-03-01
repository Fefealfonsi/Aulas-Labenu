import { FormContainer, Form, Input, StyledLabel } from "./FormularioPostagem.styled";

export const FormularioCadastro = ({titulo, changeTitulo, descricao, changeDescricao, imagem, changeImagem, changePost}) => {

  console.log(descricao);
  return (
    <FormContainer>
      <h1>Insira sua postagem abaixo: </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={changeTitulo}/>
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={imagem} onChange={changeImagem}/>
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={descricao} onChange={changeDescricao}/>
        </StyledLabel>
        <button onClick={changePost}>Atualizar Imagem</button>
      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;
