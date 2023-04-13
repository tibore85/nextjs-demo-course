import Head from 'next/head';
import Link from 'next/link';


function HomezPage() {
    return (
        <>  
            <Head>
                <title>React meetups</title>
            </Head>
            <h1>Alma</h1>
            <Link href="meetups">Meetup list</Link>
        </>
    )
}

export default HomezPage;