const request = require('supertest');
const app = require("../server");

//Logging in with a valid account
test('It should log in the user and respond with a 200 status code', async () => {
    const userData = {username: 'pp@pp.com', password: 'pp'};
    const response = await request(app)
      .post('/authentication/login')
      .send(userData);
    expect(response.statusCode).toBe(200);
});

//Logging in with a valid account with wrong password
test('It should not log in the user with invalid password and respond with a 401 status code', async () => {
    const userData = {username: 'pp@pp.com', password: 'ppp'};
    const response = await request(app)
      .post('/authentication/login')
      .send(userData);
    expect(response.statusCode).toBe(401);
});

//Logging in with an invalid account
test('It should NOT log in the user and respond with a 401 status code', async () => {
    const userData = {username: 'invalid@invalid.com', password: 'invalid'};
    const response = await request(app)
      .post('/authentication/login')
      .send(userData);
    expect(response.statusCode).toBe(401);
});

//Registration with a valid email (one that does not exist)
test('It should register the user and respond with a 200 status code', async () => {
    const userData = {username: 'valid@valid.com', password: 'valid'};
    const response = await request(app)
      .post('/authentication/register')
      .send(userData);
    expect(response.statusCode).toBe(200);
});

//Registration with an invalid email (valid exists now, so it should not be registered)
test('It should not let the user register and respond with 401 status code', async () => {
    const userData = {username: 'valid@valid.com', password: 'valid'};
    const response = await request(app)
      .post('/authentication/register')
      .send(userData);
    expect(response.statusCode).toBe(401);
});

//Delete a user's account when the user id is provided
test('Users account gets deleted', async () => {
    const response = await request(app)
      .delete('/users/deleteAccount')
      .query({userID: "6424e506f1f0669ea3046d1c"});
    expect(response.statusCode).toBe(200);
});

//Change password
test('It should let the user change the password', async () => {
    const userData = {userName: 'valid@valid.com', newPassword: 'newvalid'};
    const response = await request(app)
      .post('/authentication/editPassword')
      .send(userData);
    expect(response.statusCode).toBe(200);
});

//View posts from user
test('It should let the user view their posts', async () => {
    const response = await request(app)
      .get('/users/userPosts')
      .query({userID: "641bd57f519d381c9e256cf1"});
    expect(response.statusCode).toBe(200);
});

//View feed

test('It should let the user view their feed', async () => {
    const response = await request(app)
      .get('/users/postsFromFeed')
      .query({userID: "641bd57f519d381c9e256cf1"});
    expect(response.statusCode).toBe(200);
})

//View liked posts

test('It should let the user view their liked posts', async () => {
    const response = await request(app)
      .get('/users/getLikedPosts')
      .query({userID: "641bd57f519d381c9e256cf1"});
    expect(response.statusCode).toBe(200);
})

//View a specific style

test('It should let the user view their streetwear styles', async () => {
    const response = await request(app)
      .get('/users/postsFromStyle')
      .query({stylename: "Streetwear"});
    expect(response.statusCode).toBe(200);
})










