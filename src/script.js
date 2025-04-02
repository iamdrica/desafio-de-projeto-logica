let nomeHeroi = "Viúva Negra"
let qtdExperiencia = 12678



if (qtdExperiencia <= 1000) {
    console.log("o herói " + nomeHeroi + " está no nível Ferro e seu nível XP é " + qtdExperiencia)
}
else if (qtdExperiencia >=1001 && qtdExperiencia <= 2000) {
    console.log("o herói " + nomeHeroi + " está no nível Bronze e seu nível XP é " + qtdExperiencia)
}
else if (qtdExperiencia >=2001 && qtdExperiencia <= 5000) {
    console.log("o herói " + nomeHeroi + " está no nível Prata e seu nível XP é " + qtdExperiencia)
}
else if (qtdExperiencia >=5001 && qtdExperiencia <= 7000) {
    console.log("o herói " + nomeHeroi + " está no nível Ouro e seu nível XP é " + qtdExperiencia)
}
else if (qtdExperiencia >=7001 && qtdExperiencia <= 8000) {
    console.log("o herói " + nomeHeroi + " está no nível Platina e seu nível XP é " + qtdExperiencia)
}
else if (qtdExperiencia >=8001 && qtdExperiencia <= 9000) {
    console.log("o herói " + nomeHeroi + " está no nível Ascendente e seu nível XP é " + qtdExperiencia)
}
else if (qtdExperiencia >=9001 && qtdExperiencia <= 10000) {
    console.log("o herói " + nomeHeroi + " está no nível Imortal e seu nível XP é " + qtdExperiencia)
}
else if (qtdExperiencia >=10001) {
    console.log("o herói " + nomeHeroi + " está no nível Radiante e seu nível XP é " + qtdExperiencia)
}
else {
    console.log("o herói " + nomeHeroi + " não tem nível definido.")
}
