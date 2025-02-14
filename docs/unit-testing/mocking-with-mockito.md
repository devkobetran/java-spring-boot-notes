---
sidebar_position: 2
---

# Mocking with Mockito

## Spring Initializer Setup

- Web

## Simple Unit Test for a Business Service

- **BusinessImpl.java**:

```ts
public class BusinessImpl {
    public int calculateSum(int[] data){
        int sum = 0;
        for(int value:data) {
            sum += value;
        }
        return sum;
    }
}
```

- **BusinessTest.java**:

```ts
import static org.junit.Assert.*;

public class BusinessTest {
    @Test
    public void calculateSum_basic() {
        BusinessImpl business = new BusinessImpl()
        int actualResult = business.calculateSum(new int[] {1, 2, 3});
        int expectedResult = 6;
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void calculateSum_empty() {
        BusinessImpl business = new BusinessImpl()
        int actualResult = business.calculateSum(new int[] { });
        int expectedResult = 0;
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void calculateSum_onevalue() {
        BusinessImpl business = new BusinessImpl()
        int actualResult = business.calculateSum(new int[] { 5 });
        int expectedResult = 5;
        assertEquals(expectedResult, actualResult);
    }
}
```

## Business Service calls a data service

- **SomeDataService.java**:

```ts
public interface SomeDataService {
    int[] retrieveAllData();
}
```

- **BusinessImpl.java**:

```ts
public class BusinessImpl {

    private SomeDataService someDataService;

    public void setSomeDataService(SomeDataService someDataService){
        this.someDataService = someDataService;
    }

    public int calculateSumUsingDataService(){
        int sum = 0;
        int[] data = someDataService.retrieveAllData();
        for(int value:data) {
            sum += value;
        }
        return sum;
    }
}
```

- **BusinessMockTest.java**:
  - Using Mockito Here

```ts
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class BusinessMockTest {

    BusinessImpl business = new BusinessImpl()
    SomeDataService dataServiceMock = mock(SomeDataService.class);

    @BeforeEach
    public void before() {
        business.setSomeDataService(dataServiceMock)
    }

    @Test
    public void calculateSumUsingDataService_basic() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 1, 2, 3 })
        int actualResult = business.calculateSumUsingDataService();
        int expectedResult = 6;
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void calculateSumUsingDataService_empty() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { })
        int actualResult = business.calculateSumUsingDataService();
        int expectedResult = 0;
        assertEquals(expectedResult, actualResult);
    }

    @Test
    public void calculateSumUsingDataService_onevalue() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 5 })
        int actualResult = business.calculateSumUsingDataService();
        int expectedResult = 5;
        assertEquals(expectedResult, actualResult);
    }
}
```

### More Refactoring

- Using `@Mock`, `@InjectMocks`, and `@ExtendWith(MockitoExtension.class)`
- Continue from the previous example with further improvements:

- **BusinessMockTest.java**:
  - Using Mockito Here

```ts
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class BusinessMockTest {

    @InjectMocks
    BusinessImpl business

    @Mock
    SomeDataService dataServiceMock;

    @Test
    public void calculateSumUsingDataService_basic() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 1, 2, 3 })
        assertEquals(6, business.calculateSumUsingDataService());
    }

    @Test
    public void calculateSumUsingDataService_empty() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { })
        assertEquals(0, business.calculateSumUsingDataService(););
    }

    @Test
    public void calculateSumUsingDataService_onevalue() {
        when(dataServiceMock.retrieveAllData()).thenReturn(new int[] { 5 })
        assertEquals(5, business.calculateSumUsingDataService());
    }
}
```

- With the `@ExtendWith(MockitoExtension.class)` annotation, Mockito automatically handles the creation and injection of mocks.
  - Thus, `@BeforeEach` is no longer needed.
- `@InjectMocks` is an annotation used in Mockito to automatically inject mock objects into the class being tested. It simplifies the process of setting up and wiring the dependencies of the class under test.
  - Automatic Injection: Mockito will automatically create an instance of the class under test and inject the mock dependencies into it.
  - Dependencies Injection: It looks for fields in the class annotated with @InjectMocks that are of the same type as the mocks created using the `@Mock` annotation and injects them.
