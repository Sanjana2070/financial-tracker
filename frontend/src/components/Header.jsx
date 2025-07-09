'use client'

import { supabase } from '../utility/supabaseClient'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/') // or navigate('/login') if that's your login route
  }

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">DanJan Tech</span>
            <img
              alt="Logo"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto"
            />
          </a>
        </div>

        {/* Log out button */}
        <div>
          <button
            onClick={handleLogout}
            className="text-sm font-semibold text-blue-900 hover:underline"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
