import { useState } from 'react';
import { useAuth } from '../../hooks/auth'

import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi'

import { Container, Form, Avatar } from "./styles";

import { Link } from 'react-router-dom'

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    await updateProfile({user})
  }

  return(
    <Container>
      <header>
        <Link to='/'> 
          <FiArrowLeft/> 
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/rodrigorgtic.png" 
            alt="Foto do usuário"
          />
          <label htmlFor='avatar'>
            <FiCamera/>

            <input 
              id='avatar'
              type= 'file'
            />
          </label>
        </Avatar>
        
        <Input 
          placeholder="Nome"
          type="text"
          icon = {FiUser}
          value={name}
          onChange = { e => setName(e.target.value)}
        />
        <Input 
          placeholder="Email" 
          type="text"
          icon={FiMail}
          value={email}
          onChange = { e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          onChange = { e => setPasswordOld(e.target.value)}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
          onChange = { e => setPasswordNew(e.target.value)}
        />
      <Button 
      title="Salvar"
      onClick={handleUpdate}/>

      </Form>

    </Container>
  )
}