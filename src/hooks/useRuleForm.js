import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addRule, editRule } from "../services/rules.store";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { RoleContext } from "../services/RoleContext";

const useRuleForm = (rule) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { role } = useContext(RoleContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: rule?.title || "",
            description: rule?.description || "",
        }
    });

    useEffect(() => {
        reset({
            title: rule?.title || "",
            description: rule?.description || "",
        });
    }, [reset, rule]);

    const onSubmit = (data) => {
        const status = 'admin' === role ? "validated" : "pending";

        if (rule && rule.id) {
            dispatch(editRule({ ...data, id: rule.id, status }));
        } else {
            dispatch(addRule({ ...data, status }));
        }

        navigate('/');
    };

    return { onSubmit, register, handleSubmit, errors };
};

export default useRuleForm;
