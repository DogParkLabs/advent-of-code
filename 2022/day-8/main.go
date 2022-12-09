package main

import (
	"fmt"
	"os"
)

func main() {
	data, _ := os.ReadFile("./sample-input.txt")
	fmt.Println(string(data))
}
