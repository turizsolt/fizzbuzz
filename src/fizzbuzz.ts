/**
 * Created by zsiri on 2017.07.31..
 */

export default function numberToFizzBuzz(n: number):string{
    const isFizz = n%3 == 0;
    const isBuzz = n%5 == 0;

    if(isFizz && isBuzz) return "FizzBuzz";
    if(isFizz) return "Fizz";
    if(isBuzz) return "Buzz";
    return n.toString();
};
