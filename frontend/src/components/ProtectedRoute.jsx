// components/ProtectedRoute.jsx
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../utility/supabaseClient'

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        setIsAuthenticated(true)
      } else {
        navigate('/login')
      }
      setLoading(false)
    }

    checkAuth()
  }, [navigate])

  if (loading) return <div>Loading...</div>
  return isAuthenticated ? children : null
}
