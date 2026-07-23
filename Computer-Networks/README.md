# Computer Networks

Contains the final project for the Computer Networks course.

## About

This project implements a terminal-based real-time communication system in C. Unlike a conventional chat application, messages are transmitted letter by letter: each character is sent through a custom application-layer protocol over UDP and displayed to recipients as it is typed. The server supports multiple concurrent users and routes private, group, and broadcast communication.

To mitigate UDP packet loss and reordering, the protocol uses sequence numbers, NACK-based retransmission, timeouts, and periodic heartbeats. The system also provides persistent user registration and group management through CSV files, while peer-to-peer file transfers use temporary TCP connections for reliable delivery. The complete protocol specification and implementation decisions are documented in the [project report](./report.pdf).

## Contents

- [Work Statement](./workStatement.pdf)
- [Report and Protocol](./report.pdf)
- [Server Code](./server/)
- [Client Code](./client/)

## How to run

The application requires a POSIX-compatible environment, such as Linux or macOS, with:

- GCC or another compatible C compiler
- Make
- POSIX threads

### 1. Start the server

Run the server from its directory so it can access the CSV files under `Database/`:

```bash
cd server
make
./server
```

The server listens for UDP datagrams on port `12345`.

### 2. Start the clients

Open a separate terminal for each client:

```bash
cd client
make
./client
```

The client will display an authentication menu. New users should first select the registration option; their credentials will then remain available across server restarts.

After authentication, enter `/help` to display the available commands. These include private, broadcast, and group messages, group management, and file transfer. Use `/exit` to disconnect cleanly.

### Notes

The submitted configuration is intended to run the server and clients locally on the same machine.

## Grade

![Grade: 19/21](https://img.shields.io/badge/Grade-19%2F21-brightgreen)

## Authors

- [André Gonçalves](https://github.com/andreg05)
- [André Zhan](https://github.com/andr-zhan)
- [Miguel Pombeiro](https://github.com/MiguelPombeiro)
- [Miguel Rocha](https://github.com/miguelrocha1)