import React from 'react'
import { Button } from '../Button'
import { Input } from '../Input'
import { Container } from './style'

export const ModalForm: React.FC = () => {
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
      <div className='inputSections'>
        <Input name='task' label='Tarefa:' type='text' />
        <Input name='category' label='Categoria:' type='text' />
      </div>

      <Button className='btn' onClick={() => {}}>Adicionar Tarefa</Button>
    </Container>
  )
}
