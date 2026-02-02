# Directories
SRC_DIR = src
BUILD_DIR = out
LIB_DIR = lib
CLASSPATH = $(BUILD_DIR):$(LIB_DIR)/postgresql.jar

# Collect all Java source files
JAVA_FILES = $(shell find $(SRC_DIR) -name "*.java")

.PHONY: all compile clean run-server run-admin-client run-general-client rebuild

# Default target
all: compile

# Compile all Java files
compile:
	@mkdir -p $(BUILD_DIR)
	javac -d $(BUILD_DIR) -classpath $(CLASSPATH) $(JAVA_FILES)

# Run the server
run-server:
	java -classpath $(CLASSPATH) server.Server

# Run the admin client
run-admin-client:
	java -classpath $(CLASSPATH) adminClient.AdminClient

# Run the general client (Socket)
run-general-client: 
	java -classpath $(CLASSPATH) generalClient.GeneralClient

# Clean compiled files
clean:
	rm -rf $(BUILD_DIR)/*

# Usage examples:
# make compile            -> Compile all Java sources
# make run-server         -> Run the main server
# make run-admin-client   -> Run the admin client
# make run-general-client -> Run the general client
# make clean              -> Remove all compiled classes
