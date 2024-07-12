import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown, faChevronUp, faPencil, faThumbsDown, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import Tag from './Tag';
import LikeBtn from './LikeBtn';
import PropTypes from 'prop-types';
import './Rule.css';
import useRule from '../hooks/useRule';

const Rule = ({ id, title, description, dislikes = 0, likes = 0, tags = [] }) => {
    const { folded, toggleFolded, onEdit, onLike, onDislike } = useRule();
    const cssClasses = [
        'p-4',
        'border',
        folded ? 'hidden' : 'flex',
        'justify-between',
        'items-center',
    ];

    return (
        <section className="m-16 mt-4" data-testid="rule">
            <header className="bg-blue-400 text-3xl p-4 text-white flex justify-between items-center" onClick={toggleFolded}>
                {title}
                <FontAwesomeIcon icon={folded ? faChevronUp : faChevronDown} className="m-4"/>
            </header>
            {!folded && description ? <p className="p-4 text-2xl">{description}</p> : null}
            <footer className={cssClasses.join(' ')}>
                <div>
                    {tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
                <div className="flex justify-end">
                    <button type="button" className="bg-blue-400 p-4 rounded text-2xl" onClick={() => onEdit(id)}>
                        <FontAwesomeIcon icon={faPencil} className="m-4"/>
                    </button>
                    <div className="flex">
                        <LikeBtn title="+1" onClick={() => onLike(id)} count={likes} icon={faThumbsUp} />
                        <LikeBtn title="-1" onClick={() => onDislike(id)} count={dislikes} icon={faThumbsDown} />
                    </div>
                </div>
            </footer>
        </section>
    );
};

Rule.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    dislikes: PropTypes.number,
    likes: PropTypes.number,
    tags: PropTypes.array,
};

export default Rule;
