import { MenuItems } from "./MenuItems";
import Navbar from "./NavContainer";

const NavbarContainer = () => {
    return (
        <Navbar>
            <Navbar.Wrapper>
                <Navbar.Logo>EPIC <i className="fab fa-firstdraft"></i></Navbar.Logo>

                <Navbar.Menu>
                    { MenuItems.map((item, index) => {
                        return <Navbar.Items key={ index }>
                            <Navbar.Links href="#">
                                { item.title }
                            </Navbar.Links>
                        </Navbar.Items>
                    }) }
                </Navbar.Menu>

            </Navbar.Wrapper>

        </Navbar>
    );
}

export default NavbarContainer;