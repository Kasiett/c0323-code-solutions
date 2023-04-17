/* global doggo, expect */

describe('doggo', function () {

  describe('doggo.bork()', function () {

    it('returns "bork! bork! bork!"', function () {
      const result = doggo.bork();
      expect(result).to.equal('bork! bork! bork!');
    });

  });

  describe('doggo.lick()', function () {

    it('returns "mlem"', function () {
      const result = doggo.lick();
      expect(result).to.equal('mlem');
    });

  });

});
