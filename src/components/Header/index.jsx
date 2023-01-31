import { useNavigate } from 'react-router-dom';
import React from 'react'
import logo from '../../assets/logo-dio.png';

import { Button } from '../Button';

import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, MenuLeft, UserPicture} from './styles';

const Header = ({autenticado}) => {

  const navigate = useNavigate()

  const handleClickSignIn = () => {
    navigate('/login')
}
  const handleClickRegister = () => {
      navigate('/cadastro')
  }

  return (
    <Wrapper>
      <Container>
          <Row>
            <img src={logo} alt="Logo da dio"/>
            {autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
                <MenuLeft href="/">Home</MenuLeft>
              </>
            ) : null}
          </Row>
          <Row>
              {autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button title="Entrar" variant='primary' onClick={handleClickSignIn}/>
                <Button title="Cadastrar" variant='primary' onClick={handleClickRegister}/>
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }
