 import Home from "./pages/home/Home.js";
import TopBar from "./components/topBar/TopBar.js";
import SinglePage from "./pages/singlePage/SinglePage.js";
import Write from "./pages/write/Write.js";
import Settings from "./pages/settings/Settings.js";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

 function App() {
	const user = true;
  return (
    <BrowserRouter>
      <TopBar/>
			 <Routes >
				<Route path="/" element={ <Home/>}/>
				<Route path="/write" element={ user ? <Write/> : <Login/> }/>
				<Route path="/Login" element={ user ? <Home/> : <Login/> }/>
				<Route path="/Register" element={ user ? <Home/> : <Register/> }/>
				<Route path="/create" element={ user ? <Write /> : <Home/> }/>
				<Route path="/post/:postId" element={<SinglePage />}/>  
				<Route path="/settings" element={<Settings />}/>
			 </Routes>
    </BrowserRouter>
  );
}

export default App;
