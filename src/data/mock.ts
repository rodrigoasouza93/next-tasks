import { FilterType } from '../model/FilterType';
import { Task } from '../model/Task';
import { TasksList } from '../model/TasksList';

const initialTaks: Task[] = [
  // Task.createActive(1, 'Estudar Next'),
  // Task.createCompleted(2, 'Limpar Carro'),
  // Task.createActive(3, 'Comprar livro do mês'),
];

export const tasksList =  new TasksList(initialTaks, FilterType.NONE);