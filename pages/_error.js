
import { useRouter } from 'next/router';

function Error() {
    const router = useRouter();
    // Make sure we're in the browser
    if (typeof window !== 'undefined') {
        router.push('/recommendations')
    }

    return (
        <div></div>
    );
}

export default Error;