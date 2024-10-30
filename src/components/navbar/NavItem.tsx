import React from "react"
interface NavItemProps {
  title: string | React.ReactNode
  className?: string
  textClass?: string
  onClick?: () => void
}
const NavItem: React.FC<NavItemProps> = ({
  title,
  className = "",
  textClass = "",
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      title=""
      className={`text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mx-4 ${className}`}
    >
      <h3 className={textClass}>{title}</h3>
    </div>
  )
}

export default NavItem
