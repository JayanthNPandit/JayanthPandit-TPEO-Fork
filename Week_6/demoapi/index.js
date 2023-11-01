import firebase from 'firebase/app';

const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

const validateTweetLength = (req, res, next) => {
    const tweet = req.body.tweet;
    if (tweet.length > 140) {
        res.status(400).send('Tweet too long');
    } else {
        next();
    }
}


const tweets = [
    {
        id: 1,
        user: "Zara",
        tweet: "Hello"
    },
    {
        id: 2,
        user: "JJ",
        tweet: "Build a wall"
    }
]

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/tweets', (req, res) => {
    const doc = await db.collection('tweets').get();
    res.send(doc.data());
});

app.get('/tweets/:user', (req, res) => {
    const doc = await db.collection('tweets').doc("tweets").get();
    const tweets = doc.data().tweets
    var tweet = tweets.find(tweet => tweet.user === req.params.user);
    if (!tweet) res.status(404).send('Tweet not found');
    res.send(tweet);
});

app.post('/login', (req, res) => {
    res.send('Login Success');
});

app.post('api/tweets', validateTweetLength, async (req, res) => {
    var tweet = {
        id: tweets.length + 1,
        user: req.body.user,
        tweet: req.body.tweet
    }

    const tweetRef = db.collection('tweets').doc('tweets');

    const currTweets = (await tweetRef.get()).data().tweets; // get current tweet in one line isntead of 2 but you dont have a snapshot reference if you want more data from snapshot later on

    const snapshot = await tweetRef.get();
    const currTweets2 = snapshot.data().tweets;
    currTweets.push(tweet);
    await tweetRef.update({ tweets: currTweets });
    res.send(tweet);

    // tweets.push(tweet);
    // res.send(tweet);
});

app.delete('/tweets/:id', (req, res) => {
    const tweet = tweets.find(tweet => tweet.id === parseInt(req.params.id));
    if (!tweet) res.status(404).send('Tweet not found');
    else {
        var removed = tweets[req.params.id - 1];
        console.log(removed)
        const index = tweets.indexOf(tweet);
        tweets.splice(index, 1);
        res.send(tweet);
    }

    const index = tweets.indexOf(tweet);
    tweets.splice(index, 1);

    res.send(tweet);
});


const port = process.env.PORT || 3000;

app.listen(3000, () => console.log('Server is running on port 3000'));