import React from 'react';

import { FaGithub, FaRegPlusSquare } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithub />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar repositório" />

        <SubmitButton disabled>
          <FaRegPlusSquare color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
