import Post from "./components/post/Post";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {BrowserRouter ,Routes , Route , Navigate} from "react-router-dom";




function App() {
  const user = false;
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={ user ? <Navigate to="/"/> : <Login/>}/>
       <Route path="/register" element={<Register/>}/>
       <Route path="/profile/:id" element={user ? <Profile/> : <Navigate to="/login"/> }/>
    </Routes>
    
    </BrowserRouter>
    

    
  );
}

export default App;
