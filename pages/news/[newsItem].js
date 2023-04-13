import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

function NewsDetailPage() {

    const pageUrl = useRouter()

    let page = "newsitemdetail";

    return (
        <>
        <Link href="/news">Back</Link>
        <h1>News alma {pageUrl.query.newsItem}</h1>
        </>
    )
}

export default NewsDetailPage;