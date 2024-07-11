import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShrimp  } from '@fortawesome/free-solid-svg-icons';
import './Loader.css';

function Loader() {
    return (
        <div className="loader">
            <FontAwesomeIcon icon={faShrimp} />
        </div>
    );
}

export default Loader;
