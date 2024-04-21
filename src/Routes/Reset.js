import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate, Link } from "react-router-dom"
import { auth, resetPassword } from "./firebase"

export default function Reset(){
    
    const [email, setEmail] = useState("")
    const [user,error] = useAuthState(auth)

    const navigate = useNavigate()

    useEffect(() => {
      if (user) navigate("/home")
    })

    return (
      <div>
          <input type="text" value={email} placeholder="adresse mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => resetPassword(email)}>
            Réinitialiser le mot de passe par mail
          </button>
          <div>
            Pas de compte ? <Link to="/register">Enregistrez vous</Link>
          </div>
      </div>
    )   
}