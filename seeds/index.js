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
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price
        })
        await camp.save();
}
}
seedDB().then(() =>{
mongoose.connection.close()
});