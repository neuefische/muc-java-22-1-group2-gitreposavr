import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {GitRepo} from "../models";
import Repo from "./Repo";
import axios from "axios";

export default function RepoPage(){

    const [repos, setRepos] = useState<Array<GitRepo>>([])
    const {username} = useParams();

    const fetchRepos = () => {
        if(username) {
            axios.get("https://api.github.com/users/" + username + "/repos").then(res => res.data).then(data=>setRepos(data))
        } else {
            axios.get("/api/repos").then(res=>res.data).then(data=>setRepos(data))
        }
    }


    useEffect(() => {
        fetchRepos()
    }, [])

    const repoComponents = repos.map((repo, i) => <Repo key={"repo" +i} repo={repo}/>);

    return(
        <div>
            {repoComponents}
        </div>
    );
}