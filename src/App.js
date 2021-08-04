import './App.css';
import Header from './Components/HeaderComponent';
import Footer from './Components/FooterComponent';
import Home from './Components/HomeComponent';
import Movie from './Components/MovieComponent';
import { Switch,Route, Redirect, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      
        <Switch>
          <Route path='/home' component={()=><Home />} />
          <Route path='/movies' component={()=><Movie />}/>
          <Redirect to='/home' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
