const mongoose = require("mongoose");
const db = require("./models");

mongoose.connect("mongodb://user:admin1!@ds359847.mlab.com:59847/heroku_tj31s4wl").then(data=>console.log(data)).catch(err=>console.log(err))


//each states election info
const myinfoSeed = [
  {
    state: "Alabama",
    election_date: "March 3, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Alaska",
    election_date: "August 18, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Arizona",
    election_date: "August 4, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Arkansas",
    election_date: "March 20, 2020",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "California",
    election_date: "March 3, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Colorado",
    election_date: "March 3, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Connecticut",
    election_date: "September 10, 2019",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Delaware",
    election_date: "September 15, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Florida",
    election_date: "August 18, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Georgia",
    election_date: "March 24, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Hawaii",
    election_date: "August 8, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Idaho",
    election_date: "May 19, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Illinois",
    election_date: "November 3, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Indiana",
    election_date: "May 19, 2020",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Iowa",
    election_date: "May 19, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Kansas",
    election_date: "August 6, 2019",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Kentucky",
    election_date: "November 5, 2019",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Louisiana",
    election_date: "October 12, 2019",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Maine",
    election_date: "March 13, 2020",
    mail_voting: "Yes",
    early_voting: "No"
  },
  {
    state: "Maryland",
    election_date: "April 28, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Massachusetts",
    election_date: "September 10, 2019",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Michigan",
    election_date: "May 19, 2020",
    mail_voting: "Yes",
    early_voting: "No"
  },
  {
    state: "Minnesota",
    election_date: "August 13, 2019",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Mississippi",
    election_date: "August 6, 2019",
    mail_voting: "Yes",
    early_voting: "No"
  },
  {
    state: "Missouri",
    election_date: "August 4, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Montana",
    election_date: "November 3, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Nebraska",
    election_date: "May 12, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Nevada",
    election_date: "February 22, 2020",
    mail_voting: "Yes",
    early_voting: "No"
  },
  {
    state: "New Hampshire",
    election_date: "February 11, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "New Jersey",
    election_date: "November 5, 2019",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "New Mexico",
    election_date: "June 2, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "New York",
    election_date: "November 5, 2019",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "North Carolina",
    election_date: "September 10, 2019",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "North Dakota",
    election_date: "June 9, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Ohio",
    election_date: "May 7, 2019",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Oklahoma",
    election_date: "March 3, 2020",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Oregon",
    election_date: "May 19, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Pennsylvania",
    election_date: "May 21, 2019",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "Rhode Island",
    election_date: "September 15, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "South Carolina",
    election_date: "February 29, 2020",
    mail_voting: "No",
    early_voting: "No"
  },
  {
    state: "South Dakota",
    election_date: "June 2, 2020",
    mail_voting: "Yes",
    early_voting: "No"
  },
  {
    state: "Tenessee",
    election_date: "August 1, 2019",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Texas",
    election_date: "November 5, 2019",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Utah",
    election_date: "August 13, 2019",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "Vermont",
    election_date: "March 3, 2020",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Virginia",
    election_date: "November 5, 2019",
    mail_voting: "Yes",
    early_voting: "No"
  },
  {
    state: "Washington",
    election_date: "August 6, 2019",
    mail_voting: "Yes",
    early_voting: "Yes"
  },
  {
    state: "West Virginia",
    election_date: "May 12, 2020",
    mail_voting: "No",
    early_voting: "Yes"
  },
  {
    state: "Wisconsin",
    election_date: "February 18, 2020",
    mail_voting: "Yes",
    early_voting: "No"
  },
  {
    state: "Wyoming",
    election_date: "November 3, 2020",
    mail_voting: "Yes",
    early_voting: "Yes"
  }
];

console.log(db)

db.Myinfo
  .remove({})
  .then(() => db.Myinfo.collection.insertMany(myinfoSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });