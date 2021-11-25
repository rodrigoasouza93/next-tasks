import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface SelectProps {
  value: boolean;
}

export function Select({ value }: SelectProps) {
  const gradient = value ? 'bg-gradient-to-br from-blue-400 to-purple-500' : '';

  return (
    <div className={`
      flex justify-center items-center
      h-7 w-7 rounded-full cursor-pointer
      border border-gray-400 text-white 
      ${gradient}
    `}>
      {value ? <FontAwesomeIcon size="sm" icon={faCheck} /> : ''}
    </div>
  )
}