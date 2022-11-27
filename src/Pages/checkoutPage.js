import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import UserContext from "../contexts/UserContext"

export default function CheckoutPage() {
    const [orders, setOrders] = useState([]);
    const { token } = useContext(UserContext);
    const config = {headers: {"Authorization": `Bearer ${token}`}}

    useEffect(() => {
        const URL = "https://foxstore.onrender.com/checkout"
        
        axios.get(URL, config)
            .then(res => {
                setOrders(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    console.log(orders);


    return (
        <Texto>Compra realizada com sucesso!</Texto>
    )
}

const BackGround = styled.div`
background: #F2F2F2;
`

const Texto = styled.p`
    font-size: 20px;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-top: 10px;
`