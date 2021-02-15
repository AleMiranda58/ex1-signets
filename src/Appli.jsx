import './Appli.scss';
import Entete from './Entete.jsx';
import ListeSignets from './ListeSignets';

export default function Appli() {
  return (
    <div className="Appli">
      <Entete />
      <section className="contenuPrincipal">
        <ListeSignets />
      </section>
    </div>
  );
}
