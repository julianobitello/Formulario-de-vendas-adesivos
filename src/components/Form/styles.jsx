import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  width: 60rem;
  height: 88rem;
  margin: 0.5rem auto;
  border-radius: 1rem;
`;

export const Circle = styled.div`
  border-radius: 0 0 100px 500px;
  background-color: #00007f;
  transform: rotate(-45deg);
  width: 600px;
  height: 500px;
  top: -250px;
  position: absolute;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  position: relative;
  justify-content: center;
  justify-content: space-between;
  overflow: hidden;

  p {
    font-size: 2.5rem;
    color: #f6f6f6;
    font-weight: none;
    padding: 2rem 5rem;
    z-index: 1;

    span {
      font-weight: bold;
    }
  }

  img {
    height: 15rem;
    width: 15rem;
    position: absolute;
    right: 90px;
    z-index: 2;
    overflow: hidden;
  }
`;

export const Content = styled.form`
  p {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

export const ContentForm = styled.div`
  padding: 3rem 0 0 3rem;
`;

export const ContentInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;

  label {
    font-size: 1.8rem;
    margin: 0 2rem 0 1.5rem;
  }

  button {
    border: none;
    background-color: #00007f;
    color: #ffffff;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 0.5rem;
  }

  span {
    margin: 0 1rem 0 1rem;
    padding-top: 0.4rem;
    border: 1px solid;
    width: 3.5rem;
    height: 2.5rem;
    text-align: center;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: #e7e4e4;
  }
`;

export const Notacion = styled.div`
  margin-top: 5rem;

  textarea {
    width: 95%;
    height: 20rem;
    border-radius: 1rem;
    background-color: #e7e4e4;
    padding: 1rem 0 0 1rem;
    font-size: 1.5rem;
    resize: none;

    ::placeholder {
      font-size: 1.5rem;
    }
  }
`;

export const Footer = styled.div`
  background-color: #e7e4e4;
  margin-top: 5rem;
  height: 15.3rem;
  border-radius: 0 0 1rem 1rem;

  button {
    border: none;
    padding: 0.8rem 3rem 0.8rem 3rem;
    background-color: #00007f;
    color: #ffffff;
    border-radius: 0.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 3rem 45rem;

    :hover {
      background-color: #04048a;
    }
  }
`;
