import styled from "styled-components";


export const Nav = styled.nav`
    background-color: #a3c4d5;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: space-around;
    align-items: center;

`

export const NavMenu = styled.ul`
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(4,auto);
    list-style: none;
    gap: 20px;
    margin-right: 5px;

    
`

export const NavItems = styled.li`

`

export const NavLinks = styled.a`
    text-decoration: none;
    padding: 10px 20px;
    transition: all ease .3s;
    border-radius: 5px;
    font-size: 1.2rem;
    &:hover{
        background-color: blue;
        
    }

    position: relative;
    
    
`
export const Arrow = styled.i`
/* font-size: 20px; */
position: absolute;
 top: 5px ;
 right: 5px;

`

export const subMenu = styled.li`



`

export const NavLogo = styled.h1`
    font-size: 2rem;
    justify-self: flex-start;
    margin-left: 40px;
    color: white;

    & i{
        font-size: 1.8rem;
    }

`
export const Button = styled.button`
margin: 0 20px;
justify-self: flex-end;
padding: 10px 15px;

`

