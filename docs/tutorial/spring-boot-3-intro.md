---
sidebar_position: 1
---

# Spring Boot 3 Intro

## Create a REST Controller

```js
@RestController
public class FunRestController {
    // expose "/" that returns "Hello World"
    @GetMapping("/")
    public String sayHello() {
        return "Hello World!";
    }
}
```

## Application Properties

- You could add custom data to **application.properties**

```
# configure server port
server.port=8484

# configure my props
coach.name=Mickey Mouse
team.name=The Mouse Crew
```

- The custom data can be used be the controller:

```js
@RestController
public class FunRestController {
    @Value("${coach.name}")
    private String coachName;

    @Value("${team.name}")
    private String teamName;
}
```
