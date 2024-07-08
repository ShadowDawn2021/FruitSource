import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./page/Home.jsx";
import Shop from "./page/Shop.jsx"
function App() {
 

  return (
    <>
      <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Shop" element={<Shop />} />
				</Routes>
			</BrowserRouter>
		</div>
    </>
  )
}

export default App
