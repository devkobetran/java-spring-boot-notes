"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8809],{4980:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var s=r(4848),i=r(8453);const t={sidebar_position:5},o="REST API Security",l={id:"tutorial/rest-api-security",title:"REST API Security",description:"- Spring Security Tutorial",source:"@site/docs/tutorial/rest-api-security.md",sourceDirName:"tutorial",slug:"/tutorial/rest-api-security",permalink:"/java-spring-boot-notes/docs/tutorial/rest-api-security",draft:!1,unlisted:!1,editUrl:"https://github.com/kotran222/java-spring-boot-notes/docs/tutorial/rest-api-security.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"REST CRUD APIs",permalink:"/java-spring-boot-notes/docs/tutorial/rest-crud-apis"},next:{title:"Spring MVC",permalink:"/java-spring-boot-notes/docs/tutorial/spring-mvc"}},c={},a=[{value:"Spring Security with Servlet Filters",id:"spring-security-with-servlet-filters",level:2},{value:"Spring Security Overview",id:"spring-security-overview",level:2},{value:"Spring Security in Action",id:"spring-security-in-action",level:2},{value:"Security Concepts",id:"security-concepts",level:2},{value:"Declarative Security",id:"declarative-security",level:3},{value:"Programmatic Security",id:"programmatic-security",level:3},{value:"Enabling Spring Security",id:"enabling-spring-security",level:2},{value:"Secured Endpoints",id:"secured-endpoints",level:2},{value:"Spring Security Configuration",id:"spring-security-configuration",level:2},{value:"Configuring Basic Security",id:"configuring-basic-security",level:2},{value:"Restrict Access Based on Roles",id:"restrict-access-based-on-roles",level:2},{value:"Cross-Site Request Forgery (CSRF)",id:"cross-site-request-forgery-csrf",level:2},{value:"When to use CSRF Protection?",id:"when-to-use-csrf-protection",level:2},{value:"Spring Security User Accounts Stored in Database",id:"spring-security-user-accounts-stored-in-database",level:2},{value:"Customize Database Access with Spring Security",id:"customize-database-access-with-spring-security",level:3},{value:"Spring Security Password Encryption",id:"spring-security-password-encryption",level:2},{value:"How to Get a Bcrypt password",id:"how-to-get-a-bcrypt-password",level:3},{value:"Modify DDL for Password Field",id:"modify-ddl-for-password-field",level:3},{value:"Development Process",id:"development-process",level:3},{value:"For Security Schema Customization Example",id:"for-security-schema-customization-example",level:2},{value:"Development Process",id:"development-process-1",level:3},{value:"Debugging security",id:"debugging-security",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"rest-api-security",children:"REST API Security"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.spring.io/spring-security/reference/",children:"Spring Security Tutorial"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"spring-security-with-servlet-filters",children:"Spring Security with Servlet Filters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Servlet Filters are used to pre-process / post-process web requests"}),"\n",(0,s.jsx)(n.li,{children:"Servlet Filters can route web requests based on security logic"}),"\n",(0,s.jsx)(n.li,{children:"Spring provides a bulk of security functionality with servlet filters"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"spring-security-overview",children:"Spring Security Overview"}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n\nA[Web Browser] --\x3e B[Spring Security Filters]\n\nB --\x3e C[Protected Web Resource, /my-top-secret-stuff-endpoint]\n\nC --\x3e B\n\nB --\x3e A\n\nB --\x3e D[my app security configuration]\n\nD --\x3e E[users, passwords, & roles]\n\nE --\x3e D\n\nD --\x3e B\n\nstyle A fill:red,color:white;\nstyle B fill:green,color:white;\nstyle C fill:blue,color:white;\nstyle D fill:orange,color:white;\nstyle E fill:grey,color:white;"}),"\n",(0,s.jsx)(n.h2,{id:"spring-security-in-action",children:"Spring Security in Action"}),"\n",(0,s.jsx)(n.mermaid,{value:"flowchart LR\n\nA[Spring Security Filters] --\x3e B{Is Web Resource Protected?}\n\nB --\x3e|No| C[Show Resource]\n\nB --\x3e|Yes| D{Is user authenticated?}\n\nD --\x3e|No| E[Send to Login Form]\n\nE --\x3e F[Show Login Form]\n\nF --\x3e G[Authenticate user id & password]\n\nG --\x3e D\n\nD --\x3e|Yes| H{Is user authorized?}\n\nH --\x3e|No| I[Access Denied]\n\nH --\x3e|Yes| C\n\nstyle A fill:green,color:white;\nstyle C fill:green,color:white;\nstyle I fill:red,color:white;"}),"\n",(0,s.jsx)(n.h2,{id:"security-concepts",children:"Security Concepts"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Authentication"}),": check user id and password with credentials stored in app/db."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Authorization"}),": check to see if user has an authorized role."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"declarative-security",children:"Declarative Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Define application\u2019s security constraints in configuration","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["All Java config: ",(0,s.jsx)(n.code,{children:"@Configuration"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Provides separation of concerns between application code and security"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"programmatic-security",children:"Programmatic Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Spring Security provides an API for custom application coding"}),"\n",(0,s.jsx)(n.li,{children:"Provides greater customization for specific app requirements"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"enabling-spring-security",children:"Enabling Spring Security"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"pom.xml"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-security</artifactId>\n</dependency>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"secured-endpoints",children:"Secured Endpoints"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Once you add the Spring Security dependency, all endpoints will automatically have a login prompt."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Login Prompt"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default user name: ",(0,s.jsx)(n.code,{children:"user"})]}),"\n",(0,s.jsxs)(n.li,{children:["Check console logs in the terminal for password","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"Using generated security password: RANDOMLY_GENERATED_PASSWORD"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"spring-security-configuration",children:"Spring Security Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You can override default user name and generated password"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Example: ",(0,s.jsx)(n.strong,{children:"src/main/resources/application.properties"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"spring.security.user.name=scott\nspring.security.user.password=test123\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuring-basic-security",children:"Configuring Basic Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Spring Security Password Storage","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["format: ",(0,s.jsx)(n.code,{children:"{id}encodedPassword"})]}),"\n",(0,s.jsxs)(n.li,{children:["id can be:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"noop: plain text passwords"}),"\n",(0,s.jsx)(n.li,{children:"bcrypt: BCrypt password hashing"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Development Process"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Create Spring Security Configuration (",(0,s.jsx)(n.code,{children:"@Configuration"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class DemoSecurityConfig {\n    // continue to step 2 to add our security configurations here ...\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Add users, passwords and roles"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DemoSecurityConfig.java"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.security.provisioning.InMemoryUserDetailsManager;\n\n@Configuration\npublic class DemoSecurityConfig {\n\n    @Bean\n    public InMemoryUserDetailsManager userDetailsManager() {\n        UserDetails john = User.builder()\n            .username("john")\n            .password("{noop}test123")\n            .roles("EMPLOYEE")\n            .build();\n\n        UserDetails mary = User.builder()\n            .username("mary")\n            .password("{noop}test123")\n            .roles("EMPLOYEE", "MANAGER")\n            .build();\n\n        UserDetails susan = User.builder()\n            .username("susan")\n            .password("{noop}test123")\n            .roles("EMPLOYEE", "MANAGER", "ADMIN")\n            .build();\n\n        return new InMemoryUserDetailsManager(john, mary, susan);\n    }\n}\n'})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"Once you test your endpoints in Postman, you might receive a 401 Unauthorized request."}),(0,s.jsx)(n.p,{children:"Thus, Navigate to Authorization tab in Postman."}),(0,s.jsxs)(n.p,{children:["Under ",(0,s.jsx)(n.strong,{children:"Type"}),", hover to the select dropdown menu to select ",(0,s.jsx)(n.strong,{children:"Basic Auth"}),"."]}),(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.strong,{children:"Username"})," and ",(0,s.jsx)(n.strong,{children:"Password"}),"."]}),(0,s.jsx)(n.p,{children:"In the example above, use John credentials."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Username: ",(0,s.jsx)(n.code,{children:"john"})]}),"\n",(0,s.jsxs)(n.li,{children:["Password: ",(0,s.jsx)(n.code,{children:"test123"})]}),"\n"]}),(0,s.jsx)(n.p,{children:"Should see status 200 now!"})]}),"\n",(0,s.jsx)(n.h2,{id:"restrict-access-based-on-roles",children:"Restrict Access Based on Roles"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"General Syntax"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'// Restrict access to a given path \u201c/api/employees\u201d\n// .hasRole means a single role\n// authorized role is "ADMIN"\n\nrequestMatchers(<< add path to match on >>)\n    .hasRole(<< authorized role >>)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Specify HTTP method"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"requestMatchers(<< add HTTP METHOD to match on >>, << add path to match on >>)\n    .hasRole(<< authorized roles >>)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"list of roles"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// .hasAnyRole is any role\n// list of authorized roles is a comma-delimited list\n\nrequestMatchers(<< add HTTP METHOD to match on >>, << add path to match on >>)\n    .hasAnyRole(<< list of authorized roles >>)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The ** syntax: match on all sub-paths"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'requestMatchers(HttpMethod.GET, "/api/employees/**").hasRole("EMPLOYEE");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Combined code example:"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"DemoSecurityConfig.java"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n\n    http.authorizeHttpRequests(configurer ->\n        configurer\n            .requestMatchers(HttpMethod.GET, "/api/employees").hasRole("EMPLOYEE")\n            .requestMatchers(HttpMethod.GET, "/api/employees/**").hasRole("EMPLOYEE")\n            .requestMatchers(HttpMethod.POST, "/api/employees").hasRole("MANAGER")\n            .requestMatchers(HttpMethod.PUT, "/api/employees/**").hasRole("MANAGER")\n            .requestMatchers(HttpMethod.DELETE, "/api/employees/**").hasRole("ADMIN"));\n\n    // use HTTP Basic authentication\n    http.httpBasic(Customizer.withDefaults());\n\n    // disable Cross Site Request Forgery (CSRF)\n    // in general, not required for stateless REST APIs that use POST, PUT, DELETE, and/or PATCH\n    http.csrf(csrf -> csrf.disable());\n\n    return http.build();\n}\n\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Test with the credentials generated in the previous section in Postman. Some employees should have access to POST, PUT, DELETE. Some do not. Play around to see what happens when unauthorized users try to do a certain action. This demonstrates authorization access permissions for certain tasks for authenticated users."})}),"\n",(0,s.jsx)(n.h2,{id:"cross-site-request-forgery-csrf",children:"Cross-Site Request Forgery (CSRF)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Spring Security can protect against CSRF attacks"}),"\n",(0,s.jsx)(n.li,{children:"Embed additional authentication data/token into all HTML forms"}),"\n",(0,s.jsx)(n.li,{children:"On subsequent requests, web app will verify token before processing"}),"\n",(0,s.jsx)(n.li,{children:"Primary use case is traditional web applications (HTML forms etc)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"when-to-use-csrf-protection",children:"When to use CSRF Protection?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use CSRF protection for any normal browser web requests"}),"\n",(0,s.jsx)(n.li,{children:"Traditional web apps with HTML forms to add/modify data"}),"\n",(0,s.jsx)(n.li,{children:"If you are building a REST API for non-browser clients, you may want to disable CSRF protection"}),"\n",(0,s.jsx)(n.li,{children:"In general, not required for stateless REST APIs that use POST, PUT, DELETE and/or PATCH"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// disable Cross Site Request Forgery (CSRF)\nhttp.csrf(csrf -> csrf.disable());\n"})}),"\n",(0,s.jsx)(n.h2,{id:"spring-security-user-accounts-stored-in-database",children:"Spring Security User Accounts Stored in Database"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Spring Security can read user account info from database"}),"\n",(0,s.jsx)(n.li,{children:"By default, you have to follow Spring Security\u2019s predefined table schemas"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"customize-database-access-with-spring-security",children:"Customize Database Access with Spring Security"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can also customize the table schemas"}),"\n",(0,s.jsx)(n.li,{children:"Useful if you have custom tables specific to your project / custom"}),"\n",(0,s.jsx)(n.li,{children:"You will be responsible for developing the code to access the data"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Development Process"}),":"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Develop SQL Script to set up database tables"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CREATE TABLE `users` (\n    `username` varchar(50) NOT NULL,\n    `password` varchar(50) NOT NULL,\n    `enabled` tinyint NOT NULL,\n    PRIMARY KEY (`username`)\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"noop"})," is an encoding algorithm id and allows Spring Security to know the passwords are stored as plain text"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"test123"})," is the password"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"INSERT INTO `users`\nVALUES\n('john','{noop}test123',1),\n('mary','{noop}test123',1),\n('susan','{noop}test123',1);\n\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CREATE TABLE `authorities` (\n    `username` varchar(50) NOT NULL,\n    `authority` varchar(50) NOT NULL,\n\n    UNIQUE KEY `authorities_idx_1` (`username`,`authority`),\n\n    CONSTRAINT `authorities_ibfk_1`\n    FOREIGN KEY (`username`)\n    REFERENCES `users` (`username`)\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'"authorities" same as "roles"'}),"\n",(0,s.jsx)(n.li,{children:"Internally Spring Security uses \u201cROLE_\u201d prefix"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"INSERT INTO `authorities`\nVALUES\n('john','ROLE_EMPLOYEE'),\n('mary','ROLE_EMPLOYEE'),\n('mary','ROLE_MANAGER'),\n('susan','ROLE_EMPLOYEE'),\n('susan','ROLE_MANAGER'),\n('susan','ROLE_ADMIN');\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Add database support to Maven POM file"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\x3c!-- MySQL --\x3e\n<dependency>\n    <groupId>com.mysql</groupId>\n    <artifactId>mysql-connector-j</artifactId>\n    <scope>runtime</scope>\n</dependency>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Create JDBC properties file"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"application.properties"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"#\n# JDBC connection properties\n#\nspring.datasource.url=jdbc:mysql://localhost:3306/employee_directory\nspring.datasource.username=springstudent\nspring.datasource.password=springstudent\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Update Spring Security Configuration to use JDBC"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// don't use hard coded user implementation above anymore\n\n@Configuration\npublic class DemoSecurityConfig {\n    //Inject data source. Auto-configured by Spring Boot\n    @Bean\n    public UserDetailsManager userDetailsManager(DataSource dataSource) {\n\n        //Tell Spring Security to use JDBC authentication with our data source\n        return new JdbcUserDetailsManager(dataSource);\n    }\n\n...\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"spring-security-password-encryption",children:"Spring Security Password Encryption"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The best practice is store passwords in an encrypted format"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"{bcrypt}encrypted_password_here"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Spring Security recommends using the popular bcrypt algorithm"}),"\n",(0,s.jsxs)(n.li,{children:["bcrypt","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Performs ",(0,s.jsx)(n.strong,{children:"one-way encrypted hashing"})]}),"\n",(0,s.jsx)(n.li,{children:"Adds a random salt to the password for additional protection"}),"\n",(0,s.jsx)(n.li,{children:"Includes support to defeat brute force attacks"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"how-to-get-a-bcrypt-password",children:"How to Get a Bcrypt password"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"You have a plaintext password and you want to encrypt using bcrypt"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Use a website utility to perform the encryption","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.bcryptcalculator.com/",children:"generate-bcrypt-password"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Write Java code to perform the encryption"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"modify-ddl-for-password-field",children:"Modify DDL for Password Field"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CREATE TABLE `users` (\n    `username` varchar(50) NOT NULL,\n    `password` char(68) NOT NULL,\n    `enabled` tinyint NOT NULL,\n\n    PRIMARY KEY (`username`)\n) ENGINE=InnoDB DEFAULT CHARSET=latin1;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"development-process",children:"Development Process"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Run SQL Script that contains encrypted passwords"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modify DDL for password field, length should be 68"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{bcrypt}"})," - 8 chars"]}),"\n",(0,s.jsx)(n.li,{children:"encodedPassword - 60 chars"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"No need to change Java source code"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"bcrypt"})," is the encoding algorithm id"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The encrypted password is actually fun123"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"INSERT INTO `users`\nVALUES\n(\u2018john','{bcrypt}$2a$10$qeS0HEh7urweMojsnwNAR.vcXJeXR1UcMRZ2WcGQl9YeuspUdgF.q',1),\n('mary','{bcrypt}$2a$04$eFytJDGtjbThXa80FyOOBuFdK2IwjyWefYkMpiBEFlpBwDH.5PM0K',1),\n('susan','{bcrypt}$2a$04$eFytJDGtjbThXa80FyOOBuFdK2IwjyWefYkMpiBEFlpBwDH.5PM0K',1);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"for-security-schema-customization-example",children:"For Security Schema Customization Example"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Tell Spring how to query your custom tables"}),"\n",(0,s.jsx)(n.li,{children:"Provide query to find user by user name"}),"\n",(0,s.jsx)(n.li,{children:"Provide query to find authorities / roles by user name"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"development-process-1",children:"Development Process"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create our custom tables with SQL"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"members class\n\nuser_id VARCHAR(50)\npw CHAR(68)\nactive TINYINT(1)\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"roles class\n\nuser_id VARCHAR(50)\nrole VARCHAR(50)\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Update Spring Security Configuration"}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Provide query to find user by user name"}),"\n",(0,s.jsx)(n.li,{children:"Provide query to find authorities / roles by user name"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'@Configuration\npublic class DemoSecurityConfig {\n    @Bean\n    public UserDetailsManager userDetailsManager(DataSource dataSource) {\n        JdbcUserDetailsManager theUserDetailsManager = new JdbcUserDetailsManager(dataSource);\n\n        // Question mark \u201c?\u201d Parameter value will be the user name from login\n        // How to find users\n        theUserDetailsManager\n        .setUsersByUsernameQuery("select user_id, pw, active from members where user_id=?");\n\n        // Question mark \u201c?\u201d Parameter value will be the user name from login\n        // How to find roles\n        theUserDetailsManager\n        .setAuthoritiesByUsernameQuery("select user_id, role from roles where user_id=?");\n\n        return theUserDetailsManager;\n    }\n    ...\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"debugging-security",children:"Debugging security"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"application.properties"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"logging.level.org.springframework.security=DEBUG\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(6540);const i={},t=s.createContext(i);function o(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);