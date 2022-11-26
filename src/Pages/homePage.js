import styled from "styled-components"
import Header from "../components/header"
import Categories from "../components/categories"
import Banner from "../components/banner"
import QuickView from "../components/quickView"
import Footer from "../components/footer"
import { useState, useEffect } from "react"
import axios from "axios"

export default function HomePage() {

    const [products, setProducts] = useState([])

    useEffect( () => {
       const URL = "https://foxstore.onrender.com/products"

        axios.get(URL)
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    } , [])

    return (
        <>
            <Header/>
            <HomePageStyle>
                <Initial>
                <Categories/>
                <Banner/>
                </Initial>
                <QuickView categorie={"Eletronicos"} products={products}/>
                <QuickView categorie={"Roupas"} products={products}/>
                <QuickView categorie={"Esportes"} products={products}/>
                <QuickView categorie={"Brinquedos"} products={products}/>
                <Footer/>
            </HomePageStyle>
        </>
    )
}

const HomePageStyle = styled.div`
background: #F2F2F2;
width: 100%;
height: 100%;
padding-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
`
const Initial = styled.div`
width: 100%;
display: flex;
padding: 0 12px 70px 12px;
`

