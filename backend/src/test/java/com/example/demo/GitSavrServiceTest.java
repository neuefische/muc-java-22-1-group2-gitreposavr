package com.example.demo;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.mock.http.client.MockClientHttpRequest;
import org.springframework.web.client.RestTemplate;

import static org.junit.jupiter.api.Assertions.*;

class GitSavrServiceTest {

    @Test
    void shouldReturnCorrectUserWhenCalled() {
        User user = new User("TestUser");
        RestTemplate restTemplate = Mockito.mock(RestTemplate.class);
        Mockito.when(restTemplate.getForObject("https://api.github.com/users/TestUser", User.class))
                .thenReturn(user);

        GitSavrService gitSavrService = new GitSavrService(restTemplate);

        Assertions.assertThat(gitSavrService.getUser("TestUser")).isEqualTo(user);
    }
}