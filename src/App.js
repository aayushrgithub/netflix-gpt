import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;

/*
Login/Signup
  - Sign in/Sign up form
  - Redirect to browse page

Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movie Suggestions
      - Movie Lists * N
    
Netflix GPT
  - Search Bar
  - Movie Suggestions
*/
