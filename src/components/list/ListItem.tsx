import { Select } from "./Select";

interface ListItemProps {
  value: string;
  completed: boolean;
  toggleStatus: () => void;
}

export function ListItem({ value, completed, toggleStatus }: ListItemProps) {
  const textStyle = completed ? 'line-through text-gray-300' : 'text-gray-500';

  return (
    <li 
      onClick={toggleStatus} 
      className={`
      text-black
        flex items-center p-5
        border-b border-gray-400
        cursor-pointer text-xl
      `}
    >
      <Select value={completed} />
      <span className={`ml-5 font-light ${textStyle}`}>
        {value}
      </span>
    </li>
  )
}