---
sidebar_position: 3
---

# Unit Testing with Spring Boot & Mockito

- Unit testing with Spring Boot and Mockito, focusing on creating and testing RESTful services.
- Write unit tests for various application layers
- Explore integration testing
- Enhance test assertions using advanced libraries like Hamcrest and AssertJ.

## Spring Boot & Mockito

- **HelloWorldController.java**

```ts
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String helloWorld() {
        return "Hello World";
    }
}

```

### MockMvc Test

```ts
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.http.MediaType;

@ExtendWith(SpringExtension.class)
@WebMvcTest(HelloWorldController.class)
public class HelloWorldControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void helloWorld_basic() throws Exception {
        // call GET "/hello-world" application/json
        MvcResult result = mockMvc.perform(
            get("/hello-world")
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(content().string("Hello World"))
            .andReturn();

        // Verification
        assertEquals("Hello World", result.getResponse().getContentAsString());
    }
}

```

- `.andExpect` are response matchers to check status and content

## Creating a Basic REST Service in Item Controller

- **Item.java**:

```ts
public class Item {

    private int id;
    private String name;
    private int price;
    private int quantity;

    public Item(int id, String name, int price, int quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    ...

    //getter methods

    //toString method
}
```

- **ItemController.java**:

```ts
@RestController
public class ItemController {
    @GetMapping("/dummy-item")
    public Item helloWorld() {
        return new Item(1, "Ball", 10, 100)
    }
}
```

- **ItemControllerTest.java**:

```ts
@ExtendWith(SpringExtension.class)
@WebMvcTest(ItemController.class)
public class ItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void dummyItem_basic() throws Exception {

        MvcResult result = mockMvc.perform(
            get("/dummy-item")
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(content().json("{\"id\": 1,\"name\":\"Ball\",\"price\":10,\"quantity\":100}"))
            .andReturn();

        // Verification
        assertEquals("Hello World", result.getResponse().getContentAsString());
    }
}
```

## JSONassert

- **JsonAssertTest.java**:

```ts
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;
import org.skyscreamer.jsonassert.JSONAssert;
import org.skyscreamer.jsonassert.JSONCompareMode;

public class JsonAssertTest {

    String str = "{\"id\": 1,\"name\":\"Ball\",\"price\":10,\"quantity\":100}";

    @Test
    public void jsonAssert_StrictTrue_ExactMatchExceptForSpaces() throws JSONException{
        String expectedResponse = "\"id\": 1,\"name\":\"Ball\"";
        JSONAssert.assertEquals(expectedResponse, actualResponse, true); // test failed, need to have price and quantity when strict is true
    }

    @Test
    public void jsonAssert_StrictFalse() throws JSONException{
        String expectedResponse = "\"id\": 1,\"name\":\"Ball\"";
        JSONAssert.assertEquals(expectedResponse, actualResponse, false); // test passed when strict is false
    }

    @Test
    public void jsonAssert_StrictFalse_TestFailed() throws JSONException{
        String expectedResponse = "\"id\": 1,\"name\":\"Ball\",\"price\":11";
        JSONAssert.assertEquals(expectedResponse, actualResponse, false); // test failed when strict is false and price doesn't match
    }

    @Test
    public void jsonAssert_WithoutEscapeCharacters() throws JSONException{
        String expectedResponse = "id: 1, name: Ball, price: 10";
        JSONAssert.assertEquals(expectedResponse, actualResponse, false); // test passed
    }
}
```

## Rest Service & Business Layer

- **ItemController.java**:

```ts
@RestController
public class ItemController {

    @Autowired
    private ItemBusinessService businessService;

    @GetMapping("/dummy-item")
    public Item dummyItem() {
        ...
        // look at previous sections above
    }

    @GetMapping("/item-from-business-service")
    public Item itemFromBusinessService() {
        return businessService.retrieveHardcodedItem();
    }
}
```

- **ItemBusinessService.java**:

```ts
public class ItemBusinessService {
    public Item retrieveHardcodedItem() {
        return new Item(1, "Ball", 10, 100);
    }
}
```

- **ItemControllerTest.java**:

