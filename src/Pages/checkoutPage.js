import { useEffect, useState } from "react"
import {useContext} from "react"
import UserContext from "../contexts/UserContext"
import axios from "axios"
import styled from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";


export default function CheckoutPage() {
    const [orders, setOrders] = useState([]);
    const { config } = useContext(UserContext);

    useEffect( () => {
        const URL = "https://foxstore.onrender.com/checkout"
 
         axios.get(URL, config)
             .then(res => {       
                    setOrders([res.data]);
                    
             })
             .catch(err => {
                 console.log(err);
             })
     } , []);

     console.log(orders)


    return (
        <>
        <BackGround>
                <Header/>
                <Tittle>Pedido Finalizado com Sucesso</Tittle>
                <Container>
                <AlignItems>
                        {orders.map(order => (
                            <StyleItem key={order.id}>
                                <div>{order.name}</div>
                                <div>{order.value}</div>
                                <div>{order.qtde}</div>
                            </StyleItem>
                        ))}
                </AlignItems>
                </Container>
                <Footer/>
        </BackGround>
        </>
    )
}


const Itens = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 400px;
`

const RemoveButton = styled.p`
    width: 90px;
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    border-radius: 5px;
    background-color: lightgray;
    text-align:center;
    :hover {
        color: red;
        opacity: 0.8;
        cursor: pointer;
    }
`

const Container = styled.div`
    display: flex;
    @media (max-width: 400px) {
        flex-direction: column;
        
    }
`

const AlignItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left: 2%;
    margin-right: 2%;
`

const BackGround = styled.div`
background: #F2F2F2;
`

const Tittle = styled.h1`
    font-size: 32px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
 
const StyleItem = styled.div`
position: relative;
width: 250px;
display: flex;
flex-direction: column;
margin-right: 50px;
padding-left: 15px;
padding-top: 10px;
margin-top: 2%;
position: relative;
background-color: white;
img{
    width: 83px;
    height: 105px;
}
p{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 38px;
color: #000000;

}
b{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 55px;
color: #000000;  
}
span{
    display: flex;
    width: 50px;
    height: 25px;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-left: solid;
    border-right: solid;
    border-width: 1px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 38px;
color: #000000;

}
button{
    width: 30px;
    height: 25px;
    background-color: black;
    border: thin;
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 17px;
line-height: 38px;
color: #000000;
display: flex;
justify-content: center;
align-items: center;
color: white;

:hover {
        color: #E96324;
        cursor: pointer;
    }
}
div{
    display: flex;
    position: absolute;
    right: 10px;
    top: 50px;
    border-radius: 5px;
    border: solid ;
    border-color: black;
}
`