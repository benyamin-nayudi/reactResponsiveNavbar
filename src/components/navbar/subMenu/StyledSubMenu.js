import styled from 'styled-components'


export const SubMenu = styled.ul`
position: absolute;
background-color: gray;
padding: 0 ;
margin: 0;
top: 51px;
width: 180px;
display: flex;
flex-direction: column;
justify-content: center

`
export const SubMenuItems = styled.li`
    flex-basis: 40px;
    list-style: none;
    padding-left: 15px;
    padding-top:15px;
    &:hover{
        background-color: red;
    }
`