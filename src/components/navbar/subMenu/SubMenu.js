import { SubMenuData } from "../MenuItems"
import { SubMenu, SubMenuItems } from "./StyledSubMenu"


export default function SubMenuContainer({ children, onMouse, ...restProps }) {
    return (
        <SubMenu>
            { SubMenuData.map((item, index) => {
                return (
                    <SubMenuItems key={ index } onMousee={ onMouse }  >{ item.title } { onMouse }                  </SubMenuItems>

                )
            }) }
            { console.log(2) }
        </SubMenu>
    )
}