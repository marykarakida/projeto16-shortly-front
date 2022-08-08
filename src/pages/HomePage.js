import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from '../contexts/userContext';

import PageContainer from '../layout/PageContainer';
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';
import useAxios from '../hooks/useAxios';
import Table from '../components/UrlsTable/Table';
import Row from '../components/UrlsTable/Row';

export default function HomePage() {
    const navigate = useNavigate();
    const { authenticated, getSession } = useContext(UserContext);
    const { token: firstReqToken } = getSession();

    const [{ data: urls, loading: getLoading }, executeGet] = useAxios({
        method: 'GET',
        route: '/users/me',
        headers: { Authorization: firstReqToken },
    });
    const [{ loading: postLoading }, executePost] = useAxios({ method: 'POST', route: '/urls/shorten' }, true);

    const [url, setUrl] = useState('');

    useEffect(() => {
        if (authenticated === false) {
            navigate('/', { replace: true });
        }
    }, [authenticated]);

    const createShortUrl = (e) => {
        e.preventDefault();

        const { token } = getSession();
        const body = { url };
        executePost(body, { Authorization: token }, () => executeGet(null, { Authorization: token }));
    };

    return (
        <PageContainer>
            <Form onSubmit={createShortUrl}>
                <div>
                    <Input
                        type="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        disabled={postLoading}
                        placeholder="Links que cabem no bolso"
                        required
                    />
                    <Button disabled={postLoading} margin="0">
                        Encurtar link
                    </Button>
                </div>
            </Form>
            <Table>
                {!getLoading &&
                    urls.shortenedUrls.map((shortened) => <Row key={shortened.id} shortened={shortened} executeGet={executeGet} />)}
            </Table>
        </PageContainer>
    );
}
