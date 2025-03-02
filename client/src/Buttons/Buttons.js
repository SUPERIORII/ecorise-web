import styled from "styled-components";


const LoginButton = styled.button `
color: var(--color-light);
background-color: var(--color-success);
font-size: 20px;
border-radius: 20px;
transition: .3s ease-in-out;

&:hover {
    opacity: .9;
}
`


export { LoginButton };