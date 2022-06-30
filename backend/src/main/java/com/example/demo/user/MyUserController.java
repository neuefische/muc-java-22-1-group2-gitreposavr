package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class MyUserController {

    private final MyUserService myUserService;
    @PostMapping()
    public void createNewUser(@RequestBody MyUser newUser){
        myUserService.createUser(newUser);
    }


}
