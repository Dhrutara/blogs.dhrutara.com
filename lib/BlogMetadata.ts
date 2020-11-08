export default class BlogMetadata {
    slug: string;
    title: string;
    author: string;
    description: string;
    keywords: string;
    publishedDate: string;
    lastModifiedDate: string;

    constructor(slug?: string, title?: string, author?: string, description?: string, keywords?: string, publishedDate?: string, lastModifiedDate?: string) {
        this.slug = slug;
        this.title = title || '';
        this.author = author || '';
        this.description = description || '';
        this.keywords = keywords || '';
        this.publishedDate = publishedDate || '';
        this.lastModifiedDate = lastModifiedDate || '';
    }
    public toString(): string {
        return JSON.stringify(this);
    }
}
