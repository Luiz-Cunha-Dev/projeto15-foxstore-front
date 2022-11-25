import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Categories(){
   return(
           <StyleCategories>
            <h1>Categorias</h1>
            <Link to="/listProducts/Eletronicos">
            <p>Eletronicos</p>
            </Link>
            <Link to="/listProducts/Roupas">
            <p>Roupas</p>
            </Link>
            <Link to="/listProducts/Esportes">
            <p>Esporte</p>
            </Link>
            <Link to="/listProducts/Brinquedos">
            <p>Brinquedos</p>
            </Link>
           </StyleCategories>

   )
}



const StyleCategories = styled.div`
width: 233px;
height: 530px;
display: flex;
flex-direction: column;
align-items: center;
background-color: #E96324;
border-radius: 10px;

h1{
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 35px;
line-height: 55px;
color: #FFFFFF;
margin-bottom: 20px;
}
p{
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 28px;
line-height: 45px;
color: #FFFFFF;
}
img{
   width: 45px;
   border-radius: 15px;
}
`