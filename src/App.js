import logo from './logo.svg';
import './App.css';

function handleNavigation(direction){

}

function App() {

  let name = "diggy";

  return (
    <main>
      <div class="wrapper">
        <nav class="nav-wrapper">
          <ul class="ul-wrapper">
            <li class="north"><a href="#/North" onClick={() => handleNavigation("North")}>North</a></li>
            <li class="south"><a href="#/South" onClick={() => handleNavigation("South")}>South</a></li>
            <li class="west"><a href="#/West" onClick={() => handleNavigation("West")}>West</a></li>
            <li class="east"><a href="#/East" onClick={() => handleNavigation("East")}>East</a></li>
          </ul>
        </nav>
        <div class="viewer">
          <h1>Hi {name}!</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
