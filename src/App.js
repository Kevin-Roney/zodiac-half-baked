import './App.css';
{/* import the zodiac array */}
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';

function App() {
  return (
    <div className="App">
      {/* import and use the Header. Main, and Footer components here */}
      <Header name="Kevin"/>
      {/* the Header component needs a string passed in as the `name` prop */}
      {/* the Footer component needs a year passed in as the `year` prop */}
      <Footer year="2022"/>
      {/* pass the zodiac array imported above to the Main component as a `zodiacs` prop */}
    </div>
  );
}

export default App;
