// Lista de nomes
const nomes = ["Périola", "Joacir", "Otavio", "Franciele", "Adrielly", "Victória", "Gabriel"];

// Função para retornar um nome aleatório
export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

// Gerando um nome aleatório na importação (não precisa ser feito diretamente aqui)
export const nome = aleatorio(nomes);
