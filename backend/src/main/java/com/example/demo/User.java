package com.example.demo;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

@Data
public class User {

    @JsonProperty("login")
    String userName;
    long id;
    @JsonProperty("repos_url")
    String reposUrl;

    public User(String userName) {
        this.userName = userName;
    }
}