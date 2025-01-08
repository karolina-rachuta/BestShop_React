import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Bg_desktop } from '../src/assets/Background@2x.webp';
import { Bg_desktop } from '../src/assets/bgc-mobile.webp';
import Home from './components/Home';
import './App.scss';

function App() {
    useEffect(() => {
        //preloading image
        imageList = [Bg_desktop, Bg_desktop];
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
