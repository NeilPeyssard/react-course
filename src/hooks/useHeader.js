import { useContext } from "react";
import { RoleContext } from "../services/RoleContext";
import { LocaleContext } from "../services/LocaleContext";

const useHeader = () => {
    const { setRole } = useContext(RoleContext);
    const { setLocale } = useContext(LocaleContext);

    const toggleRole = () => {
        setRole((prevRole) => "user" === prevRole ? "admin": "user");
    }

    const toggleLocale = () => {
        setLocale((prevLocale) => "en" === prevLocale ? "fr": "en");
    }

    return { toggleRole, toggleLocale };
};

export default useHeader;
