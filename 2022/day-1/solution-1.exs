defmodule Day1 do
        def read_file(file_name) do
                {:ok, content} = File.read(file_name)
                content
        end

        def parse_content(content) do
                String.split(content, "\n\n")
        end
end

# IO.inspect(Day1.parse_content(Day1.read_file('./input.txt')))
# or
'./input.txt'
|> Day1.read_file()
|> Day1.parse_content()
|> IO.inspect()
