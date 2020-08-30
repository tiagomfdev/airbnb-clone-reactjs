import React from 'react'
import './styles.css'

import Banner from '../../components/Banner'
import Card   from '../../components/Card'


const cardInfos = [
    {
        src: 'https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720',
        title: 'Online Experiences',
        description: 'Unique activities we can do together, led by a world of hosts.',
    },
    {
        src: 'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720',
        title: 'Unique stays',
        description: 'Spaces that are more than just a place to sleep.',
    },
    {
        src: 'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720',
        title: 'Entire homes',
        description: 'Comfortable private places, with room for friends or family.',
    },
    {
        src: 'https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg',
        title: '3 Bedroom Flat in Bournemouth',
        description: 'Superhost with a stunning view of the beachside in Sunny Bournemouth',
        price: '£130/night',
    },
    {
        src: 'https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg',
        title: 'Penthouse in London',
        description: 'Enjoy the amazing sights of London with this stunning penthouse',
        price: '£350/night',
    },
    {
        src: 'https://media.nomadicmatt.com/2018/apartment.jpg',
        title: '1 Bedroom apartment',
        description: 'Superhost with great amenities and a fabolous shopping complex nearby',
        price: '£70/night',
    }
]

function Home() {
    return (
        <div className='home'>            
            <Banner />

            <div className='home_section'>
                <Card 
                    src={cardInfos[0].src}
                    title={cardInfos[0].title}
                    description={cardInfos[0].description}
                />
                <Card 
                    src={cardInfos[1].src}
                    title={cardInfos[1].title}
                    description={cardInfos[1].description}
                />
                <Card 
                    src={cardInfos[2].src}
                    title={cardInfos[2].title}
                    description={cardInfos[2].description}
                />
            </div>

            <div className='home_section'>
                <Card 
                    src={cardInfos[3].src}
                    title={cardInfos[3].title}
                    description={cardInfos[3].description}
                    price={cardInfos[3].price}
                />
                <Card 
                    src={cardInfos[4].src}
                    title={cardInfos[4].title}
                    description={cardInfos[4].description}
                    price={cardInfos[4].price}
                />
                <Card 
                    src={cardInfos[5].src}
                    title={cardInfos[5].title}
                    description={cardInfos[5].description}
                    price={cardInfos[5].price}
                />
            </div>

        </div>
    )
}


export default Home
 