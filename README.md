# newsfacts

## Known Bugs:
The vote after making a new vote (a vote made with POST as opposed to PATCH) will throw a Conflict error, and will try to POST instead of PATCH. `(Rating.vue submitVote())`

## Description:
This website allows users to search through a database of news sites and vote on them based off of Bias & Reliability. 

## Demo Version:
[newsfacts.netlify.app](http://newsfacts.netlify.app)
However, because the backend is not currently online, this will not work unless you also host the database on your computer. Even then, the vote data will not be public. This site is just a demo.