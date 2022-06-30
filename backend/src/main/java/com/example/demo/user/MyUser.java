package com.example.demo.user;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection= "userCollection")
@NoArgsConstructor
public class MyUser {
    @Id
    String id;
    String username;
    String password;
    long githubId;
}
