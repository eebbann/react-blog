 import Home from "./pages/home/Home.js";
import TopBar from "./components/topBar/TopBar.js";
import SinglePage from "./pages/singlePage/SinglePage.js";

function App() {
  return (
    <div className="App">
         <TopBar/>
				 {/* <Home /> */}
				 <SinglePage />
    </div>
  );
}

export default App;
