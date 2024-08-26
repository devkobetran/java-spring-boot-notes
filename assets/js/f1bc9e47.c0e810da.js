"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[4396],{4947:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>a});var o=i(4848),r=i(8453);const t={sidebar_position:2},s="Spring Core",l={id:"tutorial/spring-core",title:"Spring Core",description:"Inversion of Control",source:"@site/docs/tutorial/spring-core.md",sourceDirName:"tutorial",slug:"/tutorial/spring-core",permalink:"/java-spring-boot-notes/docs/tutorial/spring-core",draft:!1,unlisted:!1,editUrl:"https://github.com/kotran222/java-spring-boot-notes/docs/tutorial/spring-core.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Spring Boot 3 Intro",permalink:"/java-spring-boot-notes/docs/tutorial/spring-boot-3-intro"},next:{title:"Hibernate | JPA CRUD",permalink:"/java-spring-boot-notes/docs/tutorial/hibernate-jpa-crud"}},c={},a=[{value:"Inversion of Control",id:"inversion-of-control",level:2},{value:"Spring Container",id:"spring-container",level:3},{value:"Dependency Injection",id:"dependency-injection",level:2},{value:"Two Types of Injection",id:"two-types-of-injection",level:3},{value:"Constructor Injection",id:"constructor-injection",level:3},{value:"Setter Injection",id:"setter-injection",level:3},{value:"@Qualifier",id:"qualifier",level:2},{value:"@Primary",id:"primary",level:2},{value:"Lazy Initialization",id:"lazy-initialization",level:2},{value:"@Lazy",id:"lazy",level:3},{value:"Bean Scopes",id:"bean-scopes",level:2},{value:"Default Scope",id:"default-scope",level:3},{value:"Explicitly Specify Bean Scope",id:"explicitly-specify-bean-scope",level:3},{value:"Common List of Spring Bean Scopes",id:"common-list-of-spring-bean-scopes",level:4},{value:"Bean Lifecycle",id:"bean-lifecycle",level:2},{value:"Bean Lifecycle Methods",id:"bean-lifecycle-methods",level:3},{value:"@Configuration",id:"configuration",level:2}];function h(n){const e={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.header,{children:(0,o.jsx)(e.h1,{id:"spring-core",children:"Spring Core"})}),"\n",(0,o.jsx)(e.h2,{id:"inversion-of-control",children:"Inversion of Control"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Inversion of Control"}),": The approach of outsourcing the construction and management of objects."]}),"\n",(0,o.jsx)(e.h3,{id:"spring-container",children:"Spring Container"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Primary functions:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Create and manage objects (Inversion of Control)"}),"\n",(0,o.jsx)(e.li,{children:"Inject object dependencies (Dependency Injection)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"dependency-injection",children:"Dependency Injection"}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.strong,{children:"Dependency Injection"}),":"]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"The dependency inversion principle."}),"\n",(0,o.jsx)(e.li,{children:"The client delegates to another object the responsibility of providing its dependencies."}),"\n",(0,o.jsxs)(e.li,{children:["Example: A Controller wants to use a class Coach.","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Coach is a ",(0,o.jsx)(e.em,{children:"dependency"})," that needs to be injected into the Controller."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Dependency Injection uses ",(0,o.jsx)(e.strong,{children:"autowiring"}),", which is when Spring injects a dependency automatically.","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Spring will search for a class that matches by type:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Class"}),"\n",(0,o.jsx)(e.li,{children:"Interface"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Example of ",(0,o.jsx)(e.strong,{children:"autowiring"}),":","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Inject a Coach implementation."}),"\n",(0,o.jsx)(e.li,{children:"Suppose there is a Coach interface."}),"\n",(0,o.jsxs)(e.li,{children:["Spring will scan for ",(0,o.jsx)(e.code,{children:"@Components"}),"."]}),"\n",(0,o.jsx)(e.li,{children:"CricketCoach implements the Coach interface."}),"\n",(0,o.jsx)(e.li,{children:"CricketCoach will be injected."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"two-types-of-injection",children:"Two Types of Injection"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Constructor Injection"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Use this when you have required dependencies"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Setter Injection"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Use this when you have optional dependencies"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"constructor-injection",children:"Constructor Injection"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Define the dependency interface and class"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"public interface Coach {\n    String getDailyWorkout();\n}\n"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import org.springframework.stereotype.Component;\n\n//@Component annotation marks the class as a Spring Bean\n//@Component makes the bean available for dependency injection\n//This means @Component will allow the bean to be injected into the contructor of the RestController\n@Component\npublic class CricketCoach implements Coach {\n    @Override\n    public String getDailyWorkout() {\n        return "Practice fast bowling for 15 minutes";\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsx)(e.li,{children:"Create Demo REST Controller"}),"\n",(0,o.jsx)(e.li,{children:"Create a constructor in your class for injections"}),"\n",(0,o.jsx)(e.li,{children:"Add @GetMapping for /dailyworkout"}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:"Steps 2-4 showcase here:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class DemoController {\n    private Coach myCoach;\n\n    // @Autowired annotation tells Spring to inject a dependency\n    @Autowired\n    public DemoController(Coach theCoach) {\n        myCoach = theCoach;\n    }\n\n    @GetMapping("/dailyworkout")\n    public String getDailyWorkout() {\n        return myCoach.getDailyWorkout();\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"setter-injection",children:"Setter Injection"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Create setter method(s) in your class for injections"}),"\n",(0,o.jsx)(e.li,{children:"Configure the dependency injection with @Autowired Annotation"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"@RestController\npublic class DemoController {\n    private Coach myCoach;\n\n    @Autowired\n    public void setCoach(Coach theCoach) {\n        myCoach = theCoach;\n    }\n}\n"})}),"\n",(0,o.jsx)(e.h2,{id:"qualifier",children:"@Qualifier"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"One solution when there are multiple implementations of a class."}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.code,{children:"@Qualifier"})," helps specify which bean to use."]}),"\n"]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Contructor Injection with Qualifier example below: assume there is CricketCoach, BasketballCoach, FootballCoach, etc. And we want to specify we want CricketCoach"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import com.luv2code.springcoredemo.common.Coach;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Qualifier;\n\n@RestController\npublic class DemoController {\n    private Coach myCoach;\n\n    //In the @Qualifier annotation, specify the bean id: cricketCoach\n    //The bean id is the same name as the class, first character is lower-case.\n    @Autowired\n    public DemoController(@Qualifier("cricketCoach") Coach theCoach) {\n        myCoach = theCoach;\n    }\n\n    @GetMapping("/dailyworkout")\n    public String getDailyWorkout() {\n        return myCoach.getDailyWorkout();\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"primary",children:"@Primary"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"This is another option when given multiple implementations to use, but the developer does not care which implementation (child class) is used. Any will do."}),"\n",(0,o.jsxs)(e.li,{children:["Thus, use the ",(0,o.jsx)(e.code,{children:"@Primary"})," annotation."]}),"\n",(0,o.jsxs)(e.li,{children:["Do not need ",(0,o.jsx)(e.code,{children:"@Qualifier"})," along with ",(0,o.jsx)(e.code,{children:"@Primary"})," for the same bean id."]}),"\n",(0,o.jsxs)(e.li,{children:["When using ",(0,o.jsx)(e.code,{children:"@Primary"}),", can have only one for multiple implementations.","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["If you mark multiple classes with ",(0,o.jsx)(e.code,{children:"@Primary"}),", then there is an error."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["However, if you require the use of both ",(0,o.jsx)(e.code,{children:"@Primary"})," and ",(0,o.jsx)(e.code,{children:"@Qualifier"}),", then ",(0,o.jsx)(e.code,{children:"@Qualifier"})," has higher precedence."]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import org.springframework.context.annotation.Primary;\nimport org.springframework.stereotype.Component;\n\n@Component\n@Primary\npublic class TrackCoach implements Coach {\n    @Override\n    public String getDailyWorkout() {\n        return "Run a hard 5k!";\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"Notice that the RestController will use TrackCoach since it is Primary."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import com.luv2code.springcoredemo.common.Coach;\nimport org.springframework.beans.factory.annotation.Autowired;\n\n@RestController\npublic class DemoController {\n    private Coach myCoach;\n\n    //Notice no need for @Qualifier if above TrackCoach is Primary.\n    //This example will use TrackCoach since TrackCoach is Primary\n    @Autowired\n    public DemoController(Coach theCoach) {\n        myCoach = theCoach;\n    }\n\n    @GetMapping("/dailyworkout")\n    public String getDailyWorkout() {\n        return myCoach.getDailyWorkout();\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"However, if the RestController has a Qualifier with a bean id that is not TrackCoach, then the Qualifier has higher precedence."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import com.luv2code.springcoredemo.common.Coach;\nimport org.springframework.beans.factory.annotation.Autowired;\n\n@RestController\npublic class DemoController {\n    private Coach myCoach;\n\n    //This example will use CricketCoach regardless if TrackCoach is Primary.\n    //This is because a @Qualifier CricketCoach has higher priority than @Primary\n    @Autowired\n    public DemoController(@Qualifier("cricketCoach") Coach theCoach) {\n        myCoach = theCoach;\n    }\n\n    @GetMapping("/dailyworkout")\n    public String getDailyWorkout() {\n        return myCoach.getDailyWorkout();\n    }\n}\n'})}),"\n",(0,o.jsx)(e.admonition,{type:"tip",children:(0,o.jsxs)(e.p,{children:["Thus, just use ",(0,o.jsx)(e.code,{children:"@Qualifier"})," when multiple implementations are involved."]})}),"\n",(0,o.jsx)(e.h2,{id:"lazy-initialization",children:"Lazy Initialization"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Instead of creating all beans up front, we can specify lazy initialization","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["A bean will only be initialized in the following cases:","\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"It is needed for dependency injection"}),"\n",(0,o.jsx)(e.li,{children:"Or it is explicitly requested"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Advantages","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Only create objects as needed"}),"\n",(0,o.jsx)(e.li,{children:"May help with faster startup time if you have large number of components"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["Disadvantages","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["If you have web related components like ",(0,o.jsx)(e.code,{children:"@RestController"}),", not created until requested"]}),"\n",(0,o.jsx)(e.li,{children:"May not discover configuration issues until too late"}),"\n",(0,o.jsx)(e.li,{children:"Need to make sure you have enough memory for all beans once created"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"lazy",children:"@Lazy"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import org.springframework.context.annotation.Lazy;\nimport org.springframework.stereotype.Component;\n\n//@Lazy annotation: Bean is only initialized if needed for dependency injection\n@Component\n@Lazy\npublic class TrackCoach implements Coach {\n    public TrackCoach() {\n        System.out.println("In constructor: " + getClass().getSimpleName());\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"Let's say we don't inject TrackCoach, we inject CricketCoach in the RestController."}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'@RestController\npublic class DemoController {\n    private Coach myCoach;\n\n    @Autowired\n    public DemoController(@Qualifier("cricketCoach") Coach theCoach) {\n        myCoach = theCoach;\n    }\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"Since we are NOT injecting TrackCoach, then it is not initialized.\nThus, in the terminal, we see:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"In constructor: BaseballCoach\nIn constructor: CricketCoach\nIn constructor: TennisCoach\n"})}),"\n",(0,o.jsx)(e.admonition,{type:"warning",children:(0,o.jsxs)(e.p,{children:["Adding ",(0,o.jsx)(e.code,{children:"@Lazy"})," to each class is a lot of unnessary work, especially when there are tons of classes to work with."]})}),"\n",(0,o.jsxs)(e.admonition,{type:"tip",children:[(0,o.jsxs)(e.p,{children:["Lazy Initialization - Global configuration.\nWithin the ",(0,o.jsx)(e.strong,{children:"application.properties"})," file,"]}),(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{children:"spring.main.lazy-initialization=true\n"})}),(0,o.jsx)(e.p,{children:"This makes all beans lazy, which means no beans are created until needed, including the RestController."})]}),"\n",(0,o.jsx)(e.admonition,{type:"danger",children:(0,o.jsx)(e.p,{children:"Lazy initialization feature is disabled by default.\nYou should profile your application before configuring lazy initialization.\nAvoid the common pitfall of premature optimization."})}),"\n",(0,o.jsx)(e.h2,{id:"bean-scopes",children:"Bean Scopes"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Scope refers to the lifecycle of a bean","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"How long does the bean live?"}),"\n",(0,o.jsx)(e.li,{children:"How many instances are created?"}),"\n",(0,o.jsx)(e.li,{children:"How is the bean shared?"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h3,{id:"default-scope",children:"Default Scope"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Default scope is ",(0,o.jsx)(e.strong,{children:"singleton"}),".","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Spring Container creates only one instance of the bean, by default"}),"\n",(0,o.jsx)(e.li,{children:"It is cached in memory"}),"\n",(0,o.jsx)(e.li,{children:"All dependency injections for the bean will reference the SAME bean"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'@RestController\npublic class DemoController {\n    private Coach myCoach;\n    private Coach anotherCoach;\n\n    //Both theCoach and anotherCoach point to the same instance of CricketCoach\n    @Autowired\n    public DemoController(@Qualifier("cricketCoach") Coach theCoach, @Qualifier("cricketCoach") Coach theAnotherCoach) {\n        myCoach = theCoach;\n        anotherCoach = theAnotherCoach;\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"explicitly-specify-bean-scope",children:"Explicitly Specify Bean Scope"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"import org.springframework.context.annotation.Scope;\n\n//Specify this is a bean scope of singleton.\n@Scope(ConfigurableBeanFactory.SCOPE_SINGLETON)\npublic class CricketCoach implements Coach {\n    ...\n}\n"})}),"\n",(0,o.jsx)(e.h4,{id:"common-list-of-spring-bean-scopes",children:"Common List of Spring Bean Scopes"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"singleton"}),": Create a single shared instance of the bean. Default scope."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"prototype"}),": Creates a new bean instance for each container request."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"request"}),": Scoped to an HTTP web request. Only used for web apps."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"session"}),": Scoped to an HTTP web session. Only used for web apps."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"application"}),": Scoped to a web app ServletContext. Only used for web apps."]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"websocket"}),": Scoped to a web socket. Only used for web apps."]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"bean-lifecycle",children:"Bean Lifecycle"}),"\n",(0,o.jsx)(e.mermaid,{value:'flowchart TD\n\n    subgraph Z[" "]\n    direction LR\n    A[Container started]--\x3eB[Bean Instantiated]\n    B--\x3eC[Dependencies Injected]\n    C--\x3eD[Internal Spring Processing]\n    D--\x3eE[Your Custom Init Method]\n    end\n\n    subgraph ZA[" "]\n    direction LR\n    F["`Bean is Ready For Use\n    ----------------------\n    Container is ShutDown`"]\n    end\n\n    subgraph ZB[" "]\n    direction LR\n    G[Your Custom Destroy Method]--\x3eH{{STOP}}\n    end\n\n    Z --\x3e ZA --\x3e ZB\n\n    style E fill:#ffa500;\n    style H fill:#FF0000,color:white;\n    style G fill:#ffa500;'}),"\n",(0,o.jsx)(e.h3,{id:"bean-lifecycle-methods",children:"Bean Lifecycle Methods"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["You can add custom code during ",(0,o.jsx)(e.strong,{children:"bean initialization"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Calling custom business logic methods"}),"\n",(0,o.jsx)(e.li,{children:"Setting up handles to resources (db, sockets, file etc)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["You can add custom code during ",(0,o.jsx)(e.strong,{children:"bean destruction"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Calling custom business logic method"}),"\n",(0,o.jsx)(e.li,{children:"Clean up handles to resources (db, sockets, files etc)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'@Component\npublic class CricketCoach implements Coach {\n    public CricketCoach() {\n        System.out.println("In constructor: " + getClass().getSimpleName());\n    }\n\n    //Init: method configuration\n    @PostConstruct\n    public void doMyStartupStuff() {\n        System.out.println("In doMyStartupStuff(): " + getClass().getSimpleName());\n    }\n\n    //Destroy: method configuration\n    @PreDestroy\n    public void doMyCleanupStuff() {\n        System.out.println("In doMyCleanupStuff(): " + getClass().getSimpleName());\n    }\n}\n'})}),"\n",(0,o.jsx)(e.h2,{id:"configuration",children:"@Configuration"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsx)(e.li,{children:"Create @Configuration class"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"import org.springframework.context.annotation.Configuration;\n\n@Configuration\npublic class SportConfig {\n    \u2026\n}\n"})}),"\n",(0,o.jsxs)(e.ol,{start:"2",children:["\n",(0,o.jsx)(e.li,{children:"Define @Bean method to configure the bean"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:"import com.luv2code.springcoredemo.common.Coach;\nimport com.luv2code.springcoredemo.common.SwimCoach;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n@Configuration\n    public class SportConfig {\n\n        // The bean id defaults to the method name\n        @Bean\n        public Coach swimCoach() {\n            return new SwimCoach();\n        }\n}\n"})}),"\n",(0,o.jsxs)(e.ol,{start:"3",children:["\n",(0,o.jsx)(e.li,{children:"Inject the bean into our controller"}),"\n"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import com.luv2code.springcoredemo.common.Coach;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Qualifier;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\npublic class DemoController {\n    private Coach myCoach;\n\n    //Inject SwimCoach using the bean id\n    @Autowired\n    public DemoController(@Qualifier("swimCoach") Coach theCoach) {\n        System.out.println("In constructor: " + getClass().getSimpleName());\n        myCoach = theCoach;\n    }\n}\n'})}),"\n",(0,o.jsxs)(e.admonition,{type:"note",children:[(0,o.jsxs)(e.p,{children:["Use case for ",(0,o.jsx)(e.code,{children:"@Bean"}),":"]}),(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"You may not have access to the source code of a third-party class"}),"\n",(0,o.jsx)(e.li,{children:"Thus, you would like to use the third-party class as a Spring bean"}),"\n"]})]}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:["Example:","\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"We could use the Amazon S3 Client in our Spring application"}),"\n",(0,o.jsxs)(e.li,{children:["The Amazon S3 Client class was not originally annotated with ",(0,o.jsx)(e.code,{children:"@Component"})]}),"\n",(0,o.jsxs)(e.li,{children:["However, we configured the S3 Client as a Spring Bean using ",(0,o.jsx)(e.code,{children:"@Bean"})]}),"\n",(0,o.jsx)(e.li,{children:"It is now a Spring Bean and we can inject it into other services of our application"}),"\n"]}),"\n"]}),"\n"]})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(h,{...n})}):h(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>l});var o=i(6540);const r={},t=o.createContext(r);function s(n){const e=o.useContext(t);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(t.Provider,{value:e},n.children)}}}]);