import Blog from './Blog';

export default class ServiceResponse {
    blog: Blog;
    error: string;
    constructor(blog?: Blog, error?: string) {
        this.blog = blog;
        this.error = error;
    }

    public toString(): string {
        return JSON.stringify(this);
    }
}
