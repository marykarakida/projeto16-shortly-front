import React, { useState } from 'react';

import useAxios from '../hooks/useAxios';

import PageContainer from '../layout/PageContainer';
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [{ loading }, executePost] = useAxios({ method: 'POST', route: '/signup' }, true);

    const signUp = async (e) => {
        e.preventDefault();
        const body = { name, email, password, confirmPassword };

        await executePost(body);
    };

    return (
        <PageContainer>
            <Form onSubmit={signUp}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} disabled={loading} placeholder="Nome" required />
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
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                    placeholder="Confirmar senha"
                    required
                />
                <Button type="submit" disabled={loading}>
                    Criar conta
                </Button>
            </Form>
        </PageContainer>
    );
}
