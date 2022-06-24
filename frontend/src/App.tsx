import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./Components/MainPage";
import RepoPage from "./Components/RepoPage";
import "./App.css"

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/repos/:username" element={<RepoPage />} />
                <Route path="/repos" element={<RepoPage />} />
            </Routes>
        </BrowserRouter>
    )
}