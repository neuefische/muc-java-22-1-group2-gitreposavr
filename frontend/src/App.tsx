import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./MainPage";
import RepoPage from "./RepoPage";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/:id" element={<RepoPage />} />
            </Routes>
        </BrowserRouter>
    )
}