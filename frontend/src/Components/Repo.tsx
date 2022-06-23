import {GitRepo} from "../models";

interface RepoProps {
    repo: GitRepo
}

export default function Repo(props: RepoProps) {

    return (
        <div>
            <h1>{props.repo.name}</h1>
            <span>{props.repo.id}</span>
            <br/>
            <span>{props.repo.description}</span>
            <br/>
            <a href={props.repo.html_url}>to Repo</a>
        </div>
    );
}