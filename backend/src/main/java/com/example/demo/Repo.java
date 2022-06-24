package com.example.demo;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Repo {
    
    long id;
    String name;
    String description;
    String html_url;

}
