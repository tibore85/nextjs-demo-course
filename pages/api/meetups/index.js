
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

function handler(req, res) {
    if(req.method === "POST") {

        let data = req.body;
        data['id'] = (dmyData.length + 1).toString();
        console.log(data);
        dmyData.push(data);
        
        res.status(200).json({status: "success"});

    } else {

        //console.log('meetup index');

        res.status(200).json(dmyData);
    }


}

export default handler;