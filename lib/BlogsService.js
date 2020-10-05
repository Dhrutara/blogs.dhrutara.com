import axios from 'axios';

export async function getBlog(blogSlug) {
    const url = `https://dhrutaramd.blob.core.windows.net/content/${blogSlug}`;

    try {
        const result = await axios.get(url, {});
        let blogData = {
            data:`${unescape(result.data)}`
        };
        console.log(blogData);
        return blogData;
    } catch (err) {
        return err;
    }
}