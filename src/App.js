import {BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/Profile'
import Wishlist from './components/Wishlist'

function App() {

  const otherProfile = {
    name: 'Rocco',
    email: 'rocco@ga.com'
  }
  const wishList = ['90in TV', 'Bag of LC marshmellows','RC']
  return (
    <Router>
    <div className="App">
     <Profile other={otherProfile}/>
     <Route exact path="/profile" render={(props)=> <Profile {...props} />}></Route>
     <Route path="/wishlist" render={(props)=> <Wishlist {...props} list={wishList}/>}></Route>
    </div>
    </Router>
  );
}
//other={otherProfile} was passed down as a p
export default App;
