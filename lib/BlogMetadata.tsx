export default class BlogMetadata {
    title: string;
    author: string;
    description: string;
    keywords: string;
    publishedDate: string;
    lastModifiedDate: string;

    constructor(title?: string, author?: string, description?: string, keywords?: string, publishedDate?: string, lastModifiedDate?: string) {
        this.title = title || '';
        this.author = author || '';
        this.description = description || '';
        this.keywords = keywords || '';
        this.publishedDate = publishedDate || '';
        this.lastModifiedDate = lastModifiedDate || '';
    }

    /* public get title(): string { return this.title }
    public get author(): string { return this.author };
    public get description(): string { return this.description }
    public get keywords(): string { return this.keywords }
    public get publishedDate(): string { return this.publishedDate }
    public get lastModifiedDate(): string { return this.lastModifiedDate }
     */
    public toString(): string {
        return JSON.stringify(this);
    }
}
