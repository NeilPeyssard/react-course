import { useNavigate, useParams } from "react-router-dom";
import { addRule, editRule, getRule } from "../services/rules.store";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import useTranslation from "../hooks/useTranslation";
import Input from "../components/Input";
import { RoleContext } from "../services/RoleContext";
import { useContext } from "react";

const RuleForm = () => {
    const dispatch = useDispatch();
    const { translate } = useTranslation();
    const navigate = useNavigate();
    const { role } = useContext(RoleContext);
    const { id } = useParams();
    const rule = useSelector(() => getRule(Number(id)));

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        const status = 'admin' === role ? "validated" : "pending";
        if (id) {
            dispatch(editRule({ ...data, id: parseInt(id), status }));
        } else {
            dispatch(addRule({ ...data, status }));
        }

        navigate('/');
    };

    return (
        <form className="flex justify-center my-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Titre"
                name="title"
                register={register}
                defaultValue={rule?.title || ""}
                error={errors.title}
                errorMessage="this_field_is_required"
            />
            <Input
                label="Description"
                name="description"
                register={register}
                defaultValue={rule?.description || ""}
                error={errors.description}
                errorMessage="this_field_is_required"
            />
            <button className="rounded bg-blue-200 p-4 mr-10 self-center hover:bg-blue-300 transition-all" type="submit">{translate('submit')}</button>
        </form>
    );
};

export default RuleForm;