- `@Mock` is an annotation used in Mockito to create mock objects. Mock objects are simulated objects that mimic the behavior of real objects in controlled ways. This is useful for isolating the class under test by providing it with mock dependencies instead of real ones.
  - Dependency Isolation: Mock objects allow you to test a class without relying on the behavior of its dependencies. This ensures that tests remain focused on the class being tested.
  - Behavior Specification: With mock objects, you can specify the behavior of methods in the mocked dependency using methods like `when(...).thenReturn(...)`.
  - Interaction Verification: You can verify that certain interactions occurred with the mock objects, such as checking that a method was called a specific number of times.

## Multiple Return Values & Specific Argument Matchers

- **ListMockTest.java**:

```ts
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;

public class ListMockTest {
    List<String> mock = mock(List.class);

    @Test
    public void size_test() {
        when(mock.size()).thenReturn(5);
        assertEquals(5, mock.size());
    }

    @Test
    public void returnDifferentValues_test() {
        when(mock.size()).thenReturn(5).thenReturn(10);
        assertEquals(5, mock.size());
        assertEquals(10, mock.size());
    }

    @Test
    public void returnWithParameters_test() {
        when(mock.get(0)).thenReturn("in28Minutes");
        assertEquals("in28Minutes", mock.get(0));
    }

    @Test
    public void returnWithGenericParameters_test() {
        when(mock.get(anyInt())).thenReturn("in28Minutes");
        assertEquals("in28Minutes", mock.get(0));
    }

    @Test
    public void verificationBasics_test() {
        //SUT
        String value = mock.get(0);

        verify(mock).get(0); // success
        verify(mock).get(anyInt()); // success
        verify(mock, times(1)).get(anyInt()); // success
        verify(mock, atLeast(1)).get(anyInt()); // success
        verify(mock, atMost(1)).get(anyInt()); // success
        verify(mock, never()).get(2); // success
    }

    @Test
    public void argumentCapturing_test() {
        mock.add("SomeString");

        // Used to capture the argument passed to the add method of the mock list.
        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        // Ensures that the add method was called with the captured argument.
        verify(mock).add(captor.capture());

        // asserts that the captured argument is equal to "SomeString".
        assertsEquals("SomeString", captor.getValue());
    }

    @Test
    public void multipleArgumentCapturing_test() {
        mock.add("SomeString1");
        mock.add("SomeString2");

        // Used to capture the argument passed to the add method of the mock list.
        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        // Ensures that the add method was called with the captured argument.
        verify(mock, times(2)).add(captor.capture());

        List<String> allValues = captor.getAllValues();

        // asserts that the captured argument is equal to "SomeString".
        assertsEquals("SomeString1", allValues.get(0));
        assertsEquals("SomeString2", allValues.get(1));
    }

    @Test
    public void mocking_test() {
        ArrayList arrayListMock = mock(ArrayList.class);
        arrayListMock.get(0); // null
        arrayListMock.size(); // 0
        arrayListMock.add("Test");
        arrayListMock.add("Test2");
        arrayListMock.size(); // still 0
        when(arrayListMock.size()).thenReturn(5);
        arrayListMock.size(); // 5
    }

    @Test
    public void spying_test() {
        ArrayList<String> arrayListSpy = spy(ArrayList.class);
        arrayListSpy.add("Test0");
        assertEquals("Test0", arrayListSpy.get(0)); // Test0
        assertEquals(1, arrayListSpy.size()); // 1

        arrayListSpy.add("Test");
        arrayListSpy.add("Test2");
        assertEquals(3, arrayListSpy.size()); // 3

        when(arrayListSpy.size()).thenReturn(5);
        assertEquals(5, arrayListSpy.size()); // 5

        arrayListSpy.add("Test4");
        assertEquals(5, arrayListSpy.size()); // still 5

        verify(arrayListSpy).add("Test4"); //success
    }
}
```

- `anyInt()` is an argument matcher
- `verify` is used to confirm that specific interactions with mock objects have occurred. It allows you to ensure that certain methods were called with the expected parameters a specified number of times. This is especially useful for validating the behavior of the system under test (SUT) and ensuring it interacts with its dependencies as expected.
  - Interaction Verification: You can use verify to check if a specific method was called on a mock object.
  - Parameter Matching: You can use argument matchers (like anyInt()) to verify the parameters passed to the method.
  - Call Frequency: You can specify how many times you expect the method to be called (e.g., times(1), never(), atLeast(1), atMost(1)).
- Unlike mocks, use `spy` to directly deploy real world action to see how it works.
