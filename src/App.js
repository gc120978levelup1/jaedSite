import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layouts/Layout';
import Mainpage from './Pages/Mainpage';
import Page01 from './Pages/Page01';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"        element = {<Layout/>}>
            <Route index         element = {<Mainpage />} />
            <Route path="Page01" element = {<Page01 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
