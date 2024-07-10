import { useState } from 'react';
import UILikeBtn from './UILikeBtn';
import PropTypes from 'prop-types';

function LikeBtn({title, count, icon}) {
    const [counter, setCounter] = useState(count);
    const updateCounter = () => {
        setCounter((prevCount) => prevCount + 1)
    };

    return <UILikeBtn title={title} counter={counter} icon={icon} onClick={updateCounter} />;
}

LikeBtn.propTypes = {
    title: PropTypes.string,
    count: PropTypes.number,
    icon: PropTypes.object,
};

export default LikeBtn;
