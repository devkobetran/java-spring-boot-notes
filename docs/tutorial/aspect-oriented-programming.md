---
sidebar_position: 10
---

# AOP: Aspect-Oriented Programming

## DAO - Add Logging Code and Security Code

```js
public void addAccount(Account theAccount, String userId) {

    entityManager.persist(theAccount);
}
```

## Two Main Issues

- **Code Tangling**:
  - For a given method: `addAccount(...)`
  - We have logging and security code tangled in
- **Code Scattering**:
  - If we need to change logging or security code
  - We have to update ALL classes

## Solution: Aspect-Oriented Programming

- Programming technique based on concept of an Aspect
- Aspect encapsulates cross-cutting logic
  - Cross-Cutting Concerns
- "Concern" means logic / functionality
- Aspects can be reused at multiple locations
- Apply the Proxy design pattern

### Benefits of AOP

- Code for Aspect is defined in a single class
  - Much better than being scattered everywhere
  - Promotes code reuse and easier to change
- Business code in your application is cleaner
  - Only applies to business functionality: addAccount
  - Reduces code complexity
- Configurable
  - Based on configuration, apply Aspects selectively to different parts of app
  - No need to make changes to main application code ... very important!

### Additional AOP Use Cases

- Most common
  - logging, security, transactions
- Audit logging
  - who, what, when, where
- Exception handling
  - log exception and notify DevOps team via SMS/email
- API Management
  - how many times has a method been called user
  - analytics: what are peak times? what is average load? who is top user?

### AOP: Advantages and Disadvantages

- Advantages:
  - Reusable modules
  - Resolve code tangling
  - Resolve code scatter
  - Applied selectively based on configuration
- Disadvantages
  - Too many aspects and app flow is hard to follow
  - Minor performance cost for aspect execution (run-time weaving)

## Spring AOP Support

- **Aspect**: module of code for a cross-cutting concern (logging, security, …)
- **Advice**: What action is taken and when it should be applied
- **Join Point**: When to apply code during program execution
- **Pointcut**: A predicate expression for where advice should be applied

### Advice Types

- **Before advice**: run before the method
- **After finally advice**: run after the method (finally)
- **After returning advice**: run after the method (success execution)
- **After throwing advice**: run after method (if exception thrown)
- **Around advice**: run before and after method

## Weaving

- Connecting aspects to target objects to create an advised object
- Different types of weaving
  - Compile-time, load-time or run-time
- Regarding performance: run-time weaving is the slowest

## AOP Frameworks

- Spring AOP
  - Advantages:
    - Simpler to use than AspectJ
    - Uses Proxy Pattern
    - Can migrate to AspectJ when using `@Aspect` annotation
  - Disadvantages:
    - Only supports method-level join points
    - Can only apply aspects to beans created by Spring app context
    - Minor performance cost for aspect execution (run-time weaving)
- AspectJ
  - Advantages:
    - Support all join points
    - Works with any POJO, not just beans from app context
    - Faster performance compared to Spring AOP
    - Complete AOP support
  - Disadvantages:
    - Compile-time weaving requires extra compilation step
    - AspectJ pointcut syntax can become complex

## @Before Advice

- Use Cases:
  - Most common
    - logging, security, transactions
  - Audit logging
    - who, what, when, where
  - API Management
    - how many times has a method been called user
    - analytics: what are peak times? what is average load? who is top user?

### Advice Types

**Before advice**: run before the method
**After returning advice**: run after the method (success execution)
**After throwing advice**: run after method (if exception thrown)
**After finally advice**: run after the method (finally)
**Around advice**: run before and after method

### Spring Boot AOP Starter

```
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

**Development Process**:

1. Create target object: AccountDAO

```js
public interface AccountDAO {
void addAccount() {
}
```

```js
@Component
public class AccountDAOImpl implements AccountDAO {
  public void addAccount() {
    System.out.println("DOING MY DB WORK: ADDING AN ACCOUNT");
  }
}
```

2. Create main app

```js
@SpringBootApplication
public class AopdemoApplication {
  public static void main(String[] args) {
    SpringApplication.run(AopdemoApplication.class, args);
  }

  @Bean
  public CommandLineRunner commandLineRunner(AccountDAO theAccountDAO) {
    return runner -> {
      demoTheBeforeAdvice(theAccountDAO);
    };
  }

