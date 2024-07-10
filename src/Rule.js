import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faChevronDown, faPencil, faThumbsDown, faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import Tag from './Tag';

const Rule = ({ title, description, dislikes = 0, likes = 0, tags = [] }) => {
    return (
        <section className="m-16 mt-4">
            <header className="bg-blue-400 text-3xl p-4 text-white flex justify-between items-center">
                {title}
                <FontAwesomeIcon icon={faChevronDown} className="m-4"/>
            </header>
            <p className="p-4 text-2xl">{description}</p>
                <footer className="p-4 border flex justify-between items-center">
                <div>
                    {tags.map((tag) => <Tag key={tag} label={tag} />)}
                </div>
                <div className="flex justify-end">
                    <button type="button" className="bg-blue-400 p-4 rounded text-2xl">
                        <FontAwesomeIcon icon={faPencil} className="m-4"/>
                    </button>
                    <div className="flex">
                        <button type="button" className="border p-4" title="+1">
                            {likes}
                            <FontAwesomeIcon icon={faThumbsUp} className="m-4"/>
                        </button>
                        <button type="button" className="border p-4" title="-1">
                            {dislikes}
                            <FontAwesomeIcon icon={faThumbsDown} className="m-4"/>
                        </button>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Rule;