```ts
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

@ExtendWith(SpringExtension.class)
@WebMvcTest(ItemController.class)
public class ItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // Need to mock business service because the mocked controller does not mock the business service for you
    @MockBean
    private ItemBusinessService businessService;

    @Test
    public void dummyItem_basic() throws Exception {
        ...
        // look at previous sections above
    }

    @Test
    public void itemFromBusinessService_basic() throws Exception {

        // need to define test value using when for the mock businessService
        when(businessService.retrieveHardCodedItem()).thenReturn(
            new Item(2, "Item2", 10, 100)
        );

        MvcResult result = mockMvc.perform(
            .get("/item-from-business-service")
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(content().json("{id:2, name:Item2, price:10, quantity:100}"))
            .andReturn(); // test success
    }
}
```

## Data Layer with JPA, Hibernate, and H2

- In SQL Database,

```
insert into item(id, name, price, quantity) values(10001, 'Item1', 10, 20)
insert into item(id, name, price, quantity) values(10002, 'Item2', 5, 10)
insert into item(id, name, price, quantity) values(10003, 'Item3', 15, 2)
```

- **Item.java**:

```ts
@Entity
public class Item {

    @Id
    private int id;
    private String name;
    private int price;
    private int quantity;

    @Transient
    private int value;

    protected Item() {

    }

    public Item(int id, String name, int price, int quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    ...

    //getter methods

    //toString method
}
```

- **ItemRepository.java**:

```ts
interface ItemRepository extends JpaRepository<Item, Integer> {}
```

- **ItemBusinessService.java**:

```ts
@Component
public class ItemBusinessService {

    @Autowired
    private ItemRepository repository;

    public Item retrieveHardcodedItem() {
        ...
        // look at previous section above
    }

    public List<Item> retrieveAllItems() {
        List<Item> items = repository.findAll();
        for(Item:items){
            item.setValue(item.getPrice() * item.getQuantity());
        }
        return items;
    }
}
```

- **ItemController.java**:

```ts
@RestController
public class ItemController {

    @Autowired
    private ItemBusinessService businessService;

    @GetMapping("/dummy-item")
    public Item dummyItem() {
        ...
        // look at previous sections above
    }

    @GetMapping("/item-from-business-service")
    public Item itemFromBusinessService() {
        ...
        // look at previous sections above
    }

    @GetMapping("/all-items-from-database")
    public List<Item> retrieveAllItems() {
        return businessService.retrieveAllItems();
    }
}
```

- **ItemControllerTest.java**:

```ts
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

@ExtendWith(SpringExtension.class)
@WebMvcTest(ItemController.class)
public class ItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // Need to mock business service because the mocked controller does not mock the business service for you
    @MockBean
    private ItemBusinessService businessService;

    @Test
    public void dummyItem_basic() throws Exception {
        ...
        // look at previous sections above
    }

    @Test
    public void itemFromBusinessService_basic() throws Exception {
        ...
        // refer to previous section above
    }

    @Test
    public void retrieveAllItems_basic() throws Exception {
        // need to define test value using when for the mock businessService
        when(businessService.retrieveAllItems()).thenReturn(
            Arrays.asList(new Item(2, "Item2", 10, 10))
            Arrays.asList(new Item(3, "Item3", 20, 20))
        );

        MvcResult result = mockMvc.perform(
            .get("/all-items-from-database")
            .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(content().json("[{id:2, name:Item2, price:10}, {id:3, name:Item3, price:30}]"))
            .andReturn(); // test success
    }
}
```

### Writing Unit Test for Business Layer

- **ItemBusinessServiceTest.kt**:

```ts
@ExtendWith(SpringExtension.class)
class ItemBusinessServiceTest {
    @InjectMocks
    private ItemBusinessService business;

    @Mock
    private ItemRepository repository;

    @Test
    public void calculateSumUsingDataService_basic() {
        when(repository.findAll()).thenReturn(Arrays.asList(new Item(2, "Item2", 10, 10), new Item(3, "Item3", 20, 20)));
        List<Item> items = business.retrieveAllItems();
        assertEquals(100, items.get(0).getValue());
        assertEquals(400, items.get(1).getValue());
    }
}
```

### Writing Test for Data Layer

- **ItemRepositoryTest.java**:
  - If you have a **data.sql** file in your resources directory, then `@DataJpaTest` should automatically connect with data from the database.

```ts
import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@DataJpaTest
class ItemRepositoryTest {
    @Autowired
    private ItemRepository repository;

    @Test
    public void testFindAll() {
        List<Item> items = repository.findAll();
        assertEquals(4, items.size());
    }
}
```

