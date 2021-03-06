import { Arrow, Button, Nav, NavItems, NavLinks, NavLogo, NavMenu, NavMenuSidebar, Services, Wrapper } from "./StyledNavbar"
const Navbar = ({ children, ...restProps }) => {
    return (
        <Nav { ...restProps } >{ children }</Nav>
    )
}


Navbar.Wrapper = ({ children, ...restProps }) => (<Wrapper { ...restProps }> { children } </Wrapper>)

Navbar.Menu = ({ children, ...restProps }) => (<NavMenu { ...restProps }> { children } </NavMenu>)

Navbar.MenuSidebar = ({ children, ...restProps }) => (<NavMenuSidebar { ...restProps }> { children } </NavMenuSidebar>)

Navbar.Items = ({ children, ...restProps }) => (<NavItems { ...restProps }> { children } </NavItems>)

Navbar.Links = ({ children, ...restProps }) => (<NavLinks { ...restProps }> { children } </NavLinks>)

Navbar.Logo = ({ children, ...restProps }) => (<NavLogo { ...restProps }> { children } </NavLogo>)

Navbar.Button = ({ children, ...restProps }) => (<Button { ...restProps }> { children } </Button>)

Navbar.Arrow = ({ children, ...restProps }) => (<Arrow className="fas fa-sort-down"> </Arrow>)


Navbar.Services = ({ children, ...restProps }) => (<Services { ...restProps } >{ children } </Services>)


export default Navbar