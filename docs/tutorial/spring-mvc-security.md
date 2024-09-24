---
sidebar_position: 8
---

# Spring MVC Security

- [spring-security-reference-manual](http://www.luv2code.com/spring-security-reference-manual)

## Declarative Security

- Define application’s security constraints in configuration 
    - All Java config: @Configuration
- Provides separation of concerns between application code and security

## Programmatic Security
    - Spring Security provides an API for custom application coding
    - Provides greater customization for specific app requirements

## Spring MVC Security Project Setup

### Development Process

1. Create project at Spring Initializr website
    - Add Maven dependencies for Spring MVC Web App, Security, Thymeleaf
```js
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId> 
    </dependency>

    <dependency>
        <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-thymeleaf</artifactId>
    </dependency>

    <dependency> 
        <groupId>org.springframework.boot</groupId> <artifactId>spring-boot-starter-security</artifactId>
    </dependency>

    <dependency>
        <groupId>org.thymeleaf.extras</groupId> <artifactId>thymeleaf-extras-springsecurity6</artifactId>
    </dependency>
```

2. Develop our Spring controller
```js
@Controller
public class DemoController {
    @GetMapping("/")
    public String showHome() {
        // this home corresponds to home.html
        return "home"; 
    }
}
```

3. Develop our Thymeleaf view page
**src/main/resources/templates/home.html**

```html
<html> 
    <body>
        Welcome to the luv2code company home page!
    </body>
</html>
```

## Configuring Basic Security

- Look at rest-api-security

## Spring Security - Custom Login Form

1. Modify Spring Security Configuration to reference custom login form

**DemoSecurityConfig.java**

```js
//Configure security of web paths in application, login, logout etc

@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(configurer ->
                    // Any request to the app must be authenticated
                    configurer
                            .anyRequest().authenticated()
            )
            .formLogin(form ->
                form
                    .loginPage("/showMyLoginPage")
                    .loginProcessingUrl("/authenticateTheUser")
                    .permitAll()
            );
            
    return http.build();
}

```

2. Develop a Controller to show the custom login form
3. Create custom login form
    - HTML (CSS optional)