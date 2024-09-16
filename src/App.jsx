
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  
  return (
    <div>
      <Router>
        {/* Navbar is rendered conditionally */}
        <Routes>
          {/* Public routes without Navbar */}
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          
          {/* Routes with Navbar */}
          <Route
            path="/*"
            element={
              <>
                {/* <Navbar show={show} setShow={setShow}/>
                <Routes>
                  <Route path="/" element={<Home show={show} setShow={setShow}/>} />
                  <Route path="/create-ride" element={<CreateRide />} />
                  <Route path="/verify" element={<Verification />} />
                  <Route path="/view-requests" element={<ViewRequests />} />
                  <Route path="/ride-status" element={<RidesStatus />} />
                  <Route path="/accept-ride/:id" element={<AcceptRide />} />
                </Routes> */}
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
