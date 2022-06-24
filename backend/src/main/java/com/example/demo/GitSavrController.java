package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class GitSavrController {
    private final GitSavrService gitSavrService;

    @GetMapping("/users/{username}")
    User getUserList (@PathVariable String username){
        return gitSavrService.getUser(username);
    }

    @GetMapping("/repos")
    List<Repo> getSavedRepos(){
        return gitSavrService.getSavedRepos();
    }

    @PutMapping("/repos")
    Repo saveRepo(@RequestBody Repo repo){
        return gitSavrService.saveRepo(repo);
    }
}