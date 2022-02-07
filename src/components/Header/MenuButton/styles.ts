import styled from "styled-components";

export const MenuContainer = styled.button`
  background: none;
  display: none;
  align-items: center;
  justify-content: center;
  margin-left: ${({ theme }) => theme.spacing.xxl}px;

  opacity: 1;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.header}px) {
    display: flex;
  }
`;