  private void demoTheBeforeAdvice(AccountDAO theAccountDAO) {
    // call the business method
    theAccountDAO.addAccount();
  }
}
```

3. Create an Aspect with @Before advice

```js
@Aspect
@Component
public class MyDemoLoggingAspect {
  @Before("execution(public void addAccount())")
  public void beforeAddAccountAdvice() {
    System.out.println("Executing @Before advice on addAccount()");
  }
}
```

### Best Practices: Aspect and Advices

- Keep the code small
- Keep the code fast
- Do not perform any expensive / slow operations
- Get in and out as QUICKLY as possible

## AOP - Pointcut Expressions

- **Pointcut**: A predicate expression for where advice should be applied
- Spring AOP uses AspectJ’s pointcut expression language
- We will start with execution pointcuts
  - Applies to execution of methods

### Pointcut Expression Language

```js
execution(modifiers-pattern? return-type-pattern declaring-type-pattern?
  method-name-pattern(param-pattern) throws-pattern?)
```

:::note
The pattern is optional if it has `?`
:::

### Pointcut Expression Examples

- Match on method names

  - Match only `addAccount()` method in `AccountDAO` class

  ```js
  @Before("execution(public void com.luv2code.aopdemo.dao.AccountDAO.addAccount())")
  ```

  - Match any addAccount() method in any class

  ```js
  @Before("execution(public void addAccount())")
  ```

- Match on method names (using wildcards)

  - Match methods starting with add in any class

  ```js
  @Before("execution(public void add*())”)
  ```

  - Match methods starting with processCreditCard in any class

  ```js
  @Before("execution(public VerificationResult processCreditCard*())”)
  ```

- Use wildcards on return type

  ```js
  @Before(“execution(public * processCreditCard*())”)
  ```

  :::note

  - the `*` in `public *` is the return type

  :::

- Modifier is optional, so you don’t have to list it

  ```js
  @Before(“execution(* processCreditCard*())”)
  ```

  :::note

  - no need for `public`
  - the `*` is the return type
  - `processCreditCard*()` is the method in any class

  :::

## Match on Parameters

### Parameter Pattern Wildcards

- For param-pattern
  - `()` - matches a method with no arguments
  - `(*)` - matches a method with one argument of any type
  - `(..)` - matches a method with 0 or more arguments of any type

### Pointcut Expression Examples

- Match on method parameters

  - Match addAccount methods with no arguments

  ```js
  @Before("execution(* addAccount())")
  ```

  - Match addAccount methods that have Account param

  ```js
  @Before("execution(* addAccount(com.luv2code.aopdemo.Account))")
  ```

- Match on method parameters (using wildcards)

  - Match addAccount methods with any number of arguments

  ```js
  @Before("execution(* addAccount(..))”)
  ```

  :::note

  - `*` is the return type
  - `addAccount` is the method
  - `(..)` is the param type

  :::

### Match on Package

- Match on methods in a package

  - Match any method in our DAO package: `com.luv2code.aopdemo.dao`

  ```js
  @Before("execution(* com.luv2code.aopdemo.dao.*.*(..))")
  ```

  :::note

  - `*` is return type
  - `com.luv2code.aopdemo.dao` is package
  - `.*.*`, first star is class and second star is method
  - `(..)` is param type

  :::

  :::warning

  - When using wildcards with AOP, caution should be taken.
  - If new frameworks are added to your project, then you may encounter conflicts.
    - Receive errors in IntelliJ
      :::

  :::tip

  - Recommendation is to:
    - narrow your pointcut expressions
    - limit them to your project package

  :::

- Going back to the match any method in our DAO package: `com.luv2code.aopdemo.dao` example:

  - Our pointcut expression is too broad.
  - Resolve this by:

    - narrowing the pointcut expression
    - only match within our project package

    ```js
    @Before("execution(* com.luv2code..add*(..))")
    ```

    :::note
    `com.luv2code` is a narrow pointcut expression
    :::

## Pointcut Declarations

### Problem

- How can we reuse a pointcut expression?
  - Want to apply to multiple advices

### Solution

**Development Process**:

1. Create a pointcut declaration once
2. Apply pointcut declaration to advice(s)

```js
@Aspect
@Component
public class MyDemoLoggingAspect {
  // Create Pointcut Declaration
  @Pointcut("execution(* com.luv2code.aopdemo.dao.*.*(..))")
  private void forDaoPackage() {}

  // Apply to Multiple Advices
  @Before("forDaoPackage()")
  public void beforeAddAccountAdvice() {
    ...
  }
  @Before("forDaoPackage()")
  public void performApiAnalytics() {
    ...
  }
}
```

:::note

**Benefits of Pointcut Declarations**

- Easily reuse pointcut expressions
- Update pointcut in one location
- Can also share and combine pointcut expressions (coming up later)

:::

## Combine Pointcuts

### Problem

- How to apply multiple pointcut expressions to single advice?
- Execute an advice only if certain conditions are met
- For example
  - All methods in a package EXCEPT getter/setter methods

### Combining Pointcut Expressions

- Combine pointcut expressions using logic operators
  - AND (&&)
  - OR (||)
  - NOT (!)
- Works like an “if” statement
- Execution happens only if it evaluates to true

```
@Before(“expressionOne() && expressionTwo()”)
@Before(“expressionOne() || expressionTwo()”)
@Before(“expressionOne() && !expressionTwo()”)
```

e.g.

- All methods in a package EXCEPT getter/setter methods

**Development Process**:

1. Create a pointcut declarations

```js
@Pointcut("execution(* com.luv2code.aopdemo.dao.*.*(..))")
private void forDaoPackage() {}

// create pointcut for getter methods
@Pointcut("execution(* com.luv2code.aopdemo.dao.*.get*(..))")
private void getter() {}

// create pointcut for setter methods
@Pointcut("execution(* com.luv2code.aopdemo.dao.*.set*(..))")
private void setter() {}
```

2. Combine pointcut declarations

```js
// combine pointcut: include package ... exclude getter/setter
@Pointcut("forDaoPackage() && !(getter() || setter())")
private void forDaoPackageNoGetterSetter() {}
```

3. Apply pointcut declaration to advice(s)

```js
...
// combine pointcut: include package ... exclude getter/setter
@Pointcut("forDaoPackage() && !(getter() || setter())")
private void forDaoPackageNoGetterSetter() {}

@Before("forDaoPackageNoGetterSetter()")
public void beforeAddAccountAdvice() {
...
}
```

## Control Aspect Order

### Problem

- How to control the order of advices being applied?

  - MyLoggingDemoAspect
    - beforeAddAccountAdvice
    - performApiAnalyticsAdvice
    - logToCloudAdvice

### To Control Order

- **Refactor**: Place advices in separate Aspects
- Control order on Aspects using the `@Order` annotation
- Guarantees order of when Aspects are applied

**Development Process**:

1. Refactor: Place advices in separate Aspects

- MyLoggingDemoAspect

  - beforeAddAccountAdvice

- MyApiAnalyticAspect

  - performApiAnalyticsAdvice

- MyCloudLogAspect
  - logToCloudAdvice

2. Add `@Order` annotation to Aspects

e.g. We want the following order:

1. MyCloudLogAspect
2. MyLoggingDemoAspect
3. MyApiAnalyticsAspect

```js
@Aspect
@Component
@Order(1)
public class MyCloudLogAspect {
  ...
}

@Aspect
@Component
@Order(2)
public class MyLoggingDemoAspect {
  ...
}

@Aspect
@Component
@Order(3)
public class MyApiAnalyticsAspect {
  ...
}
```

:::info

- Control order on Aspects using the @Order annotation
- Guarantees order of when Aspects are applied
- Lower numbers have higher precedence

:::

### @Order annotation

- Lower numbers have higher precedence
  - Range: Integer.MIN_VALUE to Integer.MAX_VALUE
  - Negative numbers are allowed
  - Does not have to be consecutive
- What if aspects have the exact same @Order annotation?

  - e.g.

  ```js
  // Will still run AFTER MyCloudLogAspect
  @Order(1)
  public class MyCloudLogAspect {...}

  // The order at this point is undefined
  @Order(6)
  public class MyShowAspect { ... }
  @Order(6)
  public class MyFunnyAspect { ... }

  // Will still run BEFORE MyLoggingDemoAspect
  @Order(123)
  public class MyLoggingDemoAspect { ... }
  ```

## Reading Method Arguments with JoinPoints

### Problem

- When we are in an aspect (ie for logging)
  - How can we access method parameters?

**Development Process**:

1. Access and display Method Signature

```js
@Before("...")
public void beforeAddAccountAdvice(JoinPoint theJoinPoint) {
  // display the method signature
  MethodSignature methodSig = (MethodSignature) theJoinPoint.getSignature();

  System.out.println("Method: " + methodSig);
}
```

2. Access and display Method Arguments

```js
@Before("...")
public void beforeAddAccountAdvice(JoinPoint theJoinPoint) {
  // display method arguments

  // get args
  Object[] args = theJoinPoint.getArgs();

  // loop thru args
  for (Object tempArg : args) {
    System.out.println(tempArg);
  }
}
```

## @AfterReturning Advice

- Use Cases:
- Most common
  - logging, security, transactions
- Audit logging
  - who, what, when, where
- Post-processing Data
  - Post process the data before returning to caller
  - Format the data or enrich the data (really cool but be careful)

### Advice Types

- **Before advice**: run before the method
- **After returning advice**: run after the method (success execution)
- **After throwing advice**: run after method (if exception thrown)
- **After finally advice**: run after the method (finally)
- **Around advice**: run before and after method

### Example

- Create an advice that will run after a method call (success execution)

### @AfterReturning Advice

- This advice will run after the method call (success execution)

```js
@AfterReturning("execution(* com.luv2code.aopdemo.dao.AccountDAO.findAccounts(..))")
public void afterReturningFindAccountsAdvice() {
  System.out.println("Executing @AfterReturning advice");
}
```

### Access the Return Value

```js
@AfterReturning(
  pointcut="execution(* com.luv2code.aopdemo.dao.AccountDAO.findAccounts(..))",
  returning="result")
public void afterReturningFindAccountsAdvice(
  JoinPoint theJoinPoint, List<Account> result) {

  // print out the results of the method call
  System.out.println("\n=====>>> result is: " + result);
}
```

:::tip
Best Practices: Aspect and Advices

- Keep the code small
- Keep the code fast
- Do not perform any expensive / slow operations
- Get in and out as QUICKLY as possible

:::

**Development Process**:

1. Prep Work: Add constructors to Account class
2. Add new method: findAccounts() in AccountDAO
3. Update main app to call the new method: findAccounts()
4. Add @AfterReturning advice

## @AfterReturning Advice - Modify Return Value

- Most common
  - logging, security, transactions
- Audit logging
  - who, what, when, where
- Post-processing Data
  - Post process the data before returning to caller
  - Format the data or enrich the data (really cool but be careful)

### Modify the Return Value

```js
// Calling program will get the modified result
@AfterReturning(
  pointcut="execution(* com.luv2code.aopdemo.dao.AccountDAO.findAccounts(..))",
  returning="result")
public void afterReturningFindAccountsAdvice(JoinPoint theJoinPoint, List<Account> result) {
  // modify “result” list: add, remove, update, etc ...
  if (!result.isEmpty()) {
    Account tempAccount = result.get(0);
    tempAccount.setName("Daffy Duck");
  }
}
```

## @AfterThrowing Advice

- Use Cases
  - Log the exception
  - Perform auditing on the exception
  - Notify DevOps team via email or SMS
  - Encapsulate this functionality in AOP aspect for easy reuse

```js
@AfterThrowing("execution(* com.luv2code.aopdemo.dao.AccountDAO.findAccounts(..))")
public void afterThrowingFindAccountsAdvice() {
  System.out.println("Executing @AfterThrowing advice");
}
```

### Advice Types

- **Before advice**: run before the method
- **After returning advice**: run after the method (success execution)
- **After throwing advice**: run after method (if exception thrown)
- **After finally advice**: run after the method (finally)
- **Around advice**: run before and after method

### Access the Exception

```js
@AfterThrowing(
pointcut="execution(* com.luv2code.aopdemo.dao.AccountDAO.findAccounts(..))",
throwing="theExc")
public void afterThrowingFindAccountsAdvice(JoinPoint theJoinPoint, Throwable theExc) {
  // log the exception
  System.out.println("\n=====>>> The exception is: " + theExc);
}
```

### Exception Propagation

- At this point, we are only intercepting the exception (reading it)
- However, the exception is still propagated to calling program
- If you want to stop the exception propagation
  - then use the `@Around` advice

**Development Process - @AfterThrowing**:

1. In Main App, add a try/catch block for exception handling
2. Modify AccountDAO to simulate throwing an exception
3. Add @AfterThrowing advice

## @After Advice

- Use Cases

  - Log the exception and/or perform auditing
  - Code to run regardless of method outcome
  - Encapsulate this functionality in AOP aspect for easy reuse

- This advice will run after the method (finally … success/failure)

```js
@After("execution(* com.luv2code.aopdemo.dao.AccountDAO.findAccounts(..))")
public void afterFinallyFindAccountsAdvice() {
  System.out.println("Executing @After (finally) advice");
}
```

### Advice Types

**Before advice**: run before the method
**After returning advice**: run after the method (success execution)
**After throwing advice**: run after method (if exception thrown)
**After finally advice**: run after the method (finally)
**Around advice**: run before and after method

:::tip

- The `@After` advice does not have access to the exception
  - If you need exception, then use `@AfterThrowing` advice
- The `@After advice` should be able to run in the case of success or error
  - Your code should not depend on happy path or an exception
  - Logging / auditing is the easiest case here

:::

**Development Process - @After**:

1. Prep work
2. Add @After advice
3. Test for failure/exception case
4. Test for success case

## @Around Advice

- `@Around`: Like a combination of `@Before` and `@After`
  - But gives you more fine-grained control
- Use Cases:
  - Most common: logging, auditing, security
  - Pre-processing and post-processing data
  - Instrumentation / profiling code
    - How long does it take for a section of code to run?
  - Managing exceptions
    - Swallow / handle / stop exceptions

```js
@Around("execution(* com.luv2code.aopdemo.service.*.getFortune(..))")
public Object afterGetFortune(ProceedingJoinPoint theProceedingJoinPoint) throws Throwable {
  // get begin timestamp
  long begin = System.currentTimeMillis();

  // now, let's execute the method
  Object result = theProceedingJoinPoint.proceed();

  // get end timestamp
  long end = System.currentTimeMillis();

  // compute duration and display it
  long duration = end - begin;
  System.out.println("\n=====> Duration: " + duration + " milliseconds");

  return result;
}
```

### Advice Types

- **Before advice**: run before the method
- **After returning advice**: run after the method (success execution)
- **After throwing advice**: run after method (if exception thrown)
- **After finally advice**: run after the method (finally)
- **Around advice**: run before and after method

### ProceedingJoinPoint

- When using `@Around` advice
- You will get a reference to a “proceeding join point”
- This is a handle to the target method
- Your code can use the proceeding join point to execute target method

**Development Process - @Around**:

1. Create TrafficFortuneService
2. Update main app to call TrafficFortuneService
3. Add `@Around` advice

## @Around Advice - Handle Exception

### ProceedingJoinPoint

- For an exception thrown from proceeding join point
  - You can handle / swallow /stop the exception
  - Or you can simply rethrow the exception
- This gives you fine-grained control over how the target method is called

### Handle Exception

```js
@Around("execution(* com.luv2code.aopdemo.service.*.getFortune(..))")
public Object afterGetFortune(ProceedingJoinPoint theProceedingJoinPoint) throws Throwable {
  Object result = null;

  try {
    // let's execute the method
    result = theProceedingJoinPoint.proceed();
  } catch (Exception exc) {
    // log exception
    System.out.println("@Around advice: We have a problem " + exc);

    // handle and give default fortune ... use this approach with caution
    result = "Nothing exciting here. Move along!";
  }

  return result;  
}
```

**Development Process - @Around**:

1. Add trip wire to simulate an exception
2. Modify @Around advice to handle exception

## @Around Advice - Rethrow Exception

```js
@Around("execution(* com.luv2code.aopdemo.service.*.getFortune(..))")
public Object afterGetFortune(ProceedingJoinPoint theProceedingJoinPoint) throws Throwable {
  try {
    // let's execute the method
    Object result = theProceedingJoinPoint.proceed();
    return result;
  }
  catch (Exception exc) {
    // log exception
    System.out.println("@Around advice: We have a problem " + exc);

    // rethrow it
    throw exc;
  }
}
```

### ProceedingJoinPoint

- For an exception thrown from proceeding join point
  - You can handle / swallow /stop the exception
  - Or you can simply rethrow the exception

### JoinPoint vs ProceedingJoinPoint

- Use **JoinPoint** with following advice types:
  - `@Before`
  - `@After`
  - `@AfterReturning`
  - `@AfterThrowing`
- Use **ProceedingJoinPoint** with following advice type
  - `@Around`

## AOP and Spring MVC

- Goal: add AOP Logging support to our Spring MVC CRUD app

**Development Process**:

1. Add Spring Boot AOP Starter to Maven pom file

- Spring Boot will automatically enable support for AOP

```
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-starter-aop</artifactId>
</dependency>
```

2. Create Aspect

- Add logging support
- Setup pointcut declarations
- Add @Before advice
- Add @AfterReturning advice
