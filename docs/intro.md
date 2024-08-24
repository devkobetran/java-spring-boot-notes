---
sidebar_position: 1
---

# Environment Setup

## IntelliJ Installation

[Download IntelliJ](https://www.jetbrains.com/idea/download/?section=mac)

## IntelliJ Setup

- For your Java Spring projects, always include **spring-boot-devtools** in your dependencies.
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
