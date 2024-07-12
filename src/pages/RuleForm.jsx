import { useState } from "react";
import { useParams } from "react-router-dom";
import { addRule, editRule, getRules } from "../services/rules.store";
import { useDispatch, useSelector } from "react-redux";

const RuleForm = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const rules = useSelector(getRules);
    const rule = rules.find((r) => r.id === parseInt(id));
    const [title, setTitle] = useState(rule ? rule.title || "" : "");
    const [description, setDescription] = useState(rule ? rule.description || "" : "");
    const [isFormValid, setIsFormValid] = useState("" !== title && "" !== description);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const payload= { title, description };

        if (id) {
            dispatch(editRule({ ...payload, id: parseInt(id) }));
        } else {
            dispatch(addRule(payload));
        }
    };

    const updateTitle = (e) => {
        setTitle(e.target.value);
        setIsFormValid("" !== e.target.value && "" !== description);
    };

    const updateDescription = (e) => {
        setDescription(e.target.value);
        setIsFormValid("" !== e.target.value && "" !== title);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className="border m-4 p-4 shadow-lg" value={title} onChange={updateTitle} />
            <input className="border m-4 p-4 shadow-lg" value={description} onChange={updateDescription} />
            <button type="submit" disabled={!isFormValid}>Submit</button>
        </form>
    )
};

export default RuleForm;
