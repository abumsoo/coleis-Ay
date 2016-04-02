#!/usr/bin/ruby -w

intcount = 0

File.open("watchlist", "r+") do |f|
  f.each_line do |line|
    out_file = File.new("out#{intcount}","w")
    out_file.puts(line)
	  intcount+=1
  end
end
outfile.close
