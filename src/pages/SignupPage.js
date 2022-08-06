import React, { useState } from 'react';

import PageContainer from '../layout/PageContainer';
import Form from '../components/Form/Form';
import Input from '../components/Form/Input';
import Button from '../components/Form/Button';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const signUp = (e) => {
        e.preventDefault();
    };

    return (
        <PageContainer>
            <Form onSubmit={signUp}>
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" required />
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirmar senha"
                    required
                />
                <Button type="submit">Criar conta</Button>
            </Form>
        </PageContainer>
    );
}
