import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import UserContext from "../contexts/UserContext";
import Footer from "../components/footer";

export default function CartPage() {
    const { token } = useContext(UserContext);
    const [products, setProducts] = useState([])
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
    

    return (
        <>
            <Header />
            {products.map((obj, i) => 
                <StyleItem key={i}>
                    <img src={obj.image} alt="imagem" />
                    <p>{obj.name}</p>
                    <b>R$ {(obj.value).toFixed(2).replace(".", ",") }</b>
                </StyleItem>
            )}
            <Footer/>
        </>
    )
}

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