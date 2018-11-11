import SingleItem from '../components/SingleItem';
import PleaseSignIn from '../components/PleaseSignIn';

const Item = props => (
  <div>
    <PleaseSignIn>
      <SingleItem id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default Item;
