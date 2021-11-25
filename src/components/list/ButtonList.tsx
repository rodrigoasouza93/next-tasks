interface ButtonListProps {
  selected?: boolean;
  className?: string;
  children: any;
  onClick: (event: any) => void;
}

export function ButtonList({ selected, className, children, onClick }: ButtonListProps) {
  const border = selected ? 'border-b-4 border-purple-400' : '';

  return (
    <button onClick={onClick} className={`
      text-gray-500 font-semibold hover:text-black
      focus:outline-none
      ${border}
      ${className}
    `}>
      {children}
    </button>
  )
}