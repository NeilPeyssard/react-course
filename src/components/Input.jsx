import useTranslation from "../hooks/useTranslation";

const Input = ({ label, name, type = "text", register, defaultValue, error, errorMessage }) => {
    const { translate } = useTranslation();

    return (
        <div className="flex flex-col mx-4">
            <label>{label}</label>
            <input
                type={type}
                className="border my-4 py-4 shadow-lg"
                defaultValue={defaultValue}
                {...register(name, {required: true})}
            />
            {error && <span>{translate(errorMessage)}</span>}
        </div>
    );
};

export default Input;