### Writing an Integration Test

- An Integration Test will launch up all the components, data layers, etc and tests.

```ts
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;
import static org.skyscreamer.jsonassert.JSONAssert.assertEquals;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = RANDOM_PORT)
public class ItemControllerIT {

    @Autowired
    private TestRestTemplate restTemplate;

    @MockBean
    private ItemRepository repository;

    @Test
    public void contextLoads() {
        String response = this.restTemplate.getForObject("/all-items-from-database", String.class);
        JSONAssert.assertEquals([{id:10001},{id:10002},{id:10003}], response, false);
    }
}
```

### Creating different test configuration

```ts
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@TestPropertySource(locations = {"classpath:test-configuration.properties"})
public class UnitTestingApplicationTests {

    @Test
    public void contextLoads() {
        // Test if the Spring application context loads successfully
    }
}
```

## Functional Programming in BusinessImpl

- **BusinessImpl.java**:

```ts
public class BusinessImpl {
    private SomeDataService someDataService;

    // setter function

    public int calculateSum(int[] data){
        // 1, 2, 3, 4, 5 => 1 + 2 ...
        return Arrays.stream(data).reduce(Integer::sum).orElse(0);
    }
}
```

## Better Assertions with Hamcrest

- **HamcrestMatchersTest.java**:

```ts
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

public class HamcrestMatchersTest {

    @Test
    public void learning() {
        List<Integer> numbers = Arrays.asList(12, 15, 45);

        assertThat(numbers, hasSize(3));
        assertThat(numbers, hasItems(12, 45));
        assertThat(numbers, everyItem(greaterThan(10)));
        assertThat(numbers, everyItem(lessThan(100)));

        assertThat("", is(emptyString()));
        assertThat("ABCDE", containsString("BCD"));
        assertThat("ABCDE", startsWith("ABC"));
        assertThat("ABCDE", endsWith("CDE"));
    }
}
```

## AssertJ

```ts
import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

public class AssertJTest {

    @Test
    public void learning() {
        List<Integer> numbers = Arrays.asList(12, 15, 45);

        // assertJ allows method call chaining
        assertThat(numbers)
            .hasSize(3)
            .contains(12, 15)
            .allMatch(x -> x > 10)
            .allMatch(x -> x < 100)
            .noneMatch(x -> x < 0);

        assertThat("").isEmpty();
        assertThat("ABCDE").contains("BCD")
            .startsWith("ABC")
            .endsWith("CDE");
    }
}
```

## JSONPath

```
[
    {"id":10000, "name":"Pencil", "quantity":5},
    {"id":10001, "name":"Pen", "quantity":15},
    {"id":10002, "name":"Eraser", "quantity":10},
]
```

```ts
import static org.assertj.core.api.Assertions.assertThat;
import com.jayway.jsonpath.DocumentContext;
import com.jayway.jsonpath.JsonPath;
import org.junit.jupiter.api.Test;

import java.util.List;

public class JsonPathTest {

    @Test
    public void learning() {
        String responseFromService = "[" +
            "{\"id\":10000, \"name\":\"Pencil\", \"quantity\":5}," +
            "{\"id\":10001, \"name\":\"Pen\", \"quantity\":15}," +
            "{\"id\":10002, \"name\":\"Eraser\", \"quantity\":10}" +
        "]";

        DocumentContext context = JsonPath.parse(responseFromService);
        int length = context.read("$.length()");
        assertThat(length).isEqualTo(3);

        List<Integer> ids = context.read("$..id");
        assertThat(ids).containsExactly(10000, 10001, 10002);

        System.out.println(context.read("$.[1]").toString());
        System.out.println(context.read("$.[0:1]").toString());
        System.out.println(context.read("$.[?(@.name=='Eraser')]").toString());
    }
}
```

## xunitpatterns

- Good Resource
- [xunitpatterns](http://xunitpatterns.com/)

## Measuring Test Coverage

- Check which lines of code are executed in your unit tests?
- Check if you have good number of assertions that cover much of the functionality of your code.
- Keep your tests lean to have good performance

## Good Unit Tests

- Readable
- Fast
- Isolated
  - Fails only when there is an issue with code
  - Not dependent on external systems so use mocks
- Run Often
