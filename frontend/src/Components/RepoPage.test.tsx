import RepoPage from "./RepoPage";
import {render} from "@testing-library/react";
import {MemoryRouter, Routes,Route} from "react-router-dom";


test('if components are rendered and correct', () => {
//given

    render(<MemoryRouter initialEntries={["/repos/Testusername"]}>
        <Routes>
            <Route path={"/repos/:Testusername"} element={<RepoPage/>}/>
        </Routes>
    </MemoryRouter>)
})