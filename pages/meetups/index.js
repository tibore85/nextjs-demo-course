import { MongoClient } from 'mongodb';

import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Meetups from '../../components/meetups/Meetups';

const DUMMY_MEETUPS = [
    {
        id: 1,
        title: 'Meetup #1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/BoraBora_SEtienne.jpg',
        address: 'ivo lole 54, Temerin, 21232',
        description: 'this is a meetup description'
    },
    {
        id: 2,
        title: 'Meetup #2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/BoraBora_SEtienne.jpg',
        address: 'ivo lole 54, Temerin, 21232',
        description: 'this is a meetup description'
    },
    {
        id: 3,
        title: 'Meetup #3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/BoraBora_SEtienne.jpg',
        address: 'ivo lole 54, Temerin, 21232',
        description: 'this is a meetup description'
    }
];

function MeetupsPage(props) {

    // useEffect(() => {
    //     console.log(window);
    // }, [])

    // const [loadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect(() => {
    //     // send HTTP request to fetch data
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, [])
    
    return (
        <>
        <Head>
            <title>Meetup List</title>
        </Head>
        <div className='meetups'>
            <h1>List of meetups</h1>
            <Meetups meetupsList={props.meetups}></Meetups>

            <hr/>
            <Link href={'meetups/new-meetup'}>New Meetup</Link>
        </div>
        </>
    )
}

export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://tibore85:rw7Kqo2F5hTrGkGl@cluster0.qna1i7z.mongodb.net/nextjsdemo?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.find().toArray();

    // const resp = await fetch('http://localhost:3000/api/meetups');
    // const data = await resp.json();

    return {
        props: {
            meetups: result.map( item => ({
                id: item._id.toString(),
                title: item.title,
                address: item.address,
                description: item.description,
                image: item.image
            }))
        },
        revalidate: 1
    };
}

export default MeetupsPage;