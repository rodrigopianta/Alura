import adivinhacao
import forca

print("*******************************")
print("******Escolha o seu jogo!******")
print("*******************************")

print("(1) Forca \n(2) Adivinhação")

jogo = int(input("Qual jogo?: "))

while not (jogo == 1 or jogo == 2):
    print("Escolha um jogo \n(1) Forca \n(2) Adivinhação")
    jogo = int(input("Qual jogo?: "))

if jogo == 1:
    print("Jogando Forca")
    forca.jogar()
elif jogo == 2:
    print("Jogando Adivinhação")
    adivinhacao.jogar()

