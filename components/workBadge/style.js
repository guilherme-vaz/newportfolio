import styled from "styled-components";

export const AboutBadge = styled.div`
  display: ${(props) => props.$display ? 'inline' : 'flex'}
  gap: 8px;
`;

export const WorkTitleAndImg = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  color: #404f6b;
  border-bottom: 0.5px solid rgba(101, 101, 101, 0.3);

  &:hover {
    border-bottom: 1px solid rgb(101, 101, 101);
    transition: border-bottom 0.3s ease, transform 0.3s ease;
  }
`;



