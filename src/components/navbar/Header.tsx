import Image from "next/image"
import React, { useEffect, useState } from "react"
import NavItem from "./NavItem"
import LangDropDown from "../navbar/Drop-down"
import { LANGUAGEOPTION } from "../constant/lang-option"
import i18n from "../helper/lang"
import { useTranslation } from "react-i18next"
import { useRouter } from "next/router"

const Header: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const toggleMenu = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const { t: translate } = useTranslation()
  const router = useRouter()

  // Define your menu items as an array of objects
  const menuItems = [
    { title: 'Home', path: "/" },
    { title: "Compare", path: "/" },
    { title: "NewCar", path: "/" },
    { title: "usedCars", path: "/" },
  ]


  return (
    <header
      className={`fixed top-0 w-full p-2 z-10 shadow-md transition-colors duration-300 
      ${scrolled ? "bg-white" : ""}
    `}
    >
      <div className="container px-4 mx-auto  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div
            onClick={() => router.push("/")}
            className="flex-shrink-0   flex justify-center"
          >
            <a
              title=""
              className="flex cursor-pointer rounded outline-none md:w-full md:h-full  mt-2 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <Image
                src="/assets/images/logo.png"
                alt={"logo"}
                width={90}
                height={90}
              />
            </a>
          </div>

          <div className="flex "></div>

          <div className="hidden   lg:flex lg:mx-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
            {menuItems.map((menuItem, index) => (
              <NavItem
              textClass={`
                      ${scrolled ? "text-black" : "text-white"}
`}
                className={
                `text-white`
                }
                key={index}
                onClick={() => router.push(menuItem.path)}
                title={menuItem.title}
              />
            ))}
          </div>

          <div
            className={`lg:flex  hid lg:items-center  flex justify-center items-center lg:space-x-10`}
          >
            <div className="lg:block hidden">

            </div>
            <button
              type="button"
              className="text-gray-900 lg:hidden block "
              onClick={toggleMenu}
              aria-expanded={expanded}
            >
              <span>
                {expanded ? (
                  <svg
                    className="w-7 h-7 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7 text-[#C16824]"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>

        <nav
          className={expanded ? "block  relative w-full h-screen" : "hidden"}
          aria-label="Mobile menu"
        >
          <div className="px-1 py-8 absolute lg:hidden block  w-full h-full">
            <div className="grid gap-y-7  px-4 py-4">
              {menuItems.map((menuItem, index) => (
                <NavItem
                  className={
                    router.pathname == menuItem.path
                      ? "border-b-2 border-gray-500 text-gray-500"
                      : ""
                  }
                  key={index}
               onClick={()=>{
                toggleMenu()
               }}
                  title={menuItem.title}
                />
              ))}
              <div className="flex justify-start items-center">
              </div>
            </div>
          </div>
        </nav>
        


      </div>
    </header>
  )
}

export default Header
