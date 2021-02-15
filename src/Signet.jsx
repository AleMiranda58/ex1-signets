import './Signet.scss';

export default function Signet(props) {
  return(
    <li className="Signet">
      <img src={'images-signets/' + props.id + '.jpg'} alt=""/>
      <div className="info">
        <p className="titre">{props.titre}</p>
        <p className="couleur">{props.couleur}</p>
        <p className="dateModif">{props.dateModif}</p>
      </div>
    </li>
  );
}