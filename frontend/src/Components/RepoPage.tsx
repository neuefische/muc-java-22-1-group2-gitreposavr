import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GitRepo} from "../models";
import Repo from "./Repo";

export default function RepoPage(){

    const [repos, setRepos] = useState<Array<GitRepo>>([])
    const {username} = useParams();

    useEffect(() => {
        fetch("https://api.github.com/users/" + username + "/repos")
            .then(response => response.json())
            .then(result => {
                setRepos(result)
            })
    }, [])

    const repoComponents = repos.map(repo => <Repo repo={repo}/>);

    return(
        <div>
            {repoComponents}
        </div>
    );
}