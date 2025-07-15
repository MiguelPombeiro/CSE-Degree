# Simulador de Gestor de Memória + Simulador de Escalonamento e Memória

## Requisitos
- GCC
- Make
- Ambiente UNIX 


## Instruções
1. Entrar na diretoria da respetiva parte do projeto.
2. Compilar o programa utilizando o comando 
```bash 
make
```
3. Correr o programa com o comando 
```bash
make run ARG=<NúmeroDoTesteInput>
```

- "make run ARG=<NúmeroDoTesteInput>" também força a compilação do código fonte.

Onde <NúmeroDoTesteInput> são os dois dígitos correspondes ao teste selecionado. Para correr o teste 00, é necessário executar:
```sh
make run ARG=00
```
Isto aplica-se a ambas as partes do projeto.

## Notas
- Todos os resultados dos testes serão guardados na diretoria `Output` dentro da diretoria da respetiva parte.
- Se for necessário adicionar algum teste extra, é apenas necessário alterar algum teste existente no ficheiro de *inputs* da respetiva parte.
- Se for preferível adicionar um teste novo sem alterar os testes já existentes, é necessário adicionar o mesmo no ficheiro de *inputs*, localizado na diretoria `Input`, e adicionar um caso extra na expressão *switch* do ficheiro `main.c`. Por exemplo, para adicionar um teste 06 para a parte 1:

```c
int inputP1Mem06[] = {1600, 1234, 10362, 3400, 4000};
int inputP1Exec06[] = {1, 40, 5, 20, 3, 500, 4, 2222, 3, 4000, 5, 393};
```

É necessário adicionar estes *arrays* ao ficheiro de *inputs*, e no *switch* do ficheiro main.c adicionar um caso novo com o número do teste a adicionar:

```c
        case 6:
            inputP1Mem = inputP1Mem06;
            inputP1Exec = inputP1Exec06;
            memSize = sizeof(inputP1Mem06) / sizeof(inputP1Mem06[0]);
            execSize = sizeof(inputP1Exec06) / sizeof(inputP1Exec06[0]);
            break;
```