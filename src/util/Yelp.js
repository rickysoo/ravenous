const apiKey = 'x0IwEwk9ERo7iw7YWm7-K3e5Br8BtLJD2Qb0Kd-BKIaX7jExYGq7GvM0RPIr92pXucmWIe2ZLbhMkPId2gLHe7FxnIb2Rq8ntYR4sdpK001EcsWyPQP1FM2rGHmEXnYx';

const Yelp = {

};

function search(term, location, sortBy) {
    return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, );
}

