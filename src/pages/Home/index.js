import { Link } from 'react-router-dom';

import { Container, Header, ListContainer, InputSearchContainer } from "./styles"
import arrow from '../../assets/images/icons/arrow.svg'

import Card from '../../components/Card'

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar Contato" />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt='Arrow' />
          </button>
        </header>
      </ListContainer>

      <Card 
        name="João Alves"
        instagram="instagram"
        email='joao.alves@gmail.com'
        phone='(11) 99999-9999'
      />
      <Card 
        name="João Alves"
        instagram="instagram"
        email='joao.alves@gmail.com'
        phone='(11) 99999-9999'
      />
      <Card 
        name="João Alves"
        instagram="instagram"
        email='joao.alves@gmail.com'
        phone='(11) 99999-9999'
      />
    </Container>
  )
}