import { Provider } from 'react-redux';

import './App.css';

import store from './store/store'
import { navigate } from './store/roomSlice'

import Character from './components/Character';
import Room from './components/Room';

function App() {

  function handleNavigation(event, direction) {
    event.preventDefault();
    store.dispatch(navigate(direction));
  }

  function handleCharacterAction(event, action) {
    event.preventDefault();
    console.log('char act');
  }

  return (
    <Provider store={store}>
      <main>
        <aside>
          <Character></Character>
        </aside>
        <div className="wrapper">
          <nav className="nav-wrapper">
            <ul className="ul-wrapper">
              <li className="north"><a href="#/north" onClick={(event) => handleNavigation(event, "north")}>north</a></li>
              <li className="south"><a href="#/south" onClick={(event) => handleNavigation(event, "south")}>south</a></li>
              <li className="west"><a href="#/west" onClick={(event) => handleNavigation(event, "west")}>west</a></li>
              <li className="east"><a href="#/east" onClick={(event) => handleNavigation(event, "east")}>east</a></li>
            </ul>
          </nav>
          <div className="viewer">
            <Room></Room>
          </div>
        </div>
      </main>
    </Provider>
  );
}

export default App;