package com.example.demo;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GitSavrService {

    public User getUsers(String username) {
        RestTemplate restTemplate = new RestTemplate();
        return Arrays.stream(restTemplate.getForObject(url, responseType, uriVariables)) 
    }
}
