import Link from 'next/link';

function Meetups(props) {

    return (
        <ul>
            {props.meetupsList.map(meetup => {
                return <li key={meetup.id}><Link href={`/meetups/${meetup.id}`}>{meetup.title}</Link></li>
            })}
        </ul>
    )
}

export default Meetups;