import UILikeBtn from './UILikeBtn';
import PropTypes from 'prop-types';

function LikeBtn({title, count, icon, onClick}) {
    return <UILikeBtn title={title} counter={count} icon={icon} onClick={onClick} />;
}

LikeBtn.propTypes = {
    title: PropTypes.string,
    count: PropTypes.number,
    icon: PropTypes.object,
    onClick: PropTypes.func,
};

export default LikeBtn;
