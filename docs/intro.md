---
sidebar_position: 1
---

# Environment Setup

## IntelliJ Installation

[Download IntelliJ](https://www.jetbrains.com/idea/download/?section=mac)

## IntelliJ Setup

- For your Java Spring projects, always include `spring-boot-devtools` in your dependencies.
  - **spring-boot-devtools** automatically restarts the app when code is updated
- Go to Preferences/Settings
  - Configure and Sign into GitHub via **Version Control** section.
  - Go to **Build, Execution, Deployment**, then **Compiler**.
    - Checkmark **Build project automatically**.
  - Go to **Advanced Settings**:
    - Checkbox: **Allow auto-make to start even if developed application is currently running**.

## IntelliJ JDKs

- Remember to install latest or most stable JDKs.
  - [Download Oracle JDKs](https://www.oracle.com/java/technologies/downloads/#java21)

## IntelliJ Starters

- Go to **View** > **Tool Windows** > **Maven Projects** > **Dependencies**

## MySQL Installation

- [Install MySQL Database Server](https://dev.mysql.com/downloads/mysql/)
- [Install MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

- Add dependencies to Java Spring application:
  - **MySQL Driver**: `mysql-connector-j`
  - **Spring Data JPA**: `spring-boot-starter-data-jpa`
  - DB connection info from **application.properties** file
  - e.g. **application.properties** file:s
  ```
  spring.datasource.url=jdbc:mysql://localhost:3306/student_tracker
  spring.datasource.username=springstudent
  spring.datasource.password=springstudent
  ```
