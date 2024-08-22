---
sidebar_position: 5
---

# Spring MVC

## Spring Boot - Spring MVC Form Data Binding - Text Fields

https://github.com/darbyluv2code/spring-boot-3-spring-6-hibernate-for-beginners/tree/main/06-spring-boot-spring-mvc/07-form-data-binding-textfields

- **Data Binding**: automatically setting / retrieving data from a Java object / bean.
- Showing a Form
  - Within the Spring Controller,
    - there must be a _model attribute_ which is a bean that will hold form data for the data binding.
- Development Process Example:
  1. Create Student Class
  2. Create Student controller class
  3. Create HTML Form
  4. Create form processing code
  5. Create confirmation page

### Show Form - Add Model Attribute

```js
@GetMapping("/showStudentForm")
public String showForm(Model theModel) {
    theModel.addAttribute("student", new Student());
    return "student-form";
}
```

### Setting up HTML Form - Data Binding

```js
<form th:action="@{/processStudentForm}" th:object="${student}" method="POST">
    First name: <input type="text" th:field="*{firstName}" />

    <br><br>

    Last name: <input type="text" th:field="*{lastName}" />

    <br><br>

    <input type="submit" value="Submit" />
</form>
```

- Refer to [Show Form - Add Model Attribute](/docs/tutorial/spring-mvc#show-form---add-model-attribute) code snippet as well.
- `th:object="${student}"` is the name of the model attribute.
  - Recall the name of the model attribute is defined as student: `theModel.addAttribute("student", new Student());`
- `*{...}` is shortcut syntax in thymeleaf. Examples:
  - `*{firstName}` means `${student.firstName}`
    - When the form is loaded, Spring MVC will read from the model: `student.getFirstName()`
    - When form is submitted, Spring MVC will create a new Student instance and add to the model: `student.setFirstName(…)`
  - `*{lastName}` means `${student.lastName}`
    - When the form is loaded, Spring MVC will read from the model: `student.getLastName()`
    - When form is submitted, Spring MVC will create a new Student instance and add to the model: `student.setLastName(…)`

### Handling Form Submission in the Controller

```js
@PostMapping("/processStudentForm")
public String processForm(@ModelAttribute("student") Student theStudent) {
    // log the input data
    System.out.println("theStudent: " + theStudent.getFirstName()
        + " " + theStudent.getLastName());
    return "student-confirmation";
}
```

```js
<html>
  <body>
    The student is confirmed:{" "}
    <span th:text="${student.firstName} + ' ' + ${student.lastName}" />
  </body>
</html>
```

- `${student.firstName}` calls `student.getFirstName()`
- `${student.lastName}` calls `student.getLastName()`

## Spring Boot - Spring MVC Form - Drop Down List
