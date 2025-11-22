import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import QuestionPage from './pages/QuestionPage';
import QuestionResultPage from './pages/QuestionResultPage';
import ReviewPage from "./pages/ReviewPage.tsx";
import SharePage from './pages/SharePage.tsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path='/question' element={<QuestionPage />} />
                <Route path='/result' element={<QuestionResultPage />} />
                <Route path='/review' element={<ReviewPage />} />
                <Route path='/share' element={<SharePage/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;

