import SingleItem from '../components/SingleItem';
import PleaseSignIn from './PleaseSignIn';

const Item = props => (
  <div>
    <PleaseSignIn>
      <SingleItem id={props.query.id} />
    </PleaseSignIn>
  </div>
);

export default Item;
