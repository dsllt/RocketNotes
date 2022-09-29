import { Container, Profile, Logout } from "./style"
import { RiShutDownLine} from "react-icons/ri"

export function Header(){
  return (
    <Container>
      <Profile to='/Profile'>
        <img src="https://github.com/rodrigorgtic.png" alt="Foto do usuário"></img>
        <div>
          <span>Bem-vindo,</span>
          <strong>Rodrigo Gonçalves</strong>    
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine /> 
      </Logout>
    </Container>
  )
}