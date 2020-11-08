import BlogMetadata from './BlogMetadata';

export default class Blog {
    content: string;
    metadata: BlogMetadata
    constructor(content?: string, metadata?: BlogMetadata) {
        this.content = content;
        this.metadata = metadata;
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}
