const nomes = ["Périola", "Joacir", "Otavio", "Franciele", "Adrielly", "Victória", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)

