import { Container, Content, Logo } from "./styles";
import logo_gray from '../../assets/logo_gray.svg'
import logoFooter from '../../assets/logo-footer.svg';

export function Footer() {
    return (
        <Container>
            <Content>
                <Logo>
                    <div className="logo">    
                        <img src={logoFooter} alt="Logo" />
                        <span>Food Explorer</span>
                    </div>
                </Logo>

                <p>
                    © 2024 - Todos os direitos reservados.
                </p>

            </Content>
        </Container>
    );
}
