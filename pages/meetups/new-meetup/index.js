import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

    // useEffect(() => {
    //     console.log(window);
    // }, [])

    const router = useRouter();

    async function addNewMeetup(data) {
        
        const response = await fetch('/api/meetups', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const res = await response.json();
        router.push('/meetups');
    }

    return(
        <>
            <h1>Add new meetup</h1>
            <NewMeetupForm addNewMeetup={addNewMeetup} />
        </>
    )
}

export default NewMeetupPage;