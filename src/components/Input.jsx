const Input = ({ label, name, type = "text", register, error, errorMessage }) => {
    return (
        <div className="flex flex-col mx-4">
            <label>{label}</label>
            <input
                type={type}
                className="border my-4 p-4 shadow-lg"
                {...register(name, {required: true})}
            />
            {error && <span className="text-red-500">{errorMessage}</span>}
        </div>
    );
};

export default Input;
