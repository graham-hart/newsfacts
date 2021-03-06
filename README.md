# newsfacts

## Known Bugs:
The vote after making a new vote (a vote made with POST as opposed to PATCH) will throw a Conflict error, and will try to POST instead of PATCH. (Rating.vue submitVote())