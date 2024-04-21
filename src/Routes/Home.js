import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, logOut } from "./firebase";
import { Link } from 'react-router-dom';


export default function Home() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
  }, [user, loading]);

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/profil">Profil</Link>
            </li>
            <li>
              <Link to="/createEvent">Nouveau KEF</Link>
            </li>
            <li>
              <Link to="/myEvents">Mes KEFs</Link>
            </li>
            <li>
              <Link to="logout">Déconnexion</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div>
        <h1>Bienvenue chez vous !</h1>
      </div>
      <div>
        <h2>Connecté avec le mail :</h2>
        <span>{user?.email}</span>
        <button onClick={logOut}>Déconnexion</button>
      </div>
    </>
  );
}
