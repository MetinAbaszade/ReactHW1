
import { UserProvider } from "./components/context";
import UserConsumer from './components/context';
import Users from "./components/Users";
import toggleMode from "./scripts.js";
import './styles.css';

function App() {
  return (
    <div class="app">
      <UserProvider>
        <UserConsumer>
          {(value) => {
            const { isDarkMode } = value;
            return (
              <div>
                <button class="toggle-button" onClick={() => { value.setisDarkMode(); toggleMode(isDarkMode) }}>Toggle Mode</button>
                <div class="icons">
                  <div class="sun" id="sun">&#x2600;</div>
                  <div class="moon" id="moon">&#x1F319;</div>
                </div>
              </div>
            );
          }}
        </UserConsumer>

        <Users></Users>
      </UserProvider>
    </div>
  );
}

export default App;
