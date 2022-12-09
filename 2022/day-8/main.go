package main

import (
	"fmt"
	"os"
	"strconv"
	"strings"
)

type Grid [][]int

func main() {
	data, _ := os.ReadFile("./sample-input.txt")
	inputStr := string(data)
	trees := strings.Split(inputStr, "\n")
	grid := make(Grid, len(trees))

	for i, value := range trees {
		chars := strings.Split(value, "")
		numbers := make([]int, len(chars))

		for j, char := range chars {
			number, _ := strconv.Atoi(char)
			numbers[j] = number
		}

		grid[i] = numbers
	}

	for i, row := range grid {
		for j, tree := range row {
			fmt.Println(isTreeVisible(grid, i, j), tree)
		}
	}

}

func isTreeVisible(grid Grid, rowIndex int, colIndex int) bool {
	/*
	   30373
	   25512
	   65332
	   33549
	   35390
	*/
	if rowIndex == 0 {
		return true
	}

	if rowIndex == len(grid)-1 {
		return true
	}

	if colIndex == 0 {
		return true
	}

	if colIndex == len(grid[0])-1 {
		return true
	}

	blocked := false

	// Up
	for _, row := range grid[:rowIndex-1] {
		if row[colIndex] >= grid[rowIndex][colIndex] {
			blocked = true
		}
	}

	if !blocked {
		fmt.Println("Line 67")
		return true
	}

	// Down
	blocked = false

	// fmt.Println(grid[rowIndex:MAX_ROW_INDEX])

	collection := grid[rowIndex+1:]

	for _, row := range collection {
		if row[colIndex] >= grid[rowIndex][colIndex] {
			blocked = true

		}

		fmt.Println(row[colIndex], grid[rowIndex][colIndex])
	}

	if !blocked {
		fmt.Println("Line 95")
		return true
	}

	// Right
	MAX_COL_INDEX := len(grid[0])
	blocked = false

	var collection2 []int

	if colIndex+1 == MAX_COL_INDEX {
		collection2 = []int{grid[rowIndex][MAX_COL_INDEX]}
	} else {
		collection2 = grid[rowIndex][colIndex+1 : MAX_COL_INDEX]
	}

	for _, col := range collection2 {
		if col >= grid[rowIndex][colIndex] {
			blocked = true
		}
	}

	if !blocked {
		fmt.Println("Line 110")
		return true
	}

	// Left
	blocked = false

	for _, col := range grid[rowIndex][0:colIndex] {
		if col >= grid[rowIndex][colIndex] {
			blocked = true
		}
	}

	if !blocked {
		fmt.Println("Line 132")
		return true
	}

	return !blocked
}
