import styled from "styled-components";
import image from "./assets/RibeiraoPreto.jpg"

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-image: url(${image});
background-size: cover;

form{
    display: flex;
    flex-direction: column;
    justify-items: center;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    background-color: white;
    box-shadow: 0px 0px 10px black;
}
`


export const DataForm = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-bottom: 20px;
`

export const DestinyForm = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`

export const Window = styled.div`
margin-bottom: 20px;
text-align: center;

input{
    height: 30px;
}

h4{
    margin-bottom: 10px;
}
`

