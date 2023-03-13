export interface NewsType {
    source :Source
    author :string
    title :string
    description :object
    url :string
    urlToImage :object
    publishedAt :string
    content :object
}

export interface Source {
    id: string;
    name: string;
}
