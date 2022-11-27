import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";
import Footer from "../components/footer";

export default function CartPage() {

    const {loadCart, config, productsCart, setProductsCart} = useContext(UserContext)
    
    const [checkoutpage, setCheckoutpage] = useState(false)
    const [cartNumber, setCartNumber] =useState(0)

    useEffect(() => {
        loadCart(setProductsCart);
    }, [])

    function Checkout() {
        const URL = "https://foxstore.onrender.com/checkout"
        axios.post(URL, {}, config)
            .then(res => {
                alert("Pedido realizado com sucesso!");
                setProductsCart([]);
                setCheckoutpage(true);
            })
            .catch(err => {
                console.log(err);
            })
    }
    

    if (checkoutpage) {
       return <Navigate to={"/checkout"}/>
    }else{
        return (
            <BackGround>
                <Header/>
                <Tittle>Meu Carrinho</Tittle>
                <Container>
                <AlignItems>
                {productsCart.map((obj, i) => 
                    <StyleItem key={i}>
                        <img src={obj.image} alt="imagem" />
                        <p>{obj.name}</p>
                        <b>R$ {(obj.value).toFixed(2).replace(".", ",") }</b>
                    </StyleItem>
                )}
                </AlignItems>

               
                <ButtonFinish onClick={ () => { Checkout() } } >Finalizar Compra</ButtonFinish>
                </Container>
                <Footer/>
            </BackGround>
            )
        }
}

const Container = styled.div`
    display: flex;
    @media (max-width: 400px) {
        flex-direction: column;
        
    }
`

const AlignItems = styled.div`
    display: flex;
    flex-wrap: wrap;
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

const ButtonFinish = styled.button`
    width: 400px;
    height: 40px;
    background-color: #FFC700;
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: black;
    font-weight: bold;
    margin-top: 20px;
    :hover {
        background-color: #FFC700;
        opacity: 0.8;
        cursor: pointer;
    }

    
`
const StyleItem = styled.div`
width: 250px;
display: flex;
flex-direction: column;
margin-right: 50px;
padding-left: 15px;
padding-top: 10px;
margin-top: 2%;
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

`