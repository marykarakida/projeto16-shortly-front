import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import UserContext from '../contexts/userContext';
import useAxios from '../hooks/useAxios';

import PageContainer from '../layout/PageContainer';
import RankingList from '../components/Ranking/RankingList';
import RankingItem from '../components/Ranking/RankingItem';
import Title from '../components/Ranking/Title';
import trophyIcon from '../assets/images/trophy.png';

export default function RankingPage() {
    const { key } = useLocation();
    const { authenticated, checkSession } = useContext(UserContext);
    const [{ data: ranking, loading }] = useAxios({ method: 'GET', route: '/ranking' });

    useEffect(() => {
        checkSession();
    }, [key]);

    return (
        <PageContainer>
            <Title>
                <img src={trophyIcon} alt="Foto de um troféu" />
                <h2>Ranking</h2>
            </Title>
            <RankingList>
                {!loading &&
                    ranking.map(({ id, name, linksCount, visitCount }, index) => (
                        <RankingItem key={id}>
                            {index + 1}. {name} - {linksCount} links - {visitCount} visualizações
                        </RankingItem>
                    ))}
            </RankingList>
            {authenticated === false && (
                <Title>
                    <h2>Crie sua conta para usar nosso serviço!</h2>
                </Title>
            )}
        </PageContainer>
    );
}
