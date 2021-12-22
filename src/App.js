 import Home from "./pages/home/Home.js";
import TopBar from "./components/topBar/TopBar.js";
import SinglePage from "./pages/singlePage/SinglePage.js";
import Write from "./pages/write/Write.js";
import Settings from "./pages/settings/Settings.js";
import Login from "./pages/login/Login.js";
import Register from "./pages/register/Register.js";

function App() {
  return (
    <div className="App">
         <TopBar/>
				 {/* <Home /> */}
				 {/* <SinglePage /> */}
				 {/* <Write /> */}
				 {/* <Settings	/> */}
				 {/* <Login /> */}
				 <Register />
				 
    </div>
  );
}

export default App;
