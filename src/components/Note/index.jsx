import { Container } from './styles'
import { Tag } from '../Tags'

export function Note({data, ...rest}){
  return (
    <Container>
      <h1>{data.title}</h1>

      {
        data.tags && 
        <footer>
          { data.tags.map(tag => <Tag key={tag.name} title={tag.name}/>)}
        </footer>
      }
    </Container>
  )
}