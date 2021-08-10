import React from 'react';
import { useContext } from 'react';
import { TasksContext } from '../../Context/TasksContext';
import { Button } from '../Button';
import { Input } from '../Input';
import { Container } from './style';
import {
  MdSignalCellular0Bar,
  MdSignalCellular1Bar,
  MdSignalCellular2Bar,
  MdSignalCellular3Bar,
  MdSignalCellular4Bar,
} from 'react-icons/md';

export const ModalForm: React.FC = () => {
  const {
    inputValue,
    setInputValue,
    toDoList,
    setToDoList,
    priorityIconValue,
    setPriorityIconValue
  } = useContext(TasksContext);
  const handleSubmit = (ev: any) => {
    ev.preventDefault();
    setToDoList([...toDoList, { ...inputValue, id: ++toDoList.length }]);
    setInputValue({
      id: 0,
      task: '',
      category: '',
      priority: 0,
      priorityIcon: <MdSignalCellular0Bar size='32' />,
      completed: false,
    });
  };

  const handleChange = (ev: any, size: string) => {
    switch (ev.target.value) {
      case '4':
        setPriorityIconValue(<MdSignalCellular4Bar size={size} />);
        break;
      case '3':
        setPriorityIconValue(<MdSignalCellular3Bar size={size}/>);
        break;
      case '2':
        setPriorityIconValue(<MdSignalCellular2Bar size={size}/>);
        break;
      case '1':
        setPriorityIconValue(<MdSignalCellular1Bar size={size}/>);
        break;
      default:
        setPriorityIconValue(<MdSignalCellular0Bar size={size}/>);
        break;
    }
    setInputValue({
      ...inputValue,
      priority: ev.target.value,
      priorityIcon: priorityIconValue,
    });
  };

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
          min={0}
          max={4}
          value={inputValue.priority}
          onChange={ev => handleChange(ev, '32')}
          complementIcon={priorityIconValue}
        />
      </div>

      <Button className="btn" onClick={() => {}}>
        Add Task
      </Button>
    </Container>
  );
};
