import { Container, Img } from "./styled";

export function Sidebar () {
    return (
        <>
        <Container>
        <aside>
            <img 
             
            src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            
            <div>
                <Img>
                <img src="https://github.com/mateuscarvalhodev.png" />
                </Img>
                <strong>Mateus Carvalho</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
        </Container>
        </>
    );
}