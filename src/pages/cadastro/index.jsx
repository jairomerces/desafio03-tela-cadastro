import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleCadastro, SubtitleCadastro, SubtitleText, LinkUrl, Row, Wrapper } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const handleClickNavigate = () => {
        navigate('/feed')
    }

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?nome=${formData.nome}email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Falha no cadastro, tente novamente')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome"  control={control} />
                    {errors.nome && <span>Nome completo é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" onClick={handleClickNavigate}/>
                </form>
                <Row>
                    <SubtitleText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</SubtitleText>
                </Row><tr/>
                <Row>
                    <SubtitleText>Já tenho conta.</SubtitleText>
                    <LinkUrl href="/login">Fazer login</LinkUrl>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }