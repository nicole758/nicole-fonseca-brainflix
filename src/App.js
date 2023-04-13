import Header from "./components/Header/Header";
import './App.scss';
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home";
import Upload from "./pages/Upload/Upload";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/:videoId" element={<Home />}/> */}
        <Route path="/upload" element= {<Upload />}/>
      </Routes>
    </div>
  );
}

export default App;
