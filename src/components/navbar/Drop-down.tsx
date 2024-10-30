import React, { useState } from "react"
import { useRouter } from "next/router"
import { FaCaretDown } from "react-icons/fa"
import i18n, { changeLanguage } from "../helper/lang"

interface LanguageOption {
  locale: string
  label: string
}

interface LangDropDownProps {
  options: LanguageOption[]
}

const LangDropDown: React.FC<LangDropDownProps> = ({ options }) => {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (selectedLocale: string) => {
    changeLanguage(selectedLocale)
    router.push(router.pathname, router.pathname, {
      locale: selectedLocale,
    })
    setIsOpen(false)
  }

  return (
    <div className="w-44">
      <div className="relative mt-1">
        <button
          type="button"
          onClick={handleToggle}
          className="relative w-full py-3 pl-3 pr-10 text-center flex justify-center  rounded-md shadow-lg cursor-default focus:outline-none focus:ring-1 ring-[#C16824] border border-[#C16824] sm:text-sm"
        >
          <span className="flex text-center w-full justify-between  items-center">
            {/* Add your language flag or label here */}
            <span className="flex w-full ml-3 text-center justify-between items-center truncate">
              {i18n.language == "en"
                ? "English"
                : i18n.language == "ar"
                ? "العربة"
                : "کوردی سۆرانی"}
              <FaCaretDown color={"#FFC906"} />
            </span>
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
            {/* Add your dropdown icon here */}
            <svg
              className={`w-5 h-5 ${isOpen ? "transform rotate-180" : ""}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              {/* Add your dropdown icon path here */}
            </svg>
          </span>
        </button>
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-[#16130A] text-white rounded-md shadow-lg">
            <ul
              tabIndex={-1}
              role="listbox"
              aria-labelledby="listbox-label"
              className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black text-white ring-opacity-5 focus:outline-none sm:text-sm"
            >
              {options.map((option) => (
                <li
                  key={option.locale}
                  role="option"
                  className="relative py-2 pl-3  cursor-default select-none hover:bg-[#C16824] hover:text-white text-white pr-9"
                  onClick={() => handleSelect(option.locale)}
                >
                  {/* Add your language flag or label here */}
                  <span className="block ml-3 font-normal truncate">
                    {option.label == "English"
                      ? "English"
                      : option.label == "Arabic"
                      ? "العربة"
                      : "کوردی سۆرانی"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default LangDropDown
