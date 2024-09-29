---
sidebar_position: 8
---

# Spring MVC Security

- [spring-security-reference-manual](https://docs.spring.io/spring-security/reference/)

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
                //customizing the form login process
                form
                    .loginPage("/showMyLoginPage")
                    .loginProcessingUrl("/authenticateTheUser")
                    .permitAll()
            );

    return http.build();
}

```

:::note

- `http.authorizeHttpRequests` restrict access based on the HTTP request
- `.loginPage("/showMyLoginPage")` will show the custom form at the request mapping "/showMyLoginPage"
  - This will be linked up with the Controller in step 2.
- `.loginProcessingUrl("/authenticateTheUser")` Login form should POST data to this URL for processing (check user id and password). Also, no Controller Request Mapping required to be defined. This is done automatically here.
- `.permitAll()` allows everyone to see the login page, no need to be logged in.

:::

2. Develop a Controller to show the custom login form

**LoginController.java**

```js
@Controller
public class LoginController {
    @GetMapping("/showMyLoginPage")
    public String showMyLoginPage() {
        //thymeleaf UI
        return "plain-login";
    }
}
```

3. Create custom login form
   - HTML (CSS optional)
   - Send data to login processing URL: `/authenticateTheUser`
   - Login processing URL will be handled by Spring Security Filters

:::note

- Spring Security defines default names for login form fields
  - User name field: **username**
  - Password field: **password**

:::

```html
<form action="#" th:action="@{/authenticateTheUser}" method="POST">
  <p>User name: <input type="text" name="username" /></p>
  <p>Password: <input type="password" name="password" /></p>
  <input type="submit" value="Login" />
</form>
```

### Context Root / Context Path (Best Practice)

- Context Path = Context Root

  - The root path for your web app

- `th:action=@{...}` will give access to context path dynamically
  - Helps to keep links relative to application context path
  - If you change context path of app, then links will still work
  - Better than hard-coding the context path

## Spring Security - Show Login Error

- When login fails, by default Spring Security will
  - Send user back to your login page
  - Append an error parameter: **?error**

**Development Process**:

1. Modify custom login form
   - Check the error parameter
   - If error parameter exists, show an error message

```html
<form>
  ...

  <!-- http://localhost:8080/myapp/showMyLoginPage?error -->
  <div th:if="${param.error}">
    <i>Sorry! You entered invalid username/password.</i>
  </div>

  <p>User name: <input type="text" name="username" /></p>

  <p>Password: <input type="password" name="password" /></p>
</form>
```

## Spring Security - Bootstrap Login Page

**Development Process**

1. Modify form to point to our login processing URL
2. Verify form fields for username and password
3. Change our controller to use our new Bootstrap login form

## Spring Security - Logout

When a logout is processed, by default Spring Security will

- Invalidate user’s HTTP session and remove session cookies, etc
- Send user back to your login page
- Append a logout parameter: **?logout**

**Development Process**

1. Add logout support to Spring Security Configuration

**DemoSecurityConfig.java**

```js
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(configurer ->
                    configurer
                            .anyRequest().authenticated()
            )
            .formLogin(form ->
                    form
                            .loginPage("/showMyLoginPage")
                            .loginProcessingUrl("/authenticateTheUser")
                            .permitAll()
            )
   .logout(logout -> logout.permitAll()
   );
    return http.build();
}
```

:::note

- `   .logout(logout -> logout.permitAll());` will add logout support for default URL "/logout"

:::

2. Add logout button to home page

   - Send data to default logout URL: **/logout**
   - Logout URL will be handled by Spring Security Filters
   - Must use POST method

```html
<form action="#" th:action="@{/logout}" method="POST">
  <input type="submit" value="Logout" />
</form>
```

:::warning
Must use POST request for logout
:::

3. Update login form to display “logged out” message

- Check the logout parameter
- If logout parameter exists, show "logged out" message

**plain-login.html**

```html
...
<form ... th:action="..." method="...">
  <!-- http://localhost:8080/showMyLoginPage?logout -->
  <div th:if="${param.logout}">
    <i>You have been logged out.</i>
  </div>
  User name: <input type="text" name="username" />

  Password: <input type="password" name="password" />
