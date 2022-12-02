defmodule Day1 do
        def read_file(file_name) do
                {:ok, content} = File.read(file_name)
                content
        end

        def parse_content(content) do
                String.split(content, "\n\n")
        end

        def parse_elves(content) do
                # Enum.map(content, fn (line) -> Day1.parse_elf(line) end)
                Enum.map(content, &Day1.parse_elf/1) # Only call parse_elf that accepts one argument
        end

        def parse_elf(line) do
                line
                |> String.split("\n")
                |> Enum.map(&String.to_integer/1)
                |> Enum.sum()
        end

        def parse_elves_eff(content) do
                Enum.reduce(content, 0, fn (line, acc) ->
                        sum = Day1.parse_elf(line) 
                        if (sum > acc) do
                                sum
                        else
                                acc
                        end
                end)
        end
end

# IO.inspect(Day1.parse_content(Day1.read_file('./input.txt')))
# or
'./input.txt'
|> Day1.read_file()
|> Day1.parse_content()
|> Day1.parse_elves()
|> Enum.max()
|> IO.inspect()
# Correct: 69310

'./input.txt'
|> Day1.read_file()
|> Day1.parse_content()
|> Day1.parse_elves_eff()
|> IO.inspect()
# Correct: 69310