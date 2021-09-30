import styled from 'styled-components'


export const SubMenu = styled.ul`
position: absolute;
background-color: gray;
padding: 0 ;
margin: 0;
top: 40px;
width: 180px;

flex-direction: column;
justify-content: center;
display: none;



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