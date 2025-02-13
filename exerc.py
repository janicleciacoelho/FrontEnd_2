alturas = []
generos = []

for i in range(15):
    print(f"\nPessoa {i + 1}:")
    genero = input("Digite o gênero (Masculino ou Feminino): ").strip().capitalize()
    altura = float(input("Digite a altura (em metros): "))
    generos.append(genero)
    alturas.append(altura)

maior_altura = max(alturas)
menor_altura = min(alturas)

soma_altura_masculino = 0
quantidade_masculino = 0

for i in range(15):
    if generos[i] == "Masculino":
        soma_altura_masculino += alturas[i]
        quantidade_masculino += 1

if quantidade_masculino > 0:
    media_altura_masculino = soma_altura_masculino / quantidade_masculino
else:
    media_altura_masculino = 0

quantidade_feminino = generos.count("Feminino")

print("\nResultados:")
print(f"Maior altura do grupo: {maior_altura:.2f} metros")
print(f"Menor altura do grupo: {menor_altura:.2f} metros")
print(f"Média de altura dos homens: {media_altura_masculino:.2f} metros")
print(f"Número de mulheres: {quantidade_feminino}")