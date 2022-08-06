import React from 'react';
import styled from 'styled-components';

export default function PageContainer({ children }) {
    return (
        <Page>
            <Container>{children}</Container>
        </Page>
    );
}

const Page = styled.div`
    width: 100%;
    flex-shrink: 0;
`;

const Container = styled.div`
    padding: 20px;
`;
