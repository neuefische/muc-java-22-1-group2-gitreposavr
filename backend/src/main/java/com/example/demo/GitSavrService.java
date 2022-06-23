package com.example.demo;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GitSavrService {

    public User getUser(String username) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://api.github.com/users/" + username, User.class);
    }
}
