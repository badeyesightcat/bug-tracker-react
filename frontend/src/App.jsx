import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Views/Login/login';
import ViewBugs from './Views/Pages/viewBugs';
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
          <Routes>
            <Route path='/viewBugs' element={<ViewBugs />}></Route>
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
