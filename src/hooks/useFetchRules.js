import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { addRules } from "../services/rules.store";

const delay = (ms) => (data) => new Promise(
    (resolve) => setTimeout(() => resolve(data), ms),
);

const useFetchRules = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [fetchRules, setFetchRules] = useState(false);

    useQuery({
        queryKey: ['rules'],
        queryFn: () => axios.get('/data.json').then(delay(1990)).then((res) => {
            setLoading(false);
            dispatch(addRules(res.data))

            return res.data;
        }),
        enabled: fetchRules,
    });

    const request = () => {
        setFetchRules(true);
    };

    return { loading, request }
};

export default useFetchRules;
