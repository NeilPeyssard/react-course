import { useParams } from "react-router-dom";
import { getRule } from "../services/rules.store";
import { useSelector } from "react-redux";
import useTranslation from "../hooks/useTranslation";
import Input from "../components/Input";
import useRuleForm from "../hooks/useRuleForm";

const RuleForm = () => {
    const { id } = useParams();
    const rule = useSelector(() => getRule(Number(id)));
    const { onSubmit, register, handleSubmit, errors } = useRuleForm(rule);
    const { translate } = useTranslation();

    return (
        <form className="flex justify-center my-4" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label={translate('title')}
                name="title"
                register={register}
                error={errors.title}
                errorMessage={translate('this_field_is_required')}
            />
            <Input
                label={translate('description')}
                name="description"
                register={register}
                error={errors.description}
                errorMessage={translate('this_field_is_required')}
            />
            <button
                className="rounded bg-blue-200 p-4 mr-10  hover:bg-blue-300 transition-all self-center"
                type="submit">
                    {translate('submit')}
                </button>
        </form>
    );
};

export default RuleForm;
