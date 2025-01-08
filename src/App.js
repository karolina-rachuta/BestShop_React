import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Bg_desktop from './assets/Background@2x.webp';
import Bg_mobile from './assets/bgc-mobile.webp';
import Home from './components/Home';
import './App.scss';

function App() {
    useEffect(() => {
        //preloading image
        let imageList = [Bg_desktop, Bg_mobile];
        imageList.forEach((image) => {
            new Image().src = image;
        });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />{' '}
            </Routes>{' '}
        </BrowserRouter>
    );
}

export default App;
