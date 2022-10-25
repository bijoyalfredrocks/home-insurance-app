import 'bootstrap/dist/css/bootstrap.css';
import { Nav, HeaderText } from './Header.styled'

export const Header = ({ titleText }) => {
    return (
        <Nav>
            <HeaderText data-testid="header-title">{titleText}</HeaderText>
        </Nav>
    )
}
