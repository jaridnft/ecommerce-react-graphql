import styled from 'styled-components';

const Dot = styled.div`
  background: ${props => props.theme.red};
  color: white;
  border-radius: 50%;
  padding: 0.25rem;
  line-height: 1.3rem;
  min-width: 2rem;
  margin-left: 1rem;
  font-weight: 100;
  /* keeps div width no matter what number is inside div */
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
  @media (min-width: 700px) {
    padding: 0.5rem;
    line-height: 2rem;
    min-width: 3rem;
  }
`;

const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: all 0.4s;
    backface-visibility: hidden;
  }
  /* initial state of the entered Dot */
  .count-enter {
    transform: rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: 0;
    position: absolute;
    transform: rotateX(0);
  }
  .count-exit-active {
    transform: rotateX(0.5turn);
  }
`;

export { Dot, AnimationStyles };
