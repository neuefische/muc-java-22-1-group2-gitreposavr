import axios from "axios";
import {GitRepo} from "../models";
import "./Repo.css"

interface RepoProps {
    repo: GitRepo
}

export default function Repo(props: RepoProps) {

    const handleClick = () => {
        axios.put("/api/repos", props.repo).then(res => res.data).then(data=>console.log(data));
    }

    return (
        <div className="card repo-comp">
            <h1 className="repo-heading">{props.repo.name}</h1>
            <div>{props.repo.id}</div>
            <div>{props.repo.description}</div>
            <a href={props.repo.html_url}>to Repo</a> 
            <button onClick={handleClick}>Save</button>
        </div>
    );
}