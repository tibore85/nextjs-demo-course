import Link from 'next/link';

function Meetups(props) {

    return (
        <ul>
            {props.meetupsList.map(meetup => {
                return <li key={meetup.id}>{meetup.title}</li>
            })}
        </ul>
    )
}

export default Meetups;