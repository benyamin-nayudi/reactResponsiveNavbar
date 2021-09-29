import { SubMenuData } from "../MenuItems"
import { SubMenu, SubMenuItems } from "./StyledSubMenu"


export default function SubMenuContainer(props) {
    return (
        <SubMenu { ...props }>

            { SubMenuData.map((item, index) => {
                return (
                    <SubMenuItems key={ index }  >{ item.title }</SubMenuItems>
                )
            }) }

        </SubMenu>
    )
}