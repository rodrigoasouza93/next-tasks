import { TasksList } from "../../model/TasksList";
import { ButtonList } from "./ButtonList";
import { FooterList } from "./FooterList";
import { ListItem } from "./ListItem";

interface ListProps {
  tasks: TasksList;
  onChange: (tasks: TasksList) => void;
}

export function List({ tasks, onChange }: ListProps) {
  function renderTasks() {
    return tasks.items.map(task => {
      return (
        <ListItem
          key={task.id}
          value={task.description}
          completed={task.completed}
          toggleStatus={() => {
            const modifiedTask = task.toggleStatus();
            const newList = tasks.modifyTask(modifiedTask);
            onChange(newList);
          }}
        />
      )
    })
  }

  return (
    <div className={`
      flex w-4/5 items-start relative
    `}>
      <ul className={`
        absolute -top-14
        w-full list-none
        bg-white shadow-lg rounded-lg
      `}>
        {renderTasks()}
        <FooterList tasks={tasks} onChange={onChange} />
      </ul>
    </div>
  )
}