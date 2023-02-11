import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/pages/login';
import BugsList from './views/pages/bugList';
import Sidebar from './views/components/sidebar';

function App() {
  const { auth } = useSelector((state) => state);

  return (
    <Router>
      {!auth.loggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <Routes>
            <Route path='/bugsList' element={<BugsList />}></Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
