import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  margin: auto;

  background-color: ${({ theme }): string => theme.color.grayLightest};
  border-radius: ${({ theme }): string => theme.border.radius.regular};
  box-shadow: rgb(0 0 0 / 15%) 0px 1px 1px 0px;
  overflow: hidden;
`;

export const Title = styled.h1`
  margin: 0;
  padding: ${({ theme }): string => theme.spacing.l};

  background-color: ${({ theme }): string => theme.color.white};
  border-bottom: 1px solid ${({ theme }): string => theme.color.grayMedium};
  font-size: ${({ theme }): string => theme.font.size.header};
  font-weight: ${({ theme }): number => theme.font.weight.bold};
  text-align: center;
`;

export const Content = styled.div`
  padding: ${({ theme }): string => theme.spacing.l};
`;
