import styled from "styled-components";
import raposa from "../img/logo.png"
import carrinho from "../img/carrinho.png"
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <StyleHeader>
            <div>
                <Link to="/">
                    <img src={raposa} alt="logo" />
                </Link>
                <input type="text" placeholder="Pesquisar" />
                <button>
                    <img src="https://cdn-icons-png.flaticon.com/512/49/49116.png" alt="lupa" />
                </button>
            </div>
            <StyleOptions>
                <Link to="/signUp">
                    <span>Cadastrar</span>
                </Link>
                <Link to="/signIn">
                    <span>Entrar</span>
                </Link>
                <Link to="/cart">
                    <img src={carrinho} alt="carrinho" />
                </Link>
            </StyleOptions>
        </StyleHeader>

    )
}

const StyleHeader = styled.div`
width: 100%;
height: 93px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #E96324;
padding-left: 71px;
padding-right: 87px;

button{
width: 55px;
height: 55px;
border-radius: 10px;
background-color: white;
border: thin;
border: 2px solid black;
img{
    width: 100%;
}
}

img{
    width: 80px;
    border-radius: 15px;
}

div{
display: flex;
align-items: center;
justify-content: space-between;
}

input{
width: 408px;
height: 55px;
border: 2px solid black;
border-radius: 15px;
padding-left: 15px;
margin-left: 160px;
margin-right: 20px;
::placeholder{
font-family: 'Poppins';
font-style: normal;
font-weight: 300;
font-size: 25px;
line-height: 38px;
color: black;
}
}
`

const StyleOptions = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
span{
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 30px;
line-height: 60px;
color: black;
margin-right: 50px;
}
img{
    width: 45px;
    border-radius: 15px;
}
`