</form>
...
```

## Display User ID and Roles

**Development Process**

1. Display User ID
2. Display User Roles

**home.html**

```html
<body>
  ...

  <!-- display user id -->
  <p>User: <span sec:authentication="principal.username"></span>;</p>

  <!-- display user roles -->
  <p>Role(s): <span sec:authentication="principal.authorities"></span></p>
</body>
```

:::note
`Role(s): <span sec:authentication="principal.authorities"></span>` will output with a `"ROLE_"` prefix

i.g. `[ROLE_EMPLOYEE]`
:::

## Restrict Access Based on Roles

**Development Process**:

1. Create supporting controller code and view pages

**home.html**

```html
<body>
  <!-- Add a link to point to /leaders ... this is for the managers -->
  <p>
    <a th:href="@{/leaders}">Leadership Meeting</a>
  </p>

  <!-- Add a link to point to /systems ... this is only for the admins -->
  <p>
    <a th:href="@{/systems}">IT System Meeting</a>
  </p>
</body>
```

**DemoController.java**

```js
public class DemoController{
  ...

  // add a request mapping for /leaders
  @GetMapping("/leaders")
  public String showLeaders(){
    //render thymeleaf UI
    return "leaders";
  }

  // add a request mapping for /systems
  @GetMapping("/systems")
  public String showSystems(){
    //render thymeleaf UI
    return "systems";
  }
}
```

**leaders.html**

```html
<h2>Leaders Home Page</h2>
<p>Put whatever Leaders info here</p>

<a th:href="@{/}">Back to Home Page</a>
```

**systems.html**

```html
<h2>Systems Home Page</h2>
<p>Put whatever Systems info here</p>

<a th:href="@{/}">Back to Home Page</a>
```

2. Restrict Access based on Roles

- Update your Spring Security Java configuration file (.java)

`requestMatchers(<< add path to match on >>).hasAnyRole(<< list of authorized roles >>)`

- `list of authorized roles`:
  - "ADMIN"
  - "DEVELOPER"
  - "VIP"
  - "PLATINUM"

### Restrict Path to EMPLOYEE

```js
requestMatchers("/").hasRole("EMPLOYEE");
```

- `requestMatchers("/")` matches on root path: "/"

### Restrict Path /leaders to MANAGER

```js
requestMatchers("/leaders/**").hasRole("MANAGER");
```

- This one matches on path: "/leaders" and all sub-directories (\*\*)

### Altogether Example

```js
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(configurer ->
                    configurer
                            .requestMatchers("/").hasRole("EMPLOYEE")
                            .requestMatchers("/leaders/**").hasRole("MANAGER")
                            .requestMatchers("/systems/**").hasRole("ADMIN")
                            .anyRequest().authenticated()
            )
...
}
```

## Custom Access Denied Page

**Development Process**

1. Configure custom page for access denied

**DemoSecurityConfig.java**

```js
@Bean
public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http.authorizeHttpRequests(configurer ->
                    configurer
                            .requestMatchers(“/").hasRole("EMPLOYEE")
                            ...
           )
            .exceptionHandling(configurer ->
                configurer
                    .accessDeniedPage("/access-denied")
   );
  ...
}
```

2. Create supporting controller code and view page

**LoginController.java**

```js
@Controller
public class LoginController {
  ...

  //add request mapping for /access_denied
  @GetMapping("/access-denied")
  public String showAccessDenied(){
    return "access-denied";
  }
}
```

**access-denied.html**

```html
<body>
  <h2>Access Denied - You can write any unauthorized access comment here</h2>

  <a th:href="@{/}">Back to Home Page</a>
</body>
```

## Display Content Based on Roles

- Example: Only show this section for users with MANAGER role and ADMIN ROLE

```html
...

<div sec:authorize="hasRole('MANAGER')">
  <p>
    <a th:href="@{/leaders}"> Leadership Meeting </a>
  </p>
</div>

<div sec:authorize="hasRole('ADMIN')">
  <p>
    <a th:href="@{/systems}"> IT Systems Meeting </a>
  </p>
</div>
```

## Spring Security User Accounts Stored in Database

- Spring Security can read user account info from database
- Have to follow Spring Security’s predefined table schemas
  - Can also customize the table schemas
  - Useful if you have custom tables specific to your project / custom
  - You will be responsible for developing the code to access the data
    - JDBC, JPA/Hibernate

**Development Process**

1. Develop SQL Script to set up database tables

```
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `enabled` tinyint NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `authorities` (
  `username` varchar(50) NOT NULL,
  `authority` varchar(50) NOT NULL,
  UNIQUE KEY `authorities_idx_1` (`username`,`authority`),
  CONSTRAINT `authorities_ibfk_1`
  FOREIGN KEY (`username`)
  REFERENCES `users` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

<!-- 'authorities' is the same as 'roles' -->
<!-- Internally Spring Security uses “ROLE_” prefix -->
INSERT INTO `authorities`
VALUES
('john','ROLE_EMPLOYEE'),
('mary','ROLE_EMPLOYEE'),
('mary','ROLE_MANAGER'),
('susan','ROLE_EMPLOYEE'),
('susan','ROLE_MANAGER'),
('susan','ROLE_ADMIN');
```

2. Add database support to Maven POM file

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>

<!-- MySQL -->
<dependency>
  <groupId>com.mysql</groupId>
  <artifactId>mysql-connector-j</artifactId>
  <scope>runtime</scope>
</dependency>
```

3. Create JDBC properties file

**application.properties**

```
#
# JDBC connection properties
#
spring.datasource.url=jdbc:mysql://localhost:3306/employee_directory
spring.datasource.username=springstudent
spring.datasource.password=springstudent


#
# Log JDBC SQL statements
#
# Only use this for dev/testing
# Do not use for production since it will log user names
logging.level.org.springframework.jdbc.core=TRACE
```

4. Update Spring Security Configuration to use JDBC

```js
@Configuration
public class DemoSecurityConfig {
    //Inject data source, Auto-configured by Spring Boot
    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {
      //Tell Spring Security to use JDBC authentication with our data source
      return new JdbcUserDetailsManager(dataSource);
    }
    ...
}
```

## Spring Security Password Encryption

- use bcrypt as described in REST API Security.

**Development Process**

1. Run SQL Script that contains encrypted passwords

```
INSERT INTO `users`
VALUES
(‘john','{bcrypt}$2a$10$qeS0HEh7urweMojsnwNAR.vcXJeXR1UcMRZ2WcGQl9YeuspUdgF.q',1),
('mary','{bcrypt}$2a$04$eFytJDGtjbThXa80FyOOBuFdK2IwjyWefYkMpiBEFlpBwDH.5PM0K',1),
('susan','{bcrypt}$2a$04$eFytJDGtjbThXa80FyOOBuFdK2IwjyWefYkMpiBEFlpBwDH.5PM0K',1);
```

- Modify DDL for password field, length should be 68

```
CREATE TABLE `users` (
  `username` varchar(50) NOT NULL,
  `password` char(68) NOT NULL,
  `enabled` tinyint NOT NULL,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

:::note
The password from db is NEVER decrypted

Because bcrypt is a one-way encryption algorithm
:::

## Spring Security Custom Tables

- Tell Spring how to query your custom tables
- Provide query to find user by user name
- Provide query to find authorities / roles by user name

**Development Process**

1. Create our custom tables with SQL

```
CREATE TABLE `members` (
  `user_id` varchar(50) NOT NULL,
  `pw` char(68) NOT NULL,
  `active` tinyint NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `roles` (
  `user_id` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  UNIQUE KEY `authorities5_idx_1` (`user_id`, `role`),
  CONSTRAINT `authorities5_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `members` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

2. Update Spring Security Configuration
   - Provide query to find user by user name
   - Provide query to find authorities / roles by user name

```js
@Configuration
public class DemoSecurityConfig {
    @Bean
    public UserDetailsManager userDetailsManager(DataSource dataSource) {
        JdbcUserDetailsManager theUserDetailsManager = new JdbcUserDetailsManager(dataSource);
        theUserDetailsManager
           .setUsersByUsernameQuery("select user_id, pw, active from members where user_id=?");

        theUserDetailsManager
           .setAuthoritiesByUsernameQuery("select user_id, role from roles where user_id=?");
        return theUserDetailsManager;
    }
 ...
}
```

:::note
Question mark “?”

Parameter value will be the user name from login
:::
