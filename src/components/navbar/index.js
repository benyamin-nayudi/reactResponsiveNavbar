import NavButton from "../Button/Button";
import { MenuItems } from "./MenuItems";
import Navbar from "./NavContainer";
import SubMenuContainer from "./subMenu/SubMenu";
const NavbarContainer = () => {
    return (
        <Navbar>
            <Navbar.Wrapper>
                <Navbar.Logo>EPIC <i className="fab fa-firstdraft"></i></Navbar.Logo>

                <Navbar.Menu>
                    <Navbar.Menu>
                        {/* <Navbar.Items key="1">
                            <Navbar.Links href="#">Home</Navbar.Links>
                        </Navbar.Items>

                        <Navbar.Items key="2">
                            <Navbar.Links href="#">

                                <Navbar.Services>Services
                                     <SubMenuContainer onMouse={ false }></SubMenuContainer> 
                                </Navbar.Services>
                                <Navbar.Arrow />

                            </Navbar.Links>

                        </Navbar.Items>


                        <Navbar.Items key="3">
                            <Navbar.Links href="#">Contact Us</Navbar.Links>
                        </Navbar.Items>

                        <Navbar.Items key="4">
                            <Navbar.Links href="#">Products</Navbar.Links>
                        </Navbar.Items> */}

                        { MenuItems.map((item, index) => {

                            if (item.title === "Services")
                                return (
                                    <Navbar.Items key="2">
                                        <Navbar.Links href="#">
                                            <Navbar.Services>Services
                                                <SubMenuContainer onMouse={ false }></SubMenuContainer>
                                            </Navbar.Services>
                                            <Navbar.Arrow />
                                        </Navbar.Links>
                                    </Navbar.Items>
                                )
                            return (
                                <Navbar.Items key={ index }>
                                    <Navbar.Links href={ item.url }>{ item.title }</Navbar.Links>
                                </Navbar.Items>)
                        }) }

                    </Navbar.Menu>
                </Navbar.Menu>
                <NavButton>sign up</NavButton>
            </Navbar.Wrapper>

        </Navbar>
    );
}

export default NavbarContainer;