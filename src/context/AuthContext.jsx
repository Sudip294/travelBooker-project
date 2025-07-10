import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Check for existing user session on app load
  useEffect(() => {
    const savedUser = localStorage.getItem('travelUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    setLoading(false)
  }, [])

  const signup = (name, email, password) => {
    const newUser = {
      id: Date.now(),
      name,
      email,
      password, // For demo only; never store plain passwords in production!
      role: 'user',
      joinDate: new Date().toISOString().split('T')[0],
      bookings: []
    }
    localStorage.setItem('travelSignup', JSON.stringify(newUser))
    localStorage.setItem('travelUser', JSON.stringify(newUser))
    setUser(newUser)
    return Promise.resolve(newUser)
  }

  const login = (email, password) => {
    const signupData = JSON.parse(localStorage.getItem('travelSignup'))
    if (signupData && signupData.email === email && signupData.password === password) {
      localStorage.setItem('travelUser', JSON.stringify(signupData))
      setUser(signupData)
      return Promise.resolve(signupData)
    } else if (email === 'admin@travel.com' && password === 'admin') {
      const adminUser = {
        id: 1,
        name: 'Admin',
        email,
        role: 'admin',
        joinDate: '2024-01-15',
        bookings: []
      }
      localStorage.setItem('travelUser', JSON.stringify(adminUser))
      setUser(adminUser)
      return Promise.resolve(adminUser)
    } else {
      return Promise.reject('Invalid email or password')
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('travelUser')
  }

  const updateUser = (updatedUser) => {
    setUser(updatedUser)
    localStorage.setItem('travelUser', JSON.stringify(updatedUser))
    const signupData = JSON.parse(localStorage.getItem('travelSignup'))
    if (signupData && signupData.email === updatedUser.email) {
      localStorage.setItem('travelSignup', JSON.stringify(updatedUser))
    }
  }

  const refreshUser = () => {
    const savedUser = localStorage.getItem('travelUser')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
  }

  const value = {
    user,
    login,
    signup,
    logout,
    updateUser,
    refreshUser,
    loading
  }
  
    return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}