# Simulação de Escalonamento de Processos - Modelo de 5 Estados

## Requisitos

- GCC
- Make
- Ambiente UNIX 

## Instruções

1. Compilar o programa utilizando o comando 
```bash
make
```
2. Correr o programa com o comando 
```bash
make run ARG=<NúmeroDoTesteInput>
```

- "make run ARG=<NúmeroDoTesteInput>" também força a compilação do código fonte.

Onde <NúmeroDoTesteInput> são os dois dígitos correspondes ao teste selecionado. Para correr o teste 00 "input00", é necessário executar "make run ARG=00".

### Notas

- Todos os resultados dos testes serão guardados na diretória `Output`.
- Se for necessário adicionar algum teste extra, é apenas necessário alterar algum teste existente no ficheiro `inputs.h`.
- Se for preferível adicionar um teste novo sem alterar os testes já existentes, é necessário adicionar o mesmo no ficheiro `inputs.h`, localizado na diretória `Input`, e adicionar um caso extra na expressão switch da linha 94 do ficheiro `main.c`. Por exemplo, para adicionar um teste 06

```c
int input06[5][20] = { 
    {  -4,  204,   -2,   10 },
    { 203,   10,    1,   22 },
    {  12,  101,   -3,   52 },
    { -31,    1,    0,   -1 },
    {   0,    0,    0,    0 }};
```

É necessário adicionar esta matriz ao ficheiro `inputs.h` e no switch do ficheiro main.c adicionar um caso novo com o número do teste a adicionar:

```c
        case 6:
            programas = input06;
            nRows = sizeof(input06) / sizeof(input06[0]);
            nColumns = sizeof(input06[0]) / sizeof(input06[0][0]);
            break;
```