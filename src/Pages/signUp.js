import { useState } from "react"
import styled from "styled-components"
import {useNavigate} from "react-router-dom"
import Header from "../components/header";
import axios from "axios";

export default function SignUp() {
    const Url = "https://foxstore.onrender.com/signup"
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkpasword, setCheckpasword] = useState('')
    const body = {
        name,
        email,
        password,
        checkpasword
    }

    function handleSubmit(e) {
        e.preventDefault();

        const promise = axios.post(Url, body);

        if (checkpasword === password) {
            promise.then(() => {
                navigate("/");
            });
            promise.catch((erro) => {
                console.log(erro)
            });
        } else {
            alert("Digite a mesma senha para checkpaswordmar!")
            
        }
        navigate("/");
    }
    return (
        <>
            <Header />
            <Conteiner>
                <Titlle>Cadastro</Titlle>
                <Form onSubmit={handleSubmit}>

                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        id="nome"
                        placeholder="Nome"
                        name='none' type='text'
                        required></input>


                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        id="email"
                        placeholder="E-mail"
                        name='email' type='email'
                        required></input>

                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        id="senha"
                        placeholder="Senha"
                        name='senha' type='password'
                        required></input>

                    <input
                        onChange={e => setCheckpasword(e.target.value)}
                        value={checkpasword}
                        id="checkpaswordm"
                        placeholder="Confirme a senha"
                        name='checkpaswordm' type='password'
                        required></input>

                    <button type='submit'> Cadastrar </button>

                </Form>

            </Conteiner>
        </>
    )
}

const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 50px 50px 50px;
    
`
const Titlle = styled.h1`
  
    margin-bottom: 24px;
    font-family: 'Saira Stencil One';
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-items: center;
    
    input{
    margin-bottom: 13px ;
    width: 100%;
    height: 58px;
    border-radius: 5px;
    border:  1px solid #E96324;
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: black;
       
        }
    }
    button{
        width: 326px;
        height: 46px;
        background: #E96324;
        border-radius: 5px;
        border: none;
        font-family: 'Raleway';
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
    }
`
