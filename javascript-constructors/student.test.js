/* global Student, expect */

describe('Student', function () {

  beforeEach(function () {
    expect(Student).to.be.a('function');
  });

  it('has a getFullName() prototype method', function () {
    expect(Student).to.respondTo('getFullName');
  });

  it('has a getIntroduction() prototype method', function () {
    expect(Student).to.respondTo('getIntroduction');
  });

  describe('new Student(firstName, lastName, subject)', function () {

    it('has firstName, lastName, and subject properties', function () {
      const grace = new Student('Grace', 'Hopper', 'compilers');
      expect(grace)
        .to.have.own.property('firstName')
        .that.equals('Grace');
      expect(grace)
        .to.have.own.property('lastName')
        .that.equals('Hopper');
      expect(grace)
        .to.have.own.property('subject')
        .that.equals('compilers');

      const dennis = new Student('Dennis', 'Ritchie', 'systems programming');
      expect(dennis)
        .to.have.own.property('firstName')
        .that.equals('Dennis');
      expect(dennis)
        .to.have.own.property('lastName')
        .that.equals('Ritchie');
      expect(dennis)
        .to.have.own.property('subject')
        .that.equals('systems programming');
    });

    describe('student.getFullName()', function () {

      it('returns the full name of the student', function () {
        const edsger = new Student('Edsgar', 'Dijkstra', 'computer science');
        const edsgerFullName = edsger.getFullName();
        expect(edsgerFullName).to.equal('Edsgar Dijkstra');

        const donald = new Student('Donald', 'Knuth', 'algorithms');
        const donaldFullName = donald.getFullName();
        expect(donaldFullName).to.equal('Donald Knuth');
      });

    });

    describe('student.getIntroduction()', function () {

      it('returns an introduction for the student', function () {
        const grady = new Student('Grady', 'Booch', 'software engineering');
        const gradyIntroduction = grady.getIntroduction();
        expect(gradyIntroduction).to.equal(
          'Hello, my name is Grady Booch and I am studying software engineering.'
        );

        const james = new Student('James', 'Gosling', 'language design');
        const jamesIntroduction = james.getIntroduction();
        expect(jamesIntroduction).to.equal(
          'Hello, my name is James Gosling and I am studying language design.'
        );
      });

    });

  });

});
