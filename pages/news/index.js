import Link from 'next/link';


function NewsPage() {
    return (
        <>
            <h1>Check out my news list here</h1>
            <ul>
                <li><Link href="/news/this-is-a-news">This is a news</Link></li>
                <li><Link href="/news/this-is-also-a-news">This is a news too hey...</Link></li>
            </ul>
        </>
    )
}

export default NewsPage;