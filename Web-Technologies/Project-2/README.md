# Room Rent

Room Rent is a full-stack web application for publishing and finding student accommodation. Visitors can browse active accommodation offers and requests, inspect advertisement details, and search by location or advertiser. The interface is server-rendered with Thymeleaf and uses responsive layouts and paginated results.

Registered users can create advertisements, obtain a payment reference through an external service, contact advertisers, and consult received messages through a private inbox. New accounts and advertisements require administrator approval before becoming active. The application was built with Spring Boot, Spring Security, JPA/Hibernate, Thymeleaf, and PostgreSQL, with BCrypt password hashing and role-based access control. Further implementation details are available in the [project report](./report.pdf).

## How to run

### Requirements

- Java 17
- Maven
- Docker with Docker Compose

### Notes
- The included `.env` and `application.properties` files are preconfigured for local execution.
- The application uses an external payment service for generating payment references. The service was provided by the course instructors and is no longer available.
- The user interface is in Portuguese, as required for course submissions.

### 1. Start the database

From this directory, start PostgreSQL and pgAdmin:

```bash
docker compose up -d
```

### 2. Start the application

```bash
mvn clean compile
mvn spring-boot:run
```

The application will be available at [http://localhost:8080](http://localhost:8080).

On its first startup, the application creates the database tables and a local administrator account. The administrator credentials are printed in the application logs. This account can be used to approve registered users and activate or deactivate advertisements.

### 3. Use the application

1. Register a new user account.
2. Sign in as the administrator and approve the account.
3. Sign in with the approved account to create advertisements and send messages.
4. Activate submitted advertisements through the administration panel to make them visible in public listings.

### 4. Stop the application

Stop the Spring Boot process and then run:

```bash
docker compose down
```

The PostgreSQL data is stored in a Docker volume and is preserved between executions.