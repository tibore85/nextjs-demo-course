import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

function MeetupItem(props) {

    const _router = useRouter();

    if(_router.isFallback) {
        return <>Loading...</>
    }

    return (
        <>
        <Head>
            <title>{'Meetup: ' + props.meetup.title}</title>
        </Head>
        <Link href={`/meetups`}>Back</Link>
        <h2>This is a meetup item...{props.meetup.title}</h2>
        </>
    )
}

export async function getStaticPaths() {

    const resp = await fetch(`http://localhost:3000/api/meetups`);
    const data = await resp.json();

    //console.log(data);

    
    return {
        fallback: true,
        paths: data.map((item) => ({ params: { meetupid: item.id } }))
        // paths: [
            // {
            //     params: {
            //         meetupid: "1"
            //     }
            // },{
            //     params: {
            //         meetupid: "2"
            //     }
            // }
        // ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupid;
    const req = await fetch(`http://localhost:3000/api/meetups/${meetupId}`);
    const resp = await req.json();
    console.log(resp);

    return {
        props: {
            meetup: resp
        }
    };
}

export default MeetupItem;