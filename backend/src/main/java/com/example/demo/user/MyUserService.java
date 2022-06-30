package com.example.demo.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class MyUserService {

    private final MyUserRepo myUserRepo;
    private final PasswordEncoder encoder;

    public MyUser createUser(MyUser newUser){
        String hashedPW = encoder.encode(newUser.getPassword());
        newUser.setPassword(hashedPW);

        return myUserRepo.save(newUser);
    }

}
