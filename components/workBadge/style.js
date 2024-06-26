import styled from "styled-components";

export const AboutBadge = styled.div`
    display: flex;
    gap: 8px;
`;

export const WorkTitleAndImg = styled.div`
    display: flex;
    justify-content: center;
    gap: 4px;
    align-items: center;
    padding: 5px;
    background-color: rgb(224, 224, 224);
    color: rgb(101, 101, 101);
    border-radius: 3px;

    &:hover {
        text-decoration: none;
        color: rgb(66, 66, 66);
    }
`;