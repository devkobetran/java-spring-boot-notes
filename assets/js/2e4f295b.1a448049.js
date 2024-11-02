"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[8468],{235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=t(4848),i=t(8453);const r={sidebar_position:3},s="Hibernate | JPA CRUD",l={id:"tutorial/hibernate-jpa-crud",title:"Hibernate | JPA CRUD",description:"Hibernate",source:"@site/docs/tutorial/hibernate-jpa-crud.md",sourceDirName:"tutorial",slug:"/tutorial/hibernate-jpa-crud",permalink:"/java-spring-boot-notes/docs/tutorial/hibernate-jpa-crud",draft:!1,unlisted:!1,editUrl:"https://github.com/devkobetran/java-spring-boot-notes/docs/tutorial/hibernate-jpa-crud.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Spring Core",permalink:"/java-spring-boot-notes/docs/tutorial/spring-core"},next:{title:"REST CRUD APIs",permalink:"/java-spring-boot-notes/docs/tutorial/rest-crud-apis"}},d={},o=[{value:"Hibernate",id:"hibernate",level:2},{value:"Object-To-Relational Mapping (ORM)",id:"object-to-relational-mapping-orm",level:2},{value:"JPA",id:"jpa",level:2},{value:"EntityManager",id:"entitymanager",level:3},{value:"Saving a Java Object with JPA",id:"saving-a-java-object-with-jpa",level:3},{value:"Retrieving a Java Object with JPA",id:"retrieving-a-java-object-with-jpa",level:3},{value:"Querying for Java Objects",id:"querying-for-java-objects",level:3},{value:"Hibernate / JPA &amp; JDBC",id:"hibernate--jpa--jdbc",level:3},{value:"Creating Spring Boot - Command Line App",id:"creating-spring-boot---command-line-app",level:3},{value:"Entity Class",id:"entity-class",level:2},{value:"@Entity",id:"entity",level:3},{value:"Java Annotations",id:"java-annotations",level:2},{value:"@Column",id:"column",level:3},{value:"@Table",id:"table",level:3},{value:"Primary Key",id:"primary-key",level:2},{value:"JPA Identity - Primary Key",id:"jpa-identity---primary-key",level:3},{value:"Data Access Object",id:"data-access-object",level:2},{value:"@Transactional",id:"transactional",level:3},{value:"@Repository",id:"repository",level:3},{value:"Student DAO Example - Create Objects",id:"student-dao-example---create-objects",level:3},{value:"Retrieving a Java Object with JPA",id:"retrieving-a-java-object-with-jpa-1",level:3},{value:"Student DAO Example - Read Objects part 1",id:"student-dao-example---read-objects-part-1",level:3},{value:"JPA Query Language (JPQL)",id:"jpa-query-language-jpql",level:3},{value:"Retrieving all Students example",id:"retrieving-all-students-example",level:4},{value:"Retrieving Students: lastName = &#39;Doe&#39; example",id:"retrieving-students-lastname--doe-example",level:4},{value:"JPQL - Named Parameters",id:"jpql---named-parameters",level:3},{value:"JPQL - select clause",id:"jpql---select-clause",level:3},{value:"Student DAO Example - Read Objects part 2",id:"student-dao-example---read-objects-part-2",level:3},{value:"Updating a Java Object with JPA",id:"updating-a-java-object-with-jpa",level:3},{value:"Update last name for all students example",id:"update-last-name-for-all-students-example",level:4},{value:"Student DAO Example - Update Objects",id:"student-dao-example---update-objects",level:3},{value:"Deleting a Java Object with JPA",id:"deleting-a-java-object-with-jpa",level:3},{value:"Delete based on a condition",id:"delete-based-on-a-condition",level:4},{value:"Student DAO Example - Delete Objects",id:"student-dao-example---delete-objects",level:3},{value:"Creating Database Tables from Java Code",id:"creating-database-tables-from-java-code",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Student example",id:"student-example",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"hibernate--jpa-crud",children:"Hibernate | JPA CRUD"})}),"\n",(0,a.jsx)(n.h2,{id:"hibernate",children:"Hibernate"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hibernate"}),": A framework for persisting / saving Java objects in a database"]}),"\n",(0,a.jsx)(n.li,{children:"Hibernate handles all of the low-level SQL"}),"\n",(0,a.jsx)(n.li,{children:"Minimizes the amount of JDBC code you have to develop"}),"\n",(0,a.jsx)(n.li,{children:"Hibernate provides the Object-to-Relational Mapping (ORM)"}),"\n"]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n\nA[Your Java App] --\x3e B[JPA / Hibernate] --\x3eC[(Database)]\nB --\x3e A\nC --\x3e B\n\nstyle A fill:green,color:white;\nstyle C fill:grey,stroke:black,color:white;"}),"\n",(0,a.jsx)(n.h2,{id:"object-to-relational-mapping-orm",children:"Object-To-Relational Mapping (ORM)"}),"\n",(0,a.jsx)(n.mermaid,{value:"classDiagram\n\nStudent <|--|> JPA_Hibernate\nStudent : -int id\nStudent : -String firstName\nStudent : -String lastName\nStudent : -String email\n\nDatabase <|--|> JPA_Hibernate\nDatabase : id INT\nDatabase : first_name VARCHAR(45)\nDatabase : last_name VARCHAR(45)\nDatabase : email VARCHAR(45)\n"}),"\n",(0,a.jsx)(n.h2,{id:"jpa",children:"JPA"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"JPA"})," is Jakarta Persistence API","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Standard API for Object-to-Relational-Mapping (ORM)"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Only a specification","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Defines a set of interfaces"}),"\n",(0,a.jsx)(n.li,{children:"Requires an implementation to be usable"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Benefits:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"By having a standard API, you are not locked to vendor's implementation"}),"\n",(0,a.jsx)(n.li,{children:"Maintain portable, flexible code by coding to JPA spec (interfaces)"}),"\n",(0,a.jsxs)(n.li,{children:["Can theoretically switch vendor implementations","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"For example, if Vendor ABC stops supporting their product"}),"\n",(0,a.jsx)(n.li,{children:"You could switch to Vendor XYZ without vendor lock in"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Hibernate is the default implementation in Spring Boot","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JPA term used interchangebly with Hibernate"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"entitymanager",children:"EntityManager"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"In Spring Boot, Hibernate is the default implementation of JPA"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"EntityManager"})," is main component for creating queries etc \u2026"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"EntityManager"})," is from Jakarta Persistence API (JPA)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"EntityManager"})," is used for low-level control and flexibility.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Later, we will use ",(0,a.jsx)(n.code,{children:"JpaRepository"})," for high-level of abstraction coding."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"saving-a-java-object-with-jpa",children:"Saving a Java Object with JPA"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// create Java object\nStudent theStudent = new Student("Paul", "Doe", "paul@luv2code.com");\n\n// entityManager is a special JPA helper object\n// the persist method is used to save theStudent to database\n// the persist method is equivalent to the SQL insert\nentityManager.persist(theStudent);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"retrieving-a-java-object-with-jpa",children:"Retrieving a Java Object with JPA"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// create Java object\nStudent theStudent = new Student("Paul", "Doe", "paul@luv2code.com");\n\n// save it to database\nentityManager.persist(theStudent);\n\n// now retrieve from database using the primary key\n// the find method will query the database for a given id\nint theId = 1;\nStudent myStudent = entityManager.find(Student.class, theId);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"querying-for-java-objects",children:"Querying for Java Objects"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'TypedQuery<Student> theQuery = entityManager.createQuery("from Student", Student.class);\n\n// the getResultList method returns a list of Student objects from the database\nList<Student> students= theQuery.getResultList();\n'})}),"\n",(0,a.jsx)(n.h3,{id:"hibernate--jpa--jdbc",children:"Hibernate / JPA & JDBC"}),"\n",(0,a.jsx)(n.p,{children:"Hibernate / JPA uses JDBC for all database communications"}),"\n",(0,a.jsx)(n.h3,{id:"creating-spring-boot---command-line-app",children:"Creating Spring Boot - Command Line App"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import org.springframework.boot.CommandLineRunner;\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.context.annotation.Bean;\n\n@SpringBootApplication\npublic class CruddemoApplication {\n\n    //Executed after the Spring Beans have been loaded\n    public static void main(String[] args) {\n        SpringApplication.run(CruddemoApplication.class, args);\n    }\n\n    @Bean\n    public CommandLineRunner commandLineRunner(String[] args) {\n        //Lambda expression runs your custom code\n        return runner -> {\n            System.out.println("Hello world");\n        };\n}\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"entity-class",children:"Entity Class"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Entity Class"}),": Java class that is mapped to a database table"]}),"\n",(0,a.jsx)(n.h3,{id:"entity",children:"@Entity"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Must have a public or protected no-argument constructor"}),"\n",(0,a.jsx)(n.li,{children:"The class can have other constructors"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"java-annotations",children:"Java Annotations"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Map class to database table"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'//@Entity annotation is needed to map Student to MySQL student database table\n@Entity\n@Table(name="student")\npublic class Student {\n    ...\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Map fields to database columns"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@Entity\n@Table(name="student")\npublic class Student {\n    //@Column annotation maps id to the id in the database table\n    @Id\n    @Column(name="id")\n    private int id;\n\n    //@Column annotation maps firstName to the first_name in the database table\n    @Column(name="first_name")\n    private String firstName;\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"column",children:"@Column"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@Column"})," is optional","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If not used, then column name is the same name as java field","\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Better to specify with ",(0,a.jsx)(n.code,{children:"@Column"})," just to be safe."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"table",children:"@Table"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"@Table"})," is optional","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If not used, then the database table name is same as the class.","\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["Better to specify with ",(0,a.jsx)(n.code,{children:"@Table"})," just to be safe."]})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"primary-key",children:"Primary Key"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Uniquely identifies each row in a table"}),"\n",(0,a.jsx)(n.li,{children:"Must be a unique value"}),"\n",(0,a.jsx)(n.li,{children:"Cannot contain NULL values"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Example in MySQL:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"CREATE TABLE student (\n    id int NOT NULL AUTO_INCREMENT,\n    first_name varchar(45) DEFAULT NULL,\n    last_name varchar(45) DEFAULT NULL,\n    email varchar(45) DEFAULT NULL,\n    PRIMARY KEY (id)\n)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"jpa-identity---primary-key",children:"JPA Identity - Primary Key"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@Entity\n@Table(name="student")\npublic class Student {\n    //GenerationType.IDENTITY designates a primary key\n    @Id\n    @GeneratedValue(strategy=GenerationType.IDENTITY)\n    @Column(name="id")\n    private int id;\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"data-access-object",children:"Data Access Object"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data Acess Object (DAO) is a design pattern"}),"\n"]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n\nA[CRUDApp] <--\x3e B[DAO] <--\x3e C[(Database)]\n\nstyle A fill:green,color:white;\nstyle B fill:red,color:white;\nstyle C fill:grey,color:white,stroke:black;\n"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["A DAO requires a JPA entity manager","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Entity manager is needed to save or retrieve entities"}),"\n",(0,a.jsx)(n.li,{children:"Entity manager needs a data source."}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Data Source"}),": defines the database connection info"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"application.properties"})," automatically creates the Entity Manager and Data Source."]}),"\n",(0,a.jsx)(n.li,{children:"The developer autowrites and injects the JPA Entity Manager into the DAO."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n\nA[DAO] <--\x3e B[Entity Manager] <--\x3e C[Data Source] <--\x3e D[(Database)]\n\nstyle A fill:purple,color:white;\nstyle B fill:blue,color:white;\nstyle C fill:red,color:white;\nstyle D fill:grey,color:white,stroke:black;\n"}),"\n",(0,a.jsx)(n.h3,{id:"transactional",children:"@Transactional"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Automagically begin and end a transaction for your JPA code","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"No need for you to explicitly do this in your code"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"repository",children:"@Repository"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Applied to DAO implementations"}),"\n",(0,a.jsx)(n.li,{children:"Spring will automatically register the DAO implementation due to component-scanning"}),"\n",(0,a.jsx)(n.li,{children:"Spring also provides translation of any JDBC related exceptions"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"student-dao-example---create-objects",children:"Student DAO Example - Create Objects"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Define DAO interface"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\n\npublic interface StudentDAO {\n    void save(Student theStudent);\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Define DAO implementation","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Inject the entity manager"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\nimport jakarta.persistence.EntityManager;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Repository;\nimport org.springframework.transaction.annotation.Transactional;\n\n// @Repository annotation supports component scanning and translates JDBC exceptions\n@Repository\npublic class StudentDAOImpl implements StudentDAO {\n    private EntityManager entityManager;\n\n    // Inject the Entity Manager\n    @Autowired\n    public StudentDAOImpl(EntityManager theEntityManager) {\n        entityManager = theEntityManager;\n    }\n\n    // Save the Java Object\n    // @Transactional annotation handles transaction management\n    @Override\n    @Transactional\n    public void save(Student theStudent) {\n        entityManager.persist(theStudent);\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Update the main app"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@SpringBootApplication\npublic class CruddemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(CruddemoApplication.class, args);\n    }\n\n    //Inject the StudentDAO\n    @Bean\n    public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {\n    return runner -> {\n        createStudent(studentDAO);\n    }\n\n    private void createStudent(StudentDAO studentDAO) {\n        // create the student object\n        System.out.println("Creating new student object...");\n        Student tempStudent = new Student("Paul", "Doe", "paul@luv2code.com");\n\n        // save the student object\n        System.out.println("Saving the student...");\n        studentDAO.save(tempStudent);\n\n        // display id of the saved student\n        System.out.println("Saved student. Generated id: " + tempStudent.getId());\n    }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"retrieving-a-java-object-with-jpa-1",children:"Retrieving a Java Object with JPA"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// retrieve/read from database using the primary key\n// in this example, retrieve the Entity Class, Student, with primary key: 1\nStudent myStudent = entityManager.find(Student.class, 1);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"student-dao-example---read-objects-part-1",children:"Student DAO Example - Read Objects part 1"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO interface"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\npublic interface StudentDAO {\n    /* Create Object methods here from earlier */\n\n    ...\n\n    Student findById(Integer id);\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO implementation"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\nimport jakarta.persistence.EntityManager;\n/* Create Object imports here from earlier */\n...\n\npublic class StudentDAOImpl implements StudentDAO {\n    private EntityManager entityManager;\n\n    /* Other code from Create Object step goes here from earlier */\n    ...\n\n    // Note: Notice there is no need to add @Transactional since we are doing a query\n    // returns null if not found\n    @Override\n    public Student findById(Integer id) {\n        return entityManager.find(Student.class, id);\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Update main app"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@SpringBootApplication\npublic class CruddemoApplication {\n\n    /* Earlier code from Create Objects step goes here */\n    ...\n\n    //Inject the StudentDAO\n    @Bean\n    public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {\n    return runner -> {\n        readStudent(studentDAO);\n    }\n\nprivate void readStudent(StudentDAO studentDAO) {\n    // create a student object\n    System.out.println("Creating new student object...");\n    Student tempStudent = new Student("Daffy", "Duck", "daffy@luv2code.com");\n\n    // save the student object\n    System.out.println("Saving the student...");\n    studentDAO.save(tempStudent);\n\n    // display id of the saved student\n    System.out.println("Saved student. Generated id: " + tempStudent.getId());\n\n    // retrieve student based on the id: primary key\n    System.out.println("\\nRetrieving student with id: " + tempStudent.getId());\n    Student myStudent = studentDAO.findById(tempStudent.getId());\n    System.out.println("Found the student: " + myStudent);\n}\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"jpa-query-language-jpql",children:"JPA Query Language (JPQL)"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Query language for retrieving objects"}),"\n",(0,a.jsx)(n.li,{children:"Similar to SQL"}),"\n",(0,a.jsxs)(n.li,{children:["However, JPQL is based on ",(0,a.jsx)(n.em,{children:"entity name"})," and ",(0,a.jsx)(n.em,{children:"entity fields"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"retrieving-all-students-example",children:"Retrieving all Students example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// Student in "FROM Student" is the name of a JPA Entity (class name of Student in Java)\n// "Student" is NOT the name of the database table.\nTypedQuery<Student> theQuery = entityManager.createQuery("FROM Student", Student.class);\nList<Student> students = theQuery.getResultList();\n'})}),"\n",(0,a.jsx)(n.h4,{id:"retrieving-students-lastname--doe-example",children:"Retrieving Students: lastName = 'Doe' example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// lastName is the field of the JPA Entity (lastName is a member field of the Student Java Class)\nTypedQuery<Student> theQuery = entityManager.createQuery("FROM Student WHERE lastName=\u2018Doe\u2019", Student.class);\nList<Student> students = theQuery.getResultList();\n'})}),"\n",(0,a.jsx)(n.h3,{id:"jpql---named-parameters",children:"JPQL - Named Parameters"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'public List<Student> findByLastName(String theLastName) {\n    //JPQL Named Parameters are prefixed with a colon :\n    //Think of theData as a placeholder that is filled in later\n    TypedQuery<Student> theQuery = entityManager.createQuery("FROM Student WHERE lastName=:theData", Student.class);\n\n    //Now theData is filled in\n    theQuery.setParameter("theData", theLastName);\n\n    return theQuery.getResultList();\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"jpql---select-clause",children:"JPQL - select clause"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"For strict JPQL, the \u201cselect\u201d clause is required"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'// s is an \u201cidentification variable\u201d / alias\n// Provides a reference to the Student entity object\n// s - Can be any name\n// Useful for when you have complex queries\nTypedQuery<Student> theQuery = entityManager.createQuery("select s FROM Student s", Student.class);\n'})}),"\n",(0,a.jsx)(n.h3,{id:"student-dao-example---read-objects-part-2",children:"Student DAO Example - Read Objects part 2"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO interface"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\nimport java.util.List;\npublic interface StudentDAO {\n    /* Other DAO methods written here*/\n    ...\n\n    List<Student> findAll();\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO implementation"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import com.luv2code.cruddemo.entity.Student;\nimport jakarta.persistence.EntityManager;\nimport jakarta.persistence.TypedQuery;\nimport java.util.List;\n/* Other DAO imports here */\n...\n\npublic class StudentDAOImpl implements StudentDAO {\n    private EntityManager entityManager;\n\n    /* Other DAO implementations here */\n    ...\n\n    // Note: No need to add @Transactional since we are doing a query\n    // Student in "FROM Student" is the name of the JPA entity (java class Student)\n    @Override\n    public List<Student> findAll() {\n        TypedQuery<Student> theQuery = entityManager.createQuery(\u201cFROM Student", Student.class);\n        return theQuery.getResultList();\n    }\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Update main app"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"@SpringBootApplication\npublic class CruddemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(CruddemoApplication.class, args);\n    }\n\n    @Bean\n    public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {\n        return runner -> {\n            queryForStudents(studentDAO);\n        };\n    }\n\n    private void queryForStudents(StudentDAO studentDAO) {\n        // get list of students\n        List<Student> theStudents = studentDAO.findAll();\n\n        // display list of students\n        for (Student tempStudent : theStudents) {\n            System.out.println(tempStudent);\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"updating-a-java-object-with-jpa",children:"Updating a Java Object with JPA"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'Student theStudent = entityManager.find(Student.class, 1);\n\n// change first name to "Scooby"\ntheStudent.setFirstName("Scooby");\n\n//Update the entity\nentityManager.merge(theStudent);\n'})}),"\n",(0,a.jsx)(n.h4,{id:"update-last-name-for-all-students-example",children:"Update last name for all students example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"//Objective: return the number of rows updated\n//lastName is the field of the JPA entity\n//Student is the name of the JPA Entity (Java class name)\n//executeUpdate method will execute the statement\nint numRowsUpdated = entityManager.createQuery(\"UPDATE Student SET lastName='Tester'\u201d).executeUpdate();\n"})}),"\n",(0,a.jsx)(n.h3,{id:"student-dao-example---update-objects",children:"Student DAO Example - Update Objects"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO interface"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\n\npublic interface StudentDAO {\n    /* Other DAO methods */\n    ...\n\n    void update(Student theStudent);\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO implementation"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\nimport jakarta.persistence.EntityManager;\nimport org.springframework.transaction.annotation.Transactional;\n/* Other DAO imports go here */\n...\n\npublic class StudentDAOImpl implements StudentDAO {\n    private EntityManager entityManager;\n    /* Other DAO implementations go here */\n    ...\n\n    // Add @Transactional since we are performing an update\n    @Override\n    @Transactional\n    public void update(Student theStudent) {\n        entityManager.merge(theStudent);\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Update main app"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@SpringBootApplication\npublic class CruddemoApplication {\n    /*Other DAO Application code*/\n    ...\n\n    @Bean\n    public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {\n    return runner -> {\n        updateStudent(studentDAO);\n    };\n\n    private void updateStudent(StudentDAO studentDAO) {\n        // retrieve student based on the id: primary key\n        int studentId = 1;\n        System.out.println("Getting student with id: " + studentId);\n        Student myStudent = studentDAO.findById(studentId);\n        System.out.println("Updating student...");\n\n        // change first name to "Scooby"\n        myStudent.setFirstName("Scooby");\n        studentDAO.update(myStudent);\n\n        // display updated student\n        System.out.println("Updated student: " + myStudent);\n    }\n}\n\n'})}),"\n",(0,a.jsx)(n.h3,{id:"deleting-a-java-object-with-jpa",children:"Deleting a Java Object with JPA"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// retrieve the student\nint id = 1;\nStudent theStudent = entityManager.find(Student.class, id);\n\n// delete the student\nentityManager.remove(theStudent);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"delete-based-on-a-condition",children:"Delete based on a condition"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'//Objective: return the number of rows deleted\n// lastName is the field of JPA entity\n// Student is the name of the JPA entity (java class name)\n// executeUpdate method is needed to execute the statement since the database is being modified (i.e. deleted).\nint numRowsDeleted = entityManager.createQuery("DELETE FROM Student WHERE lastName=\u2018Smith\u2019").executeUpdate();\n'})}),"\n",(0,a.jsx)(n.h3,{id:"student-dao-example---delete-objects",children:"Student DAO Example - Delete Objects"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO interface"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\n\npublic interface StudentDAO {\n    /* Other DAO methods */\n    ...\n\n    void delete(Integer id);\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Add new method to DAO implementation"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import com.luv2code.cruddemo.entity.Student;\nimport jakarta.persistence.EntityManager;\nimport org.springframework.transaction.annotation.Transactional;\n/* Other DAO imports go here */\n...\n\npublic class StudentDAOImpl implements StudentDAO {\n    private EntityManager entityManager;\n    /* Other DAO implementations go here */\n    ...\n\n    // Add @Transactional since we are performing a delete\n    @Override\n    @Transactional\n    public void delete(Integer id) {\n        Student theStudent = entityManager.find(Student.class, id);\n        entityManager.remove(theStudent);\n    }\n}\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Update main app"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@SpringBootApplication\npublic class CruddemoApplication {\n    /*Other DAO Application code*/\n    ...\n\n    @Bean\n    public CommandLineRunner commandLineRunner(StudentDAO studentDAO) {\n    return runner -> {\n        deleteStudent(studentDAO);\n    };\n\n    private void deleteStudent(StudentDAO studentDAO) {\n        // delete the student\n        int studentId = 3;\n        System.out.println("Deleting student id: " + studentId);\n        studentDAO.delete(studentId);\n    }\n}\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"creating-database-tables-from-java-code",children:"Creating Database Tables from Java Code"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"JPA/Hibernate provides an option to automagically create database tables"}),"\n",(0,a.jsx)(n.li,{children:"Creates tables based on Java code with JPA/Hibernate annotations"}),"\n",(0,a.jsx)(n.li,{children:"Though not recommend, check configuration for reasons why ..."}),"\n"]}),"\n",(0,a.jsx)(n.mermaid,{value:"flowchart LR\n\nA[Java Code] --\x3e B[JPA/Hibernate] --\x3e C[SQL] --\x3e D[(Database)]\n\nstyle A fill:green,color:white;\nstyle B fill:blue,color:white;\nstyle C fill:black,color:white;\nstyle D fill:grey,stroke:black,color:white;\n"}),"\n",(0,a.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.admonition,{type:"danger",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["In the ",(0,a.jsx)(n.strong,{children:"application.properties"})," file, do not include"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spring.jpa.hibernate.ddl-auto=create\n"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"When you run your app, JPA/Hibernate will drop tables then create them based on the JPA/Hibernate annotations in your Java code"}),"\n",(0,a.jsx)(n.li,{children:"This means when database tables are dropped, all data is lost"}),"\n",(0,a.jsx)(n.li,{children:"Do not do this in Production databases!"}),"\n"]})]}),"\n",(0,a.jsxs)(n.admonition,{type:"warning",children:[(0,a.jsx)(n.p,{children:"If you want to create tables once and then keep data, use: update"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"spring.jpa.hibernate.ddl-auto=update\n"})}),(0,a.jsx)(n.p,{children:"However, will ALTER database schema based on latest code updates."}),(0,a.jsx)(n.p,{children:"Be VERY careful here ... only use for basic projects"})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["In general, don\u2019t use auto generation for enterprise, real-time projects","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"You can VERY easily drop PRODUCTION data if you are not careful"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Use SQL scripts","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Corporate DBAs prefer SQL scripts for governance and code review"}),"\n",(0,a.jsx)(n.li,{children:"The SQL scripts can be customized and fine-tuned for complex database designs"}),"\n",(0,a.jsx)(n.li,{children:"The SQL scripts can be version-controlled"}),"\n",(0,a.jsx)(n.li,{children:"Can also work with schema migration tools such as Liquibase and Flyway"}),"\n"]}),"\n"]}),"\n"]})}),"\n",(0,a.jsx)(n.h3,{id:"student-example",children:"Student example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@Entity\n@Table(name="student")\npublic class Student {\n    @Id\n    @GeneratedValue(strategy=GenerationType.IDENTITY)\n    @Column(name="id")\n    private int id;\n\n    @Column(name="first_name")\n    private String firstName;\n\n    @Column(name="last_name")\n    private String lastName;\n\n    @Column(name="email")\n    private String email;\n\n    \u2026\n    // constructors, getters / setters\n}\n'})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"The above java code is equivalent to the SQL down below"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"create table student (id integer not null auto_increment,\nemail varchar(255),\nfirst_name varchar(255),\nlast_name varchar(255),\nprimary key (id))\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Observe how @Table corresponds to the SQL table name of student"}),"\n",(0,a.jsx)(n.li,{children:"All the @Column corresponds to the entries in the database."}),"\n"]})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(6540);const i={},r=a.createContext(i);function s(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);