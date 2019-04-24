const GitHub = require('../lib/github');

describe('Integration with GitHub API', () => {  
    let github;
  
    beforeAll(() => {
      github = new GitHub({
        accessToken: process.env.ACCESS_TOKEN,
        baseURL: 'https://api.github.com',
      });
    });
  
    test('Get a user', async () => {
      const res = await github.getUser('Hoonja');
      expect(res).toEqual(
        expect.objectContaining({
          login: 'Hoonja',
        })
      );
    });
  });
