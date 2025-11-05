// we have written tests inside the tests folder but 
// jest can find all the file which have extension like .test.js in the root folder anywherew is present 

// if you are using importp(ES Module) then you have to 
// create a file called  jest.config.js and write but remember dont use module somthing like this 
const { describe, it, expect } = require('@jest/globals'); // optional

const { sum , mul} = require('../index');

describe('Testing sum module', ()=>{

    it('should sum 1 and 2 correctly', ()=>{
        const finalAnswer= sum(1,2);
        expect(finalAnswer).toBe(3);
    })

    it('should return the sum of negative number correctly', ()=>{
        const finalAnswer= sum(-2,-5);
        expect(finalAnswer).toBe(-7);
    })
});

describe('Testing mul module', ()=>{

    it('should mul 1 and 2 corr ectly', ()=>{
        const finalAnswer= mul(1,2);
        expect(finalAnswer).toBe(2);
    })

    it('should return the mul of negative number correctly', ()=>{
        const finalAnswer= mul(-2,5);
        expect(finalAnswer).toBe(-10);
    })
});




