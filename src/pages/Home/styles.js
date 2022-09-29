import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas:
    'brand header'
    'menu search'
    'menu content'
    'newnote content';

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`

export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
  }
`

export const Menu = styled.ul`
  grid-area: menu;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 64px;
  align-items: center;

  list-style: none;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Search = styled.div`
  grid-area: search;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 64px;
`

export const Content = styled.div`
  grid-area: content;
  
  padding: 0 64px;
  overflow-y: auto;

`

export const NewNote = styled(Link)`
  grid-area: newnote;

  border: none;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  >svg {
    color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};
  }
`
