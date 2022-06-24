package com.example.demo;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


@Service
@RequiredArgsConstructor
public class GitSavrService {

    private final RepoRepo repoRepo;
    private final RestTemplate restTemplate;
    
    public User getUser(String username) {
        return restTemplate.getForObject("https://api.github.com/users/" + username, User.class);
    }
    
    public List<Repo> getSavedRepos() {
        return repoRepo.findAll();
    }

    public Repo saveRepo(Repo repo) {
        return repoRepo.save(repo);
    }
}
