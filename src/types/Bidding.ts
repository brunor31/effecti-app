import type { Item } from './Item';
import type { Word } from './Word';
import type { Attachment } from './Attachment';

export interface Bidding{
    id: number,
    objeto: string,
    modalidade: string,
    dataPublicacao: string,
    dataInicialProposta: string,
    dataFinalProposta: string,
    url: string,
    portal: string,
    uasg: number,
    unidadeGestora: string,
    srp: boolean,
    uf: string,
    processo: string,
    favorito: boolean,
    perfilNome: string,
    orgao: string,
    itens: Item[],
    anexos: Attachment[],
    palavras: Word[]
}