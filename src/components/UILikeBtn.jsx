import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

function UILikeBtn({title, counter, icon, onClick}) {
    return (
        <button data-testid="counter-button" type="button" className="border p-4" title={title} onClick={onClick}>
            <span data-testid="counter">{counter}</span>
            <FontAwesomeIcon icon={icon} className="m-4"/>
        </button>
    )
}

UILikeBtn.propTypes = {
    title: PropTypes.string,
    counter: PropTypes.number,
    icon: PropTypes.object,
    onClick: PropTypes.func,
};

export default UILikeBtn;
