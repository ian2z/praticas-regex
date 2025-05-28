texto = "supermercado superação hiperMERCADO"

puts texto.scan(/(?:super) [\wÀ-ú]+/i).join(' ')

# Positive Lookahead
puts texto.scan(/(?<=super) [\wÀ-ú]+/i).join(' ')

#Negative Lookahed
puts texto.scan(/(?<!super) [\wÀ-ú]+/i).join(' ')