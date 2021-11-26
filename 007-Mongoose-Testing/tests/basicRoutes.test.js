const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const chatHttp = require("chai-http");
const { response } = require("express");
const { Book } = require("../persistence/book.js");

const server = require("../server.js");

chai.use(chaiHttp);

const testBook = {
  title: "test book",
  author: "lorem ipsum",
  yearReleased: 2000,
  isHardBack: false,
};

describe("basic testing", function () {
  it("testing /test route", function (done) {
    chai
      .request(server)

      .get("/library/test")
      .end((err, response) => {
        if (err) {
          console.log("something is wrong");
          done(err);
        }
        expect(response).to.have.status(202);
        expect(response).to.not.be.null;
        expect(response).to.have.property("text", "Test Accessed");
        done();
      });
  });
  it("testing the /create route", function (done) {
    chai
      .request(server)
      .post("/library/create")
      .send(testBook)
      .end((err, response) => {
        if (err) {
          console.log("Something is wrong");
          done(err);
        }
        console.log(response.text);
        expect(err).to.be.null;
        expect(response).to.have.status(201);
        expect(response.text).to.be.a("String");
        expect(response.text).to.equal(`${testBook.title} saved to database!`);
        done();
      });
  });
  it("testing the /getall Route", function (done) {
    chai
      .request(server)
      .get("/library/getAll")
      .end((err, response) => {
        if (err) {
          console.log("Something is wrong");
          done(err);
        }
        const body = response.body;
        console.log(body);
        expect(response).to.have.status(200);
        expect(body).to.not.be.null;

        body.map((book) => {
          expect(book).to.contain.keys("title");
          expect(book).to.be.a("Object");
        });
        done();
      });
  });

  after(function (done) {
    Book.deleteMany({}).then(() => {
      done();
    });
  });
});
