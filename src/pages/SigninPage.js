import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAxios from '../hooks/useAxios';

import PageContainer from '../layout/PageContainer';
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

export default function SigninPage() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [{ loading, data }, executePost] = useAxios({ method: 'POST', route: '/signin' }, true);

    useEffect(() => {
        if (data) {
            const { token, name } = data;
            localStorage.setItem('token', { token });
            localStorage.setItem('name', JSON.stringify({ name }));
            navigate('/home', { replace: true });
        }
    }, [data]);

    const signIn = (e) => {
        e.preventDefault();
        const body = { email, password };

        executePost(body);
    };

    return (
        <PageContainer>
            <Form onSubmit={signIn}>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    placeholder="E-mail"
                    required
                />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    placeholder="Senha"
                    required
                />
                <Button type="submit" disabled={loading}>
                    Entrar
                </Button>
            </Form>
        </PageContainer>
    );
}
