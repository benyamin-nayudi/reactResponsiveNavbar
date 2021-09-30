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
    @media screen and (max-width){
        position: relative;
    }

`

export const NavMenu = styled.ul`
    margin-left: auto;
    display: grid;
    grid-template-columns: repeat(4,auto);
    list-style: none;
    gap: 20px;
    margin-right: 5px;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 80px;
        background-color: black;
        width: 100%;
        height: max-content;
        margin: 0 ;
        left: -100% ;
        left: 0 ;
        transition: all ease .5s;
        
    }

    `



export const NavMenuSidebar = styled.ul`
position: absolute;
top:80px;
left: -100%;
background-color: red;

 @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 80px;
        background-color: black;
        width: 100%;
        height: max-content;
        margin: 0 ;
        left: 0 ;
        transition: all ease .5s;
    }

`

export const NavItems = styled.li`
 &:hover .jasem{
        display: flex
    }

    @media screen and (max-width: 960px){
        background-color: white;
        height: 100px;
        margin-bottom: 10px;
        width: 100%;

        &:hover .jasem{
        display: none
    }
    }
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

    @media screen and (max-width: 960px){
        display: block;
        /* width: 100%; */
        height: 100%;
        text-align: center;
        border-radius: 0;
        line-height: 3;
        padding: 0 ;
        margin: 0;
        font-size: 2rem;

        
    }
    
    
`
export const Arrow = styled.i`
position: absolute;
 top: 5px ;
 right: 5px;
 @media screen and (max-width: 960px){
     display: none
 }
`

export const Services = styled.span`
position: relative;
`


export const NavLogo = styled.h1`
    font-size: 2rem;
    justify-self: flex-start;
    margin-left: 40px;
    color: white;

    & i{
        font-size: 1.8rem;
    }

    @media screen and (max-width: 960px){
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
}

`
export const Button = styled.button`
margin: 0 20px;
justify-self: flex-end;
padding: 10px 15px;
    
`

