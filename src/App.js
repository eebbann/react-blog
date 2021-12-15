 import Home from "./pages/home/Home.js";
import TopBar from "./components/topBar/TopBar.js";
import SinglePage from "./pages/singlePage/SinglePage.js";
import Write from "./pages/write/Write.js";

function App() {
  return (
    <div className="App">
         <TopBar/>
				 {/* <Home /> */}
				 {/* <SinglePage /> */}
				 <Write />
    </div>
  );
}

export default App;
