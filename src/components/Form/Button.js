import styled from 'styled-components';

export default styled.button`
    padding: 20px;
    border: none;
    border-radius: 12px;
    margin: ${(props) => props.margin};
    background-color: #5d9040;
    width: 20%;
    color: #ffffff;
    cursor: pointer;

    &:hover {
        background-color: #4f7c36;
    }
`;
