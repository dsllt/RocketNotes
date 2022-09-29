import { Container, Form } from './styles'

import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { NoteItem } from '../../components/NoteItem'

export function New() {
  return(
    <Container>
      <Header/>
      <main>
        <div className='content'> 
          <Form>
            <header>
              <h1>Criar nota</h1>
              <Link to="/">
                voltar
              </Link>
            </header>

            <Input type="text" placeholder="Título"/>
            <Textarea placeholder="Observações"/>
          </Form>

          <Section title='Links úteis'>
            <NoteItem value="https://rocketseat.com.br"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>

          <Section title='Marcadores'>
            <div className='tags'>
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Novo marcador"/>
            </div>
          </Section>
        <Button title="Salvar"/>
        </div>

      </main>

    </Container>
  )
}