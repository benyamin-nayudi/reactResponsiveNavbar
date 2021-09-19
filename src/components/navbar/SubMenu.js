import { SubMenuItems } from "./MenuItems"

export default function SubMenu() {
    return (
        SubMenuItems.map((item, index) => {
            return (
                <subMenu key={ index } href={ item.url }>{ item.title }</subMenu>

            )
        })
    )
}