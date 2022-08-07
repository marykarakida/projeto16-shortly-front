import axios from 'axios';
import { useState, useEffect } from 'react';

const queryStringBuilder = (query = {}) =>
    Object.keys(query).length
        ? `?${Object.keys(query)
              .map((k) => `${k}=${query[k]}`)
              .join('&')}`
        : '';

const useAxios = ({ method, route, headers, body: defaultBody, query }, manual = false) => {
    const [response, setResponse] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

    const config = {
        method,
        headers,
        url: `${route}${queryStringBuilder(query)}`,
    };

    const executeRequest = async (body = defaultBody) => {
        try {
            setLoading(true);

            const result = await axios({
                ...config,
                data: body,
            });

            setResponse(result);
            setData(result.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!manual) {
            executeRequest();
        }
    }, []);

    return [{ response, data, loading, error }, executeRequest];
};

export default useAxios;
