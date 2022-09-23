import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 10px;

  padding: 16px 22px;
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;

  > h1 {
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    padding-top: 24px;
  }
`