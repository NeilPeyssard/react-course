import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { dislikeRule, likeRule } from "../services/rules.store";

const useRule = () => {
    const [folded, setFolded] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const onLike = (id) => {
        dispatch(likeRule({id}));
    }

    const onDislike = (id) => {
        dispatch(dislikeRule({id}));
    }

    const toggleFolded = () => {
        setFolded((prevFolded) => !prevFolded);
    };

    return { folded, toggleFolded, onEdit, onLike, onDislike };
};

export default useRule;
