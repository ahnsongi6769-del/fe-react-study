import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate, Link } from 'react-router';




function App() {

    let navigate = useNavigate();

    return (

        <div>
            <div>
                <button onClick={() => { navigate("/") }}>main</button>
                <button onClick={() => { navigate("/info") }}>/info</button>
                <button onClick={() => { navigate("/mypage") }}> /mypage</button>
                <button onClick={() => { navigate("/cart") }}>/cart</button>
            </div>
            <Routes>
                <Route path='' element={<div>main공간</div>} />
                <Route path='/info' element={<div>info공간</div>} />
                <Route path='/mypage' element={<div>mypage공간</div>} />
                <Route path='/cart' element={<div>cart공간</div>} />
            </Routes>

        </div>
    )

}

export default App;
