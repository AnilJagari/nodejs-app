const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // adjust if app.js is elsewhere

chai.use(chaiHttp);
const expect = chai.expect;

// Example test
describe('GET /', () => {
  it('should return 200', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
