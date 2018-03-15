const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');

mongoose.connect(dbUri, { useMongoClient: true });

const Track = require('../models/track');
const User = require('../models/user');



User
  .create([{
    firstName: 'Bill',
    lastName: 'Murray',
    username: 'will4',
    photo: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDYyMTU1Mjc1/bill-murray-9542510-1-402.jpg',
    email: 'will@will4.com',
    password: 'password',
    passwordConfirmation: 'password'
  },{

    firstName: 'Lawrence',
    lastName: 'Brown',
    username: 'Loz',
    photo: 'https://i.imgur.com/KPcWolr.png',
    email: 'will@will3.com',
    password: 'password',
    passwordConfirmation: 'password'
  }]
)

  .then((users) => {
    console.log(`${users.length} users created`);
    return Track
      .create([{
        name: 'Only You',
        artist: 'Steve Monite',
        link: 'L-2CyO8pc0E',
        createdBy: users[1]
      }]);
  })
  .then((tracks) => console.log(`${tracks.length} tracks created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());

