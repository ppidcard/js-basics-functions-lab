
const distanceFromHqInBlocks = function (location){
    return Math.abs(location - 42);
}

const distanceFromHqInFeet = function(location){
  return Math.abs(location - 42) * 264;
}

const distanceTravelledInFeet = function(locationStart, locationEnd){
  return Math.abs(locationStart - locationEnd) * 264;
}

const calculatesFarePrice = function(locationStart, locationEnd){
  let distanceTravelled;
  let fare;
  distanceTravelled = Math.abs(locationStart - locationEnd) * 264;
  if (distanceTravelled <= 400){
    fare = 0;
  } else if(distanceTravelled >400 && distanceTravelled <=2000){
    fare = (distanceTravelled - 400) * 0.02;
  } else if(distanceTravelled >2000 && distanceTravelled<=2500){
    fare = 25;
  }else {
    fare = 'cannot travel that far';
  }
  return fare;
}
/*



  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });
  });
});
*/