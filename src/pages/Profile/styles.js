import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    width: 100vw;
    height: 144px;
    background: ${ ({ theme })=> theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;

    padding: 0 124px;

    svg { 
      color: ${ ({ theme })=> theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`

export const Form = styled.form`
  width: 340px;
  display: flex;
  flex-direction: column;

  > div:nth-child(4) {
    margin-top: 16px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -93px auto 64px;

  > img {
    border-radius: 50%;

    width: 186px;
    height: 186px;
  }

  > label {
    border-radius: 50%;

    width: 48px;
    height: 48px;

    background: ${ ({ theme })=> theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg{
      width: 20px;
      height: 20px;
      color: ${ ({ theme })=> theme.COLORS.BACKGROUND_800};
    }
  }


`