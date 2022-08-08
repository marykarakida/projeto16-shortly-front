import axios from 'axios';
import { useState, useEffect } from 'react';

const queryStringBuilder = (query = {}) =>
    Object.keys(query).length
        ? `?${Object.keys(query)
              .map((k) => `${k}=${query[k]}`)
              .join('&')}`
        : '';

const useAxios = ({ method, route, headers: defaultHeaders, body: defaultBody, query }, manual = false) => {
    const [response, setResponse] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(!manual);
    const [error, setError] = useState(null);

    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

    const config = {
        method,
        url: `${route}${queryStringBuilder(query)}`,
    };

    const executeRequest = async (body = defaultBody, headers = null, callback = null) => {
        try {
            setLoading(true);

            const result = await axios({
                ...config,
                headers: {
                    ...defaultHeaders,
                    ...headers,
                },
                data: body,
            });

            setResponse(result);
            setData(result.data);
        } catch (err) {
            setError(err);
        } finally {
            if (callback) {
                callback();
            }
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
