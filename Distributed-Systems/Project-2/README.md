# Environmental Monitoring System

This project implements a distributed environmental monitoring system for collecting temperature and humidity data from simulated IoT sensors. It supports three communication protocols: MQTT, gRPC, and REST. Each of these protocols is represented by an interactive client capable of running multiple sensors and periodically generating readings.

A Spring Boot server validates and processes readings received through the three protocols before persisting them in PostgreSQL using JPA/Hibernate. A terminal administration client is also provided for managing devices, consulting raw or aggregated readings by room, department, floor, or building, and viewing system and protocol performance statistics. A detailed description of the architecture, implementation decisions, and performance evaluation is available in the [project report](./report.pdf).

## How to run

### Requirements

- Java 17
- Maven
- Docker with Docker Compose

### Notes
- The included `.env` and `application.properties` files are preconfigured for local execution.

### 1. Start the infrastructure

From this directory, start PostgreSQL, pgAdmin, and the ActiveMQ broker:

```bash
docker compose up -d
```

### 2. Start the server

From a separate terminal:

```bash
cd server
mvn clean compile
mvn spring-boot:run
```

The REST API will be available on port `8080`, while the gRPC service will use port `50051`.

### 3. Start the administration client

From another terminal:

```bash
cd admin-cli
mvn clean compile
mvn exec:java -Dexec.mainClass="pt.uevora.sdist.monitoring.AdminCLI"
```

Use the administration client to register active devices before starting their corresponding sensor simulators. Each sensor must use the ID and protocol of a registered device.

### 4. Start the sensor simulators

Each simulator should be run from its own module directory and terminal.

For REST:

```bash
cd client-rest
mvn clean compile
mvn exec:java -Dexec.mainClass="pt.uevora.sdist.monitoring.ClientRest"
```

For gRPC:

```bash
cd client-grpc
mvn clean compile
mvn exec:java -Dexec.mainClass="pt.uevora.sdist.monitoring.ClientGrpc"
```

For MQTT:

```bash
cd client-mqtt
mvn clean compile
mvn exec:java -Dexec.mainClass="pt.uevora.sdist.monitoring.ClientMqtt"
```

Each client provides an interactive menu for adding, removing, and listing simulated sensors.

### 5. Stop the infrastructure

After stopping the server and clients, run the following from the project directory:

```bash
docker compose down
```