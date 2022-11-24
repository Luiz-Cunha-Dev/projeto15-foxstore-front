import styled from "styled-components";

export default function Categories(){
   return(
           <StyleCategories>
            <h1>Categorias</h1>
               <p>Eletronicos</p>
               <p>Roupas</p>
               <p>Esporte</p>
               <p>Brinquedos</p>
           </StyleCategories>

   )
}



const StyleCategories = styled.div`
width: 233px;
height: 530px;
display: flex;
flex-direction: column;
padding-top: 30px;
padding-left: 20px;
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