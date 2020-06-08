import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Container, Content } from "./styles";

export default function Header() {
  /* const profile = useSelector((state) => state.user.profile); */

  return (
    <Container>
      <Content>
        <>
          <nav>
            <span>Cadastro de livros</span>
          </nav>
          <aside>
            <button>Adicionar Livro</button>
          </aside>
        </>
      </Content>
    </Container>
  );
}
