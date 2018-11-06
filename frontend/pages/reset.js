import Reset from '../components/Reset';

const resetPage = props => (
  <div>
    <Reset resetToken={props.query.resetToken} />
  </div>
);

export default resetPage;
