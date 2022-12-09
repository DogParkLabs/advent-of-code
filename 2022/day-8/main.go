package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	data, _ := os.ReadFile("./sample-input.txt")
	inputStr := string(data)
	trees := strings.Split(inputStr, "\n")
	grid := make([][]int, len(trees))

	for i, value := range trees {
		chars := strings.Split(value, "")
		numbers := make([]int, len(chars))

		for j, char := range chars {
			number, _ := strconv.Atoi(char)
			numbers[j] = number
		}

		grid[i] = numbers
	}

	fmt.Println(grid)
}
