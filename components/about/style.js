import styled from "styled-components";

export const Paragraph = styled.div`
    width: 700px;
    text-align: left;
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: ${(props) => (props.$marginBottom ? '2rem' : '0px')}
`;

export const Emphasis = styled.strong`
    font-weight: bold;
    color: ${(props) => (props.$color ? '#404f6b' : 'orange')};
    text-decoration: ${(props) => (props.$underline ? 'underline' : 'none')};
    text-decoration-color: rgba(64, 79, 107, 0.4);
`;

export const Subtitle = styled.h3`
    font-weight: 600;
    font-size: 18px;
    margin-top: 2rem;
`;

export const Social = styled.div`
    width: 700px;
    text-align: left;
    line-height: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

export const SmallText = styled.p`
    font-size: 14px;
    margin-top: ${(props) => (props.$marginTop ? '2rem' : '0')};
    opacity: ${(props) => (props.$opacity ? '0.6' : '1')};
    text-align: ${(props) => (props.$textAlign ? 'center' : 'left')};
    margin-bottom: ${(props) => (props.$marginBottom ? '2rem' : '0')};
    padding-top: ${(props) => (props.$paddingTop ? '0.5rem' : '0')}
`;

