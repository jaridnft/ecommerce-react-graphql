import styled from 'styled-components';

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
    text-align: center;
  }
  .buttonList {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid ${props => props.theme.lightgrey};
    background: ${props => props.theme.lightgrey};
    button {
      font-weight: 600;
    }
    a {
      width: 100%;
      text-align: center;
    }
    & > * {
      background: white;
      border: 0;
      font-size: 1rem;
      padding: 1rem;
    }
    @media (min-width: 700px) {
      flex-direction: row;
      a,
      button {
        width: 33%;
      }
    }
  }
`;

export default SingleItemStyles;
