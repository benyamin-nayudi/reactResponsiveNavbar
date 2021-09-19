import NavButton from "../Button/Button";
import Navbar from "./NavContainer";
import SubMenu from "./SubMenu";
const NavbarContainer = () => {
    return (
        <Navbar>
            <Navbar.Wrapper>
                <Navbar.Logo>EPIC <i className="fab fa-firstdraft"></i></Navbar.Logo>

                <Navbar.Menu>
                    {/* { MenuItems.map((item, index) => {
                        return <Navbar.Items key={ index }>
                            <Navbar.Links href={ item.url }>
                                { item.title }
                            </Navbar.Links>

                        </Navbar.Items>
                    }) } */}
                    <Navbar.Menu>
                        <Navbar.Items key="1">
                            <Navbar.Links href="#">Home</Navbar.Links>
                        </Navbar.Items>

                        <Navbar.Items key="2">
                            <Navbar.Links className="serv" href="#">Services <Navbar.Arrow /></Navbar.Links>
                            <SubMenu />

                        </Navbar.Items>

                        <Navbar.Items key="3">
                            <Navbar.Links href="#">Contact Us</Navbar.Links>
                        </Navbar.Items>

                        <Navbar.Items key="4">
                            <Navbar.Links href="#">Products</Navbar.Links>
                        </Navbar.Items>

                    </Navbar.Menu>
                </Navbar.Menu>
                <NavButton>sign up</NavButton>
            </Navbar.Wrapper>

        </Navbar>
    );
}

export default NavbarContainer;