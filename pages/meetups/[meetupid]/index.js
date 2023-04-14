import { MongoClient, ObjectId } from "mongodb";

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

    // const resp = await fetch(`http://localhost:3000/api/meetups`);
    // const data = await resp.json();

    const client = await MongoClient.connect('mongodb+srv://tibore85:rw7Kqo2F5hTrGkGl@cluster0.qna1i7z.mongodb.net/nextjsdemo?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find({}, { _id: 1 }).toArray();
    
    return {
        fallback: false,
        paths: result.map((item) => ({ params: { meetupid: item._id.toString() } }))
        // paths: [
        //     {
        //         params: {
        //             meetupid: "1"
        //         }
        //     },{
        //         params: {
        //             meetupid: "2"
        //         }
        //     }
        // ]
    }
}

export async function getStaticProps(context) {

    const meetupId = context.params.meetupid;

    const client = await MongoClient.connect('mongodb+srv://tibore85:rw7Kqo2F5hTrGkGl@cluster0.qna1i7z.mongodb.net/nextjsdemo?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.findOne({ _id: new ObjectId(meetupId) });

    //console.log(result);

    // const req = await fetch(`http://localhost:3000/api/meetups/${meetupId}`);
    // const resp = await req.json();
    // // console.log(resp);

    return {
        props: {
            meetup: {
                id: result._id.toString(),
                title: result.title,
                image: result.image,
                address: result.address
            }
        }
    };
}

export default MeetupItem;