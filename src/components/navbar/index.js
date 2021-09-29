import { useState } from "react";
import NavButton from "../Button/Button";
import { MenuItems } from "./MenuItems";
import Navbar from "./NavContainer";
import SubMenuContainer from "./subMenu/SubMenu";
const NavbarContainer = () => {

    const [jasem, setOnMouse] = useState(false)
    const mouseHandler = () => {
        setOnMouse(!jasem)

    }
    return (
        <Navbar>
            <Navbar.Wrapper>
                <Navbar.Logo>EPIC <i className="fab fa-firstdraft"></i></Navbar.Logo>

                <Navbar.Menu>
                    <Navbar.Menu>
                        { MenuItems.map((item, index) => {
                            if (item.title === "Services")
                                return (
                                    <Navbar.Items key={ index }>
                                        <Navbar.Links href="#" >
                                            <Navbar.Services onMouseEnter={ mouseHandler } onMouseOut={ mouseHandler }>Services
                                                <SubMenuContainer jasem={ jasem } ></SubMenuContainer>
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