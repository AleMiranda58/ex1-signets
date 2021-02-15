import './Entete.scss';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Entete(props) {
    return (
    <header className="Entete">
        <div className="logo">Signets</div>
        <ul className="navUtilisateur">
          <li>Nom Utilisateur</li>
          <li>
            <AccountCircleIcon />
          </li>
        </ul>
      </header>
    );
  } 