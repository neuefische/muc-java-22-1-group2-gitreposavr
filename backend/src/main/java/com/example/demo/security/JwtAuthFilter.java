package com.example.demo.security;

import java.io.IOException;
import java.util.List;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import io.jsonwebtoken.Claims;

@Component
public class JwtAuthFilter extends OncePerRequestFilter {

    private final JWTService jwtService;

    public JwtAuthFilter(JWTService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        String token = getToken(request);
        if (token != null && !token.isBlank()) {
            try {
                Claims claims =  jwtService.extractAllClaims(token);
                setSecurityContext(claims);

            } catch (Exception e) {
                response.setStatus(401);
            }
        }
        filterChain.doFilter(request, response);
    }

    private String getToken(HttpServletRequest request) {
        String authorization = request.getHeader("Authorization");
        if (authorization != null) {
            return authorization.replace("Bearer", "").trim();
        }
        return null;
    }

    private void setSecurityContext(Claims claims) {
        List<SimpleGrantedAuthority> grantedAuthorities = claims.get("roles") == null ? List.of() :
                ((List<String>) claims.get("roles")).stream().map(au -> new SimpleGrantedAuthority("ROLE_" + au)).toList();
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(claims.getSubject(), "", List.of());
        SecurityContextHolder.getContext().setAuthentication(token);
    }
}