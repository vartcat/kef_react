/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { auth, logIn } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user, error] = useAuthState(auth)

    const navigate = useNavigate()

    useEffect(() => {
        if (user) navigate("/home")
    }, [user])

    return (
        <div>
            <input type="text" value={email} placeholder="adresse mail"
            onChange={(e) => setEmail(e.target.value)}
            />
            <input type="password" value={password} placeholder="mot de passe"
            onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => logIn(email, password)}>Connexion</button>

            <div>
                <Link to="/reset">Mot de passe oublié ?</Link>
            </div>
            <div>
                Pas de compte ? <Link to="/register">Enregistrez-vous !</Link>
            </div>
        </div>
    )
}