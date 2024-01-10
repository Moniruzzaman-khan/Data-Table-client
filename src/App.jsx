import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductList from "./pages/ProductList.jsx";
import FullscreenLoader from "./components/masterLayout/Fullscreen-Loader.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProductList />}></Route>
            </Routes>
        </BrowserRouter>
        <FullscreenLoader/>
    </>
  )
}

export default App
