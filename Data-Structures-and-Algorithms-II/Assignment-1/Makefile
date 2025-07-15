# Makefile for compiling and running the Java program

# Compiler
JAVAC = javac

# Java source files
SOURCES = Main.java

# Java class files
CLASSES = Main.class

# Input file
INPUT = teste-1.in

# Output file
OUTPUT = my.out

# JVM options
JVM_OPTS = -Xmx256m -Xss16m

# Default target
all: run show_output

# Compile the Java source files
$(CLASSES): $(SOURCES)
	$(JAVAC) -encoding utf8 $(SOURCES)

# Compile the Java source files
compile: $(CLASSES)

# Run the Java program
run: $(CLASSES)
	java $(JVM_OPTS) Main < $(INPUT) > $(OUTPUT)

# Clean up the class files
clean:
	rm -f $(CLASSES)

# Show the output file
show_output:
	cat $(OUTPUT)

# Phony targets
.PHONY: all compile run clean
