import styled from 'styled-components'

export const Container = styled.section`
  margin: 28px 0;

  > h2 {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 28px;

    font-size: 20px;
    line-height: 26px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`


