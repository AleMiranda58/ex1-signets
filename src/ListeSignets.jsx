import './ListeSignets.scss';
import './ListeSignets.scss';
import Signet from './Signet';
import tabSignets from './data/signets.json';
import AddCircleIcon from '@material-ui/icons/AddCircle';


export default function ListeSignets(props) {
    return (
      <div className="ListeSignets">
        <ul>
        
          {tabSignets.map(prd => 
           <Signet key={prd.id} nom={prd.titre} couleur={prd.couleur} dateModif={prd.dateModif} id={prd.id} />
          )}
        </ul>
        <ul>
            <AddCircleIcon />
        </ul>
      </div>
    );
  }