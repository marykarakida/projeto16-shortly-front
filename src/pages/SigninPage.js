import React, { useState } from 'react';

import PageContainer from '../layout/PageContainer';
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

export default function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
    };

    return (
        <PageContainer>
            <Form onSubmit={signIn}>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
                <Button type="submit">Entrar</Button>
            </Form>
        </PageContainer>
    );
}
