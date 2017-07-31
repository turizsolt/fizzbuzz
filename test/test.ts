/**
 * Created by zsiri on 2017.07.31..
 */

import {expect} from 'chai';
import numberToFizzBuzz from '../src/fizzbuzz';

describe("FizzBuzz", () => {
    it("Works on 1", () => {
        expect(numberToFizzBuzz(1)).equal("1");
    });

    it("Works on 4", () => {
        expect(numberToFizzBuzz(4)).equal("4");
    });

    it("Works on 3", () => {
        expect(numberToFizzBuzz(3)).equal("Fizz");
    });

    it("Works on 5", () => {
        expect(numberToFizzBuzz(5)).equal("Buzz");
    });

    it("Works on 15", () => {
        expect(numberToFizzBuzz(15)).equal("FizzBuzz");
    });
});
