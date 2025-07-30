const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);
chai.should();

describe("App", () => {
  it("should return welcome message", (done) => {
    chai.request(app)
        .get('/')
        .end((err, res) => {
            res.should.have.status(200);
            res.text.should.equal('Hello from Node.js CI/CD App!');
            done();
        });
  });
});
