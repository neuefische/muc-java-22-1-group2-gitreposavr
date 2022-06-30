package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MyUserService {

    private final MyUserRepo myUserRepo;

    public MyUser createUser(MyUser newUser){
        return myUserRepo.save(newUser);
    }

}
