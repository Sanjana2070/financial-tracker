import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../utility/supabaseClient'

export default function Login() {
  const navigate = useNavigate()

  useEffect(() => {
    // Check for existing session on load
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/dashboard')
      }
    })

    // Listen for sign-in events
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        navigate('/dashboard')
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
      redirectTo: 'http://localhost:5173/dashboard'
    }
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={signInWithGoogle}
        className="px-6 py-3 text-white bg-red-600 rounded hover:bg-red-700"
      >
        Sign in with Google
      </button>
    </div>
  )
}
