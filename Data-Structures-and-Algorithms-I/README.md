# Data Structures and Algorithms I

Contains the final project for the Data Structures and Algorithms I course.

## About

This project implements a spell checker in C that reads a text file, checks each word against a dictionary, and suggests corrections for misspelled words. The program is designed to handle Portuguese text but can be adapted for other languages by changing the dictionary file.

## Contents

- [Work Statement](./work_statement.pdf)
- [Source Code](./src)

## How to run

1. There is a Makefile included in the project directory. To compile the code, run:

```bash
make
```

2. To run the program, execute the following command in the terminal:

```shell
./spellchecker
```

3. Open the `output.txt` file to see the results of the spell check and the suggestions for misspelled words.

### Notes

- The dictionary file `portuguese.txt` must be present in the same directory as the source code. For any other language, you can replace `portuguese.txt` with the desired dictionary file and update `spellchecker.c` accordingly.

- The program reads the input text from `erros.txt`. You can modify this file to test different inputs.

## Grade

![Grade: 20/20](https://img.shields.io/badge/Grade-20%2F20-brightgreen)

## Authors

- [Miguel Pombeiro](https://github.com/MiguelPombeiro)
- [Miguel Rocha](https://github.com/miguelrocha1)