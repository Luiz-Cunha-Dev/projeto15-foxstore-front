import styled from "styled-components";

export default function QuickView(props) {
    return (
        <StyleQuickView>
            <div>
                <span>{props.categorie}</span>
                <span>Veja mais >></span>
            </div>
        </StyleQuickView>

    )
}



const StyleQuickView = styled.div`
width: 100%;
height: 481px;
display: flex;
flex-direction: column;
border-radius: 10px;
background-color: white;
margin-bottom: 50px;
div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 65px;
    background-color: #E96324;
    padding-left: 32px;
    padding-right: 8px;
    span{
        font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 35px;
line-height: 52px;
color: white;
    }
    span:last-child{
        font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 25px;
line-height: 38px;
color:white;
    }
}
`