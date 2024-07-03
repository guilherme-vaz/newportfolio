import styled from "styled-components";

export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    position: sticky;
    top: 0;
    padding: 1.2rem 2rem;
`;


export const LinksContainer = styled.div`
    display: flex;
    gap: 12px;
    justify-content: space-between;
    padding-right: 3rem; 
    font-size: 16px;
    color: red;
`

export const Container = styled.main`
    margin: 2rem auto 0 auto;
    width: 850px;
`;

export const Title = styled.div`
    font-size: 36px;
    line-height: 40px;
    color: #000000;
`;

export const Work = styled.section`
    margin-top: 1.3rem;
    color: rgb(96, 96, 96);
    font-size: 16px;
    font-weight: 400;
    text-align: left;
    display: flex;
    flex-direction: column;
`;