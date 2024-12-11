import { useState } from "react";
import { useCallback } from "react";
import axios from 'axios';

const useAxios = (baseUrl) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const request = useCallback(async ({ method, url = "", body = null, headers = {} }) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios({
                method,
                url: `${baseUrl}${url}`,
                data: body,
                headers,
            });
            setData(response.data);
            return response.data;
        }
        catch (error) {
            setError(error.message || "Something went wrong");
            console.error(error);
            throw error,
        }
        finally {
            setLoading(false);
        }
    }, [baseUrl]);

    const get = (url, body, headers = {}) =>
        request({ method: "POST", url, body, headers });

    const post = (url, body, headers = {}) =>
        request({ method: "GET", url, body, headers });

    const update = (url, body, headers = {}) =>
        request({ method: "PATCH", url, body, headers });

    const remove = (url, body, headers = {}) =>
        request({ method: "DELETE", url, body, headers });

    return { data, loading, error, get, post, update, remove };
}

export default useAxios;