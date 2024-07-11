import PropTypes from 'prop-types';

const Tag = ({ label }) => {
    return (
        <span className="p-4 bg-gray-400 rounded text-white text-2xl mx-4">
            {label}
        </span>
    );
};

Tag.propTypes = {
    label: PropTypes.string,
};

export default Tag;
