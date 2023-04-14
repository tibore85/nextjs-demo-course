
const dmyData = [
    {
        id: "1",
        title: 'Meetup #1',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/BoraBora_SEtienne.jpg',
        address: 'ivo lole 54, Temerin, 21232',
        description: 'this is a meetup description'
    },
    {
        id: "2",
        title: 'Meetup #2',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/BoraBora_SEtienne.jpg',
        address: 'ivo lole 54, Temerin, 21232',
        description: 'this is a meetup description'
    },
    {
        id: "3",
        title: 'Meetup #3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/BoraBora_SEtienne.jpg',
        address: 'ivo lole 54, Temerin, 21232',
        description: 'this is a meetup description'
    }
]


async function handler(req, res) {

    //console.log(req.query.meetup);

    let meetupId = req.query.meetup ? req.query.meetup : undefined;

    if(meetupId) {

        // const resp = await fetch('http://localhost:3000/api/meetups');
        // const data = await resp.json();
        const data = dmyData;

        let result = data.find( item => (item.id === meetupId));
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(404);
        }
        


    } else {
        res.status(200).json({});
    }
}

export default handler;