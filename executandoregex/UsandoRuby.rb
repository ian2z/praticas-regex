texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
regexNove = Regex::new('9')
puts regexNove.match(texto)

regexNove = %r{9}
puts regexNove.match(texto)

p regexNove =~ '8951'

regexLetras = /[a-f]/
puts texto.scan(regexLetras).join(' ')

puts texto.split(/,/).join

print texto.spli(/[aeiou]/)