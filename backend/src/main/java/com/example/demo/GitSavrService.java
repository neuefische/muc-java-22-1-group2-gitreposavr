package com.example.demo;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
@RequiredArgsConstructor
public class GitSavrService {
    private final RestTemplate restTemplate;
    public User getUser(String username) {
        return restTemplate.getForObject("https://api.github.com/users/" + username, User.class);
    }
}
