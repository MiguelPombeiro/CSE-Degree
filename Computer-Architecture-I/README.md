# Computer Architecture I

Contains the final project for the Computer Architecture I course.

## About

This project implements, in RISC-V Assembly, a program to remove noise from a 400x599 grayscale image using mean and median filters. It reads a .gray image file, applies the selected filter to reduce noise, and saves the filtered image.

## Contents

- [Work Statement](./work_statement.pdf)
- [Report](./report.pdf)
- [Source Code](./denoising_vfinal.asm)
- [Input Image](./cat_noisy.png)
- [Output Image with Mean Filter](./no_border_mean_result.png)
- [Output Image with Median Filter](./no_border_median_result.png)

## How to run

You can run the program using the RISC-V simulator [RARS](https://github.com/TheThirdOne/rars).

- Convert the input image to a .gray format before running the program. The program will read the input image, apply the selected filter, and save the output image in the same directory. 

- Afterwards, the output images must be converted back to a standard image format (like PNG) for viewing.

## Grade

![Grade: 20/20](https://img.shields.io/badge/Grade-20%2F20-brightgreen)

## Authors

- [Miguel Pombeiro](https://github.com/MiguelPombeiro)
- [Miguel Rocha](https://github.com/miguelrocha1)