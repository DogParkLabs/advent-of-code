defmodule Day1 do
        def read_file(file_name) do
                {:ok, content} = File.read(file_name)
                content
        end
end

IO.inspect(Day1.read_file('./input.txt'))
