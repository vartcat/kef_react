import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Link, useNavigate } from "react-router-dom"
import { auth, registerUser } from "./firebase"

export default function Register(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()
    
    const register = () => {
      registerUser(email, password)
    }

    useEffect(() => {
      if (loading) return
      if (user) navigate("/home")
    }, [user, loading])

   
    return (
      <div>
          <input type="text" value={email} placeholder="E-mail Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input type="password" value={password} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register}>
            Register
          </button>
        
          <div>
            Déjà un compte ? <Link to="/login">Connectez vous</Link>
          </div>
      </div>
    )
}