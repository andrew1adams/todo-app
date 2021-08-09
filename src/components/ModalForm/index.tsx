import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../../Context/TasksContext';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container } from './style';

export const ModalForm: React.FC = () => {
  const { inputValue, setInputValue, toDoList, setToDoList } =
    useContext(TasksContext);
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    setToDoList([...toDoList, { ...inputValue, id: ++toDoList.length }]);
    setInputValue({
      id: 0,
      task: '',
      category: '',
      priority: 0,
      completed: false,
    });
  };

  console.log();
  return (
    <Container onSubmit={handleSubmit}>
      <div className="inputSections">
        <Input
          name="task"
          label="Tasks:"
          type="text"
          placeholder="Describe your task"
          value={inputValue.task}
          onChange={(ev: any) =>
            setInputValue({ ...inputValue, task: ev.target.value })
          }
        />
        <Input
          name="category"
          label="Category:"
          type="text"
          placeholder="Describe your category"
          value={inputValue.category}
          onChange={(ev: any) =>
            setInputValue({ ...inputValue, category: ev.target.value })
          }
        />
        <Input
          name="priority"
          label="Level Priority:"
          type="range"
          placeholder=""
          value={inputValue.priority}
          onChange={(ev: any) => {
            setInputValue({ ...inputValue, priority: ev.target.value });
          }}
        />
      </div>

      <Button className="btn" onClick={() => {}}>
        Add Task
      </Button>
    </Container>
  );
};
