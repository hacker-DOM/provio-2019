
console.log('hi')
import {assert,S,R} from '../../common'

describe ('Helpers', function () {
  // describe ('starsWithOne ()', function () {
  //   it ('should return true when it starts with a member', function () {
  //     assert (S.startsWithOne ([`abc`, `def`], `defefg`));
  //   });
  //   it (`should return true when it stars with multiple members`,  () => {
  //     assert (S.startsWithOne ([`abc`, `ab`], `abcdef`))
  //   })
  //   it (`should return false when it doesn't start with any members`,  () => {
  //     assert (R.not (S.startsWithOne ([`abc`, `def`], `efg`)))
  //   })
  // });

  // describe ('matchInArr',  () => {
  //   it ('should return true when', async  () => {
  //     assert.deepEqual (S.matchInArr ([`abc`,`def`], `azzzzabczzzzdef`), [5,12])
  //   })
  // });

  describe ('hasMatch',  () => {
    it  ('should return true when there is a match',  () => {
      assert  (S.hasMatch  (/abc/) (`defabcdef`))
    });

    it ('should return false when there is no match',  () => {
      assert  (R.not  (S.hasMatch  (/abc/) (`abdef`)))
    });    
  });
  
  
  describe ('hasMatchInArr',  () => {
    it ('should return true when there is a match',  () => {
      assert (S.hasMatchInArr ([/politics of /, [`united kingdom`]], `politics of united kingdom`))
    });
    
    it ('should return false when there is no match',  () => {
      assert  (R.not  (S.hasMatchInArr  ([/politics of /, [`united kingdom`]], `politics of  unitedaaa kingdom`)))
    });
    
  });
  
  
});