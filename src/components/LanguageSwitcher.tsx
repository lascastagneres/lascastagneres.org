"use client"
import { Link } from "@/i18n/i18nNavigation"
import { usePathname } from "next/navigation"
import { useState } from "react"

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // Detect the current language from the pathname
    const currentLang = pathname.split('/')[1]?.toUpperCase()


    return (
        <div className="relative">
            {/* Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 border border-gray-300 bg-white text-black font-semibold shadow-md hover:bg-gray-100"
            >
                {currentLang}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-16 bg-white border border-gray-300 shadow-lg">
                    <ul className="text-center text-sm">
                        {['fr', 'en', 'es', 'it'].map((l) => {
                            return (
                                <li>
                                    <Link
                                        href="/"
                                        locale={l}
                                        className="block py-2 hover:bg-gray-100"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {l.toUpperCase()}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default LanguageSwitcher
