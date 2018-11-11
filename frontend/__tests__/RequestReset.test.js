import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import RequestReset, {
  REQUEST_RESET_MUTATION
} from '../components/RequestReset';

const mocks = [
  {
    request: {
      query: REQUEST_RESET_MUTATION,
      variables: {
        email: 'jaridwarren@gmail.com'
      }
    },
    result: {
      data: { requestReset: { message: 'success', __typename: 'Message' } }
    }
  }
];

describe('<RequestReset />', () => {
  it('it renders and matches snapshot', async () => {
    const wrapper = mount(
      <MockedProvider>
        <RequestReset />
      </MockedProvider>
    );

    const form = wrapper.find('form[data-test="form"]');
    expect(toJSON(form)).toMatchSnapshot();
  });

  it('calls the mutation', async () => {
    const wrapper = mount(
      <MockedProvider mocks={mocks}>
        <RequestReset />
      </MockedProvider>
    );

    // simulate typing an email
    // second arg of simulate() comes from saveToState() args in ../components/RequestReset.js
    wrapper.find('input').simulate('change', {
      target: { name: 'email', value: 'jaridwarren@gmail.com' }
    });

    // submit the form
    wrapper.find('form').simulate('submit');
    await wait();
    wrapper.update();
    expect(wrapper.find('[data-test="success"]').text()).toContain(
      'Success! Check your email for a reset link!'
    );
  });
});
