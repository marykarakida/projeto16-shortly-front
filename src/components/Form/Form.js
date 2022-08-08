import styled from 'styled-components';

export default styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 130px;

    input:not(:first-child) {
        margin-top: 16px;
    }

    div {
        display: flex;
        gap: 70px;
        width: 100%;
    }
`;
