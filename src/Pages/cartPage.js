import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";
import Footer from "../components/footer";

export default function CartPage() {
    
    const { token } = useContext(UserContext);
    const [products, setProducts] = useState([])
    const [checkoutpage, setCheckoutpage] = useState(false)
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    useEffect(() => {
        const URL = "https://foxstore.onrender.com/cart"
        
        axios.get(URL, config)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function Checkout() {
        const URL = "https://foxstore.onrender.com/checkout"
        axios.post(URL, {}, config)
            .then(res => {
                alert("Pedido realizado com sucesso!");
                setProducts([]);
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
            <>
                <Header />
                <Tittle>Meu Carrinho</Tittle>
                <AlignItems>
                {products.map((obj, i) => 
                    <StyleItem key={i}>
                        <img src={obj.image} alt="imagem" />
                        <p>{obj.name}</p>
                        <b>R$ {(obj.value).toFixed(2).replace(".", ",") }</b>
                    </StyleItem>
                )}
                </AlignItems>
                <ButtonFinish onClick={ () => { Checkout() } } >Finalizar Compra</ButtonFinish>
                <Footer/>
            </>
            )
        }
}


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
    width: 100%;
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

const AlignItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 10%;
    margin-bottom: 10%;
    margin-left: 10%;
    margin-right: 10%;
`

const StyleItem = styled.div`
width: 243px;
height: 100%;
display: flex;
flex-direction: column;
margin-right: 50px;
padding-left: 15px;
padding-top: 10px;
img{
    width: 213px;
    height: 255px;
}
p{
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 38px;
color: #000000;

}
b{
    font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 55px;
color: #000000;  
}
button{
    width: 130px;
    height: 30px;
    background-color: #E60014;
    border-radius: 15px;
    font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #FFFFFF;
    border: thin;
}
`