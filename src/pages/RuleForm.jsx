import { useState } from "react";
import { useParams } from "react-router-dom";

const RuleForm = () => {
    let { id } = useParams();
    const [value, setValue] = useState(id ? id : "");

    return (
        <form>
            <input className="border m-4 p-4 shadow-lg" value={value} onChange={(e) => setValue(e.target.value)} />
        </form>
    )
};

export default RuleForm;
