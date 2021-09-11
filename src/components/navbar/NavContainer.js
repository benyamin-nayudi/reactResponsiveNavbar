import { Nav, NavItems, NavLinks, NavLogo, NavMenu, Wrapper } from "./StyledNavbar"
const Navbar = ({ children, ...restProps }) => {
    return (
        <Nav { ...restProps } >{ children }</Nav>
    )
}


Navbar.Wrapper = ({ children, ...restProps }) => (<Wrapper { ...restProps }> { children } </Wrapper>)

Navbar.NavMenu = ({ children, ...restProps }) => (<NavMenu { ...restProps }> { children } </NavMenu>)

Navbar.NavItems = ({ children, ...restProps }) => (<NavItems { ...restProps }> { children } </NavItems>)

Navbar.NavLinks = ({ children, ...restProps }) => (<NavLinks { ...restProps }> { children } </NavLinks>)

Navbar.NavLogo = ({ children, ...restProps }) => (<NavLogo { ...restProps }> { children } </NavLogo>)




export default Navbar