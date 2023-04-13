import { useRef } from "react";

import styles from './NewMeetupForm.module.scss';

function NewMeetupForm(props) {

    const meetupTitleRef = useRef();
    const meetupImageRef = useRef();
    const meetupAddressRef = useRef();
    const meetupDescriptionRef = useRef();

    const onSubmitHandler = (evt) => {
        evt.preventDefault();
        console.log(meetupTitleRef.current.value);
        let meetupData = {
            title: meetupTitleRef.current.value,
            image: meetupImageRef.current.value,
            address: meetupAddressRef.current.value,
            description: meetupDescriptionRef.current.value
        };
        //console.log(meetupData);
        props.addNewMeetup(meetupData);
    }

    return (
        <form id={styles.newMeetup} onSubmit={onSubmitHandler}>
            <input type="text" ref={meetupTitleRef} />
            <input type="text" ref={meetupImageRef} />
            <input type="text" ref={meetupAddressRef} />
            <input type="text" ref={meetupDescriptionRef} />
            <button type="submit">Save</button>
        </form>
    )
}

export default NewMeetupForm;