import styled from "styled-components"
import Header from "./header"
import Categories from "./categories"
import Banner from "./banner"
import QuickView from "./quickView"

export default function HomePage() {
    return (
        <>
            <Header/>
            <HomePageStyle>
                <Initial>
                <Categories/>
                <Banner/>
                </Initial>
                <QuickView categorie={"Eletronicos"}/>
                <QuickView categorie={"Roupas"}/>
                <QuickView categorie={"Esportes"}/>
                <QuickView categorie={"Brinquedos"}/>
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

