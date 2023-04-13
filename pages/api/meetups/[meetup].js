
async function handler(req, res) {

    //console.log(req.query.meetup);

    let meetupId = req.query.meetup ? req.query.meetup : undefined;

    if(meetupId) {

        const resp = await fetch('http://localhost:3000/api/meetups');
        const data = await resp.json();


        let result = data.find( item => (item.id === meetupId));
        res.status(200).json(result);

    } else {
        res.status(200).json({});
    }
}

export default handler;