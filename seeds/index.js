const mongoose = require('mongoose')
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground')
async function main(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/yelprevamp');
        await console.log("Connected!")
    }catch(error){
        console.log(error)
    }
}
main()

const sample = array => array[Math.floor(Math.random() * array.length)];
const price=Math.floor(Math.random()*20) + 10;
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            author: "64e465dd553092733d90a665",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/drkl0ytrl/image/upload/v1692762156/YelpCamp/eq9ckhhz3ckebb4dhaxd.jpg',
                    filename: 'YelpCamp/eq9ckhhz3ckebb4dhaxd'
                },
                {
                    url: 'https://res.cloudinary.com/drkl0ytrl/image/upload/v1692761946/YelpCamp/v7lb4tlwm2mwxp3gim2i.jpg',
                    filename: 'YelpCamp/v7lb4tlwm2mwxp3gim2i'
                }
            ]
        })
        await camp.save();
}
}
seedDB().then(() =>{
mongoose.connection.close()
});