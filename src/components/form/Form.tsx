import { useState } from "react"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Task } from "../../model/Task";

interface FormProps {
  newTaskCreated: (task: Task) => void;
}

export function Form({ newTaskCreated }: FormProps) {
  const [description, setDescription] = useState('');

  function createNewTask() {
    if (description?.trim().length > 0) {
      const newTask = Task.createActive(Math.random(), description);
      newTaskCreated(newTask);
      setDescription('');
    }
  }

  return (
    <div className="flex flex-1 justify-center">
      <input
        type="text"
        placeholder="Informe sua próxima tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' ? createNewTask() : false }
        className={`
          w-1/2
          py-2 px-3 rounded-lg border-2
          text-2xl
          border-purple-300 focus:outline-none
          focus:ring-2 focus:ring-purple-600
        `}
      />
      <button
        onClick={createNewTask}
        className={`
          ml-3 px-5 py-4 focus:outline-none rounded-lg
          bg-purple-600 text-white
        `}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  )
}