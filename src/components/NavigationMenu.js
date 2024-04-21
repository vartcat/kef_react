import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu() {
    return (
        <nav>
            <ul>
                <li><Link to="/profil">Profil</Link></li>
                <li><Link to="/mes-kefs">Mes KEFs</Link></li>
                <li><Link to="/nouveau-kef">Nouveau KEF</Link></li>
                <li><Link to="/rechercher-kefs">Rechercher KEFs</Link></li>
                {/* Autres liens vers pages ici */}
            </ul>
        </nav>
    );
}

export default NavigationMenu;
