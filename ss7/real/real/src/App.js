
import { Provider } from 'react-redux';
import UserList from './components/UsersList';
import store from './redux/Store';

function App() {
  return (
      <Provider store={store}>
          <UserList></UserList>
      </Provider>
  );
}

export default App;
