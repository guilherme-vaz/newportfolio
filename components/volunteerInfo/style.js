import styled from "styled-components";

export const Paragraph = styled.div`
    width: 700px;
    text-align: left;
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: ${(props) => (props.$marginBottom ? '2rem' : '0px')}
`;

export const Subtitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    margin-top: 2rem;
`;

export const Emphasis = styled.strong`
    font-weight: bold;
    color: ${(props) => (props.$color ? '#404f6b' : '#404f6b')};
    text-decoration: ${(props) => (props.$underline ? 'underline' : 'none')};
    text-decoration-color: rgba(64, 79, 107, 0.4);
`;