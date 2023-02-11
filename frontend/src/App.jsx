import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Views/pages/Login';
import BugsList from './Views/pages/BugsList';
import Sidebar from './Views/components/Sidebar';

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
