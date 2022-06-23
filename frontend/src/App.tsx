import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Components/MainPage";
import RepoPage from "./Components/RepoPage";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/repos/:username" element={<RepoPage />} />
            </Routes>
        </BrowserRouter>
    )
}