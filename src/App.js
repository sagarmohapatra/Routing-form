import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import Test from './component/Test';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div >
        <div className='App-link'>
          <Test />
          <Link to="/home">Home</Link>
          <Link to="login">Login</Link>
        </div>
        <div className='center'>
          <Route path="/home" render={(props) => {
            return <div>
              {/* console.log(,); */}
              <Home username="sagar" {...props} />
            </div>
          }} />
          <Route path="/login" component={Login} />

        </div>
        {/* <Home />
      <Login /> */}
      </div>
    </Router>
  )

}

export default App;
