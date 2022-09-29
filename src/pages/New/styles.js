import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .content {
    width: 550px;
    margin: auto;

   margin-bottom: 96px;
  }

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    > NoteItem {
      width: fit-content;
    }
  }
`

export const Form = styled.form`
  margin-top: 38px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
