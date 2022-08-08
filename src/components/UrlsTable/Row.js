import React, { useCallback, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

import UserContext from '../../contexts/userContext';
import useAxios from '../../hooks/useAxios';

export default function Row({ shortened, executeGet }) {
    const { id, url, shortUrl, visitCount } = shortened;

    const { getSession } = useContext(UserContext);
    const [{ data }, executeRedirect] = useAxios({ method: 'GET', route: `/urls/open/${shortUrl}` }, true);
    const [{ loading: deleteLoading }, executeDelete] = useAxios({ method: 'DELETE', route: `/urls/${id}` }, true);

    const deleteUrl = useCallback(() => {
        const { token } = getSession();

        executeDelete(null, { Authorization: token }, () => executeGet(null, { Authorization: token }));
    }, []);

    useEffect(() => {
        const { token } = getSession();

        if (data) {
            const [, link] = data.split('to ');
            window.open(link, '_blank');
            executeGet(null, { Authorization: token });
        }
    }, [data]);

    return (
        <Container>
            <Content onClick={() => executeRedirect(null, null)}>
                <p>{url}</p>
                <p>{shortUrl}</p>
                <p>Quantidade de visitantes: {visitCount}</p>
            </Content>
            <ButtonContainer type="button" onClick={deleteUrl} disabled={deleteLoading}>
                <FaTrashAlt />
            </ButtonContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 12px 0px 0px 12px;
    padding: 20px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    width: 85%;
    background-color: #80cc74;

    p {
        font-size: 14px;
        color: #ffffff;
        white-space: nowrap;
        flex: 1 1 0px;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;

        p {
            flex: none;
            width: 100%;
        }

        p:not(:first-child) {
            overflow: visible;
            white-space: normal;
            word-break: break-all;
        }
    }
`;

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0px 12px 12px 0px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    width: 15%;
    background-color: #ffffff;
    cursor: pointer;

    svg {
        color: #ea4f4f;
        min-height: 24px;
        min-width: 24px;
    }
`;
