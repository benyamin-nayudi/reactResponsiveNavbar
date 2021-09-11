import { Nav, NavItems, NavLinks, NavLogo, NavMenu, Wrapper } from "./StyledNavbar"
const Navbar = ({ children, ...restProps }) => {
    return (
        <Nav { ...restProps } >{ children }</Nav>
    )
}


Navbar.Wrapper = ({ children, ...restProps }) => (<Wrapper { ...restProps }> { children } </Wrapper>)

Navbar.Menu = ({ children, ...restProps }) => (<NavMenu { ...restProps }> { children } </NavMenu>)

Navbar.Items = ({ children, ...restProps }) => (<NavItems { ...restProps }> { children } </NavItems>)

Navbar.Links = ({ children, ...restProps }) => (<NavLinks { ...restProps }> { children } </NavLinks>)

Navbar.Logo = ({ children, ...restProps }) => (<NavLogo { ...restProps }> { children } </NavLogo>)




export default Navbar