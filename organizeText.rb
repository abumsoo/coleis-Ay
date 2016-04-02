#!/usr/bin/ruby -w

intcount = 0

File.open("watchlist", "r+") do |f|
  f.each_line do |line|
    puts line
	intcount+=1
	puts intcount
  end
end
