
import { useRouter } from 'next/router';

function Error() {
    const router = useRouter();
    // Make sure we're in the browser
    if (typeof window !== 'undefined') {
        const userRequest = router.asPath.split("/").join('-');
        const baseSixty4 = Buffer.from(userRequest).toString('base64');
        router.push(`/recommendations?code=${baseSixty4}`);
    }
    return (
        <div></div>
    );
}

export default Error;