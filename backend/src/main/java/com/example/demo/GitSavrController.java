package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor

public class GitSavrController {
    private final GitSavrService gitSavrService;

    @GetMapping("/users/{username}")
    User getUserList (@PathVariable String username){
        return gitSavrService.getUser(username);
    }
}