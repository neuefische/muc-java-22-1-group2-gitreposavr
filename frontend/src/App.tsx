import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Components/MainPage";
import RepoPage from "./Components/RepoPage";
import LoginPage from "./Components/LoginPage";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/main" element={<MainPage/>} />
                <Route path="/repos/:username" element={<RepoPage />} />
            </Routes>
        </BrowserRouter>
    )
}