export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export interface articleBlockBase {
    type: ArticleBlockType;
    id: string;
}

export interface ArticleCodeBlock extends articleBlockBase {
    type: ArticleBlockType.CODE,
    code: string,
}

export interface ArticleImageBlock extends articleBlockBase {
    type: ArticleBlockType.IMAGE,
    src: string,
    title: string,
}

export interface ArticleTextBlock extends articleBlockBase {
    type: ArticleBlockType.TEXT,
    title?: string,
    paragraphs: string[],
}

export type ArticleBlock = ArticleCodeBlock | ArticleTextBlock | ArticleImageBlock;

export enum ArticleType {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS',
}

export interface Article {
    'id': string,
    'title': string,
    'subtitle': string,
    'img': string,
    'views': number,
    'createdAt': string,
    'type': ArticleType[],
    'blocks': ArticleBlock[],
}
