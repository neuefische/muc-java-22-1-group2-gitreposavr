package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class User {
    
    String login;
    long id;
    @JsonProperty("repos_url")
    String reposUrl;

}