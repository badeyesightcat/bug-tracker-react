import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './Views/Login/login';
import Sidebar from './Views/Sidebar/sidebar';

function App() {
  const { auth } = useSelector((state) => state);

  return (
    <Router>
      {!auth.loggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
        </>
      )}
    </Router>
  );
}

export default App;
