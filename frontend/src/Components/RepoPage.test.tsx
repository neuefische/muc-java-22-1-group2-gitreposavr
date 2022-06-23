import RepoPage from "./RepoPage";
import {render} from "@testing-library/react";
import {MemoryRouter, Routes, Route} from "react-router-dom";


const testResponse = [{
        id: 123,
        name: "TestName",
        description: "Dies ist ein Test",
        html_url: "www.test.de"
    },
    {
        id: 124,
        name: "TestName2",
        description: "Dies ist ein Test",
        html_url: "www.test.de"
    }]

test('if components are rendered and correct', () => {

    // @ts-ignore
    jest.spyOn(global, "fetch").mockImplementation((url: string) => {
        expect(url).toEqual("https://api.github.com/users/Testusername/repos")
        return Promise.resolve({testResponse})
    })

    render(<MemoryRouter initialEntries={["/repos/Testusername"]}>
        <Routes>
            <Route path={"/repos/:username"} element={<RepoPage/>}/>
        </Routes>
    </MemoryRouter>)
})