interface HeaderProps {
  children: any;
}

export function Header({ children }: HeaderProps) {
  return (
    <div className={`flex h-1/3 bg-img-tasks bg-no-repeat bg-cover`}>
      <div className={`
        flex flex-1 h-full justify-center items-center
        bg-gradient-to-r from-purple-500 via-transparent to-blue-500
      `}>
        {children}
      </div>
    </div>
  )
}