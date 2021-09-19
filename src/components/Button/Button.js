
import { Button } from "./StyledButton";
const NavButton = ({ children, ...restProps }) => {
    return (
        <>
            <Button { ...restProps }> { children } </Button>
        </>
    );
}

export default NavButton;