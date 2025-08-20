const nomes = ["Fernanda", "Giuliana", "Maria Eduarda", "Marcelo", "Amanda", "Gustavo", "Gabriel"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Exporta o nome aleatório obtido da função
export const nome = aleatorio(nomes);
