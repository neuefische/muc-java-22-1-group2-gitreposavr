package com.example.demo;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

import lombok.RequiredArgsConstructor;
import org.apache.tomcat.jni.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor

public class GitSavrController {
    private final GitSavrService gitSavrService;

    @GetMapping("/users")
    List<User> getUserList (){
        return null;
    }
}