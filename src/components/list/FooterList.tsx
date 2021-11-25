import { TasksList } from "../../model/TasksList";
import { ButtonList } from "./ButtonList";

interface FooterListProps {
  tasks: TasksList;
  onChange: (tasks: TasksList) => void;
}

export function FooterList({ tasks, onChange }: FooterListProps) {
  function renderItemsQuantity() {
    return (
      <>
        <span className={`text-gray-300 hidden lg:inline`}>
          {tasks.quantity}
          {tasks.quantity === 0 
          ? ' Nenhuma Tarefa encontrada' 
          : tasks.quantity === 1 
          ? ' Tarefa encontrada' 
          : ' Tarefas encontradas'}
        </span>
        <span className="flex-1 hidden lg:inline"></span>
      </>
    )
  }

  function renderFilterButtons() {
    return (
      <>
        <ButtonList 
          selected={tasks.showAll()} 
          onClick={() => onChange(tasks.removeFilter())}
          className={`
            hidden md:inline
          `}
        >
          Todas
        </ButtonList>
        <ButtonList 
          selected={tasks.showActive()} 
          onClick={() => onChange(tasks.filterActive())}
          className={`mx-4`}
        >
          Ativas
        </ButtonList>
        <ButtonList 
          selected={tasks.showCompleted()} 
          onClick={() => onChange(tasks.filterCompleted())}
        >
          Concluidas
        </ButtonList>
      </>
    )
  }

  function renderRemoveCompleted() {
    return (
      <>
        <span className="flex-grow"></span>
        <ButtonList
          onClick={() => onChange(tasks.removeCompleted())}
        >
          Excluir <span className={`hidden md:inline`}>Concluídas</span>
        </ButtonList>
      </>
    )
  }

  return (
    <li className={`flex p-5`}>
      {renderItemsQuantity()}
      {renderFilterButtons()}
      {renderRemoveCompleted()}
    </li>
  );
}