import React from 'react';
import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container } from './style';

interface TodoProps {
  id: number;
  task: string;
  category: string;
}

export const ModalForm: React.FC = () => {
  const [value, setValue] = useState<TodoProps>({
    id: 0,
    task: '',
    category: '',
  });
  const [list, setList] = useState<TodoProps[]>([]);

  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    setList([...list, { ...value, id: ++list.length }]);
    setValue({ id: 0, task: '', category: '' });
  };
  return (
    <Container onSubmit={handleSubmit}>
      <div className="inputSections">
        <Input
          name="task"
          label="Tasks:"
          type="text"
          value={value.task}
          onChange={(ev: any) => setValue({ ...value, task: ev.target.value })}
        />
        <Input
          name="category"
          label="Category:"
          type="text"
          value={value.category}
          onChange={(ev: any) =>
            setValue({ ...value, category: ev.target.value })
          }
        />
      </div>

      <Button className="btn" onClick={() => {}}>
        Add Task
      </Button>
    </Container>
  );
};
