/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE Lab Week 06
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from week6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('Week 6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from week6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/
  describe('arrayOfNumbers Function', () => {
    it('Should return a numbered array sorted from lowest to highest', () => {
      let arrayOfNumbers = [1, 5, 3, 2, 4];
      arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b);
      assert.deepEqual(arrayOfNumbers, [1,2,3,4,5]);
    });
    it('#should fail and return as an error', () => {
      let arrayOfNumbers = [1, 5, 3, 2, 4];
      arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b);
      assert.throws(arrayOfNumbers, [1,2,2,4,5]);
    });
  });
  describe('Wallet Class Test', () => {
    it('should add money to this.money variable in class.', () => {
      class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }
      }
      
      const myWallet = new Wallet(100);
      expect(myWallet.money).to.equal(100);
    })
    it('should subtract from the total using the removeMoney mehtod.', () => {
      class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }
        removeMoney(amount) {
          this.money -= amount
        }
      }
      
      const myWallet = new Wallet(100);
      myWallet.removeMoney(14.99);
      expect(myWallet.money).to.equal(85.01);
    })
    it('should subtract from the total using the removeMoney mehtod or add to the total with addMoney method.', () => {
      class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }
      
        addMoney(amount) {
          this.money += amount
        }
      
        removeMoney(amount) {
          this.money -= amount
        }
      }
      
      const myWallet = new Wallet(100);
      myWallet.removeMoney(14.99);
      myWallet.addMoney(3);
      expect(myWallet.money).to.equal(88.01)
    })
    it('#should fail and return an error.', () => {
      class Wallet {
        constructor(startingMoney) {
          this.money = startingMoney
        }
      
        addMoney(amount) {
          this.money += amount
        }
      
        removeMoney(amount) {
          this.money -= amount
        }
      }
      
      const myWallet = new Wallet(100);
      myWallet.removeMoney(14.99);
      myWallet.addMoney(3);
      expect(myWallet.money).to.equal(85.01)
    })
  })
  describe('dayOfTheWeek Switch Function', () => {
    it('should output a different day when a different number is entered into the num varialble. If no valid option entered then console logs an error', () => {
      const dayOfTheWeek = (num) => {
        let day = '';
        switch (num) {
          case 1:
            day = 'Monday';
            break;
          case 2:
            day = 'Tuesday';
            break;
          case 3:
            day = 'Wednesday';
            break;
          case 4:
            day = 'Thursday';
            break;
          case 5:
            day = 'Friday';
            break;
          case 6:
            day = 'Saturday';
            break;
          case 7:
            day = 'Sunday';
            break;
          default:
            console.log('Err. Something went wrong.')
        }
        return day;
      }
      expect(dayOfTheWeek(5)).to.equal('Friday')
    })
    it('#Should fail and return an error', () => {
      const dayOfTheWeek = (num) => {
        let day = '';
        switch (num) {
          case 1:
            day = 'Monday';
            break;
          case 2:
            day = 'Tuesday';
            break;
          case 3:
            day = 'Wednesday';
            break;
          case 4:
            day = 'Thursday';
            break;
          case 5:
            day = 'Friday';
            break;
          case 6:
            day = 'Saturday';
            break;
          case 7:
            day = 'Sunday';
            break;
          default:
            console.log('Err. Something went wrong.')
        }
        return day;
      }
      expect.fail(dayOfTheWeek(5), 'Saturday', 'Err. Something went wrong')
    })
  });
  describe('onlyWizards Function', () => {
    it('should return an array of objects where the isAWizard variable is equal to true', () => {
      const movieCharacters = [
        {
          name: 'Howl',
          isAWizard: true,
          quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
        },
        {
          name: 'Kalcifer',
          isAWizard: false,
          quote: `I don't cook! I'm a scary and powerful fire demon!`,
        },
        {
          name: 'Gandalf',
          isAWizard: true,
          quote: `You shall not pass!`,
        },
        {
          name: 'Luke Skywalker',
          isAWizard: false,
          quote: `May the Force be with you.`,
        },
      ]
      
      function onlyWizards(arrayOfCharacters) {
        return arrayOfCharacters.filter((character) => character.isAWizard == true)
      }
      assert.deepEqual(onlyWizards(movieCharacters),[{
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      }])
    })
    it('#Should fail and return an error', () => {
      const movieCharacters = [
        {
          name: 'Howl',
          isAWizard: true,
          quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
        },
        {
          name: 'Kalcifer',
          isAWizard: false,
          quote: `I don't cook! I'm a scary and powerful fire demon!`,
        },
        {
          name: 'Gandalf',
          isAWizard: true,
          quote: `You shall not pass!`,
        },
        {
          name: 'Luke Skywalker',
          isAWizard: false,
          quote: `May the Force be with you.`,
        },
      ]
      
      function onlyWizards(arrayOfCharacters) {
        return arrayOfCharacters.filter((character) => character.isAWizard == true)
      }
      assert.fail(onlyWizards(movieCharacters),[
        {
          name: 'Kalcifer',
          isAWizard: false,
          quote: `I don't cook! I'm a scary and powerful fire demon!`,
        },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      }], 'Err. One of more of the objects is not equal to true')
    })
  });
})
