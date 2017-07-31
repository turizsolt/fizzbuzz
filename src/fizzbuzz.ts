/**
 * Created by zsiri on 2017.07.31..
 */

const FizzDivider = 3;
const BuzzDivider = 5;

export default function numberToFizzBuzz(n: number):string{
    const isFizz = n%FizzDivider == 0;
    const isBuzz = n%BuzzDivider == 0;

    if(isFizz && isBuzz) return "FizzBuzz";
    if(isFizz) return "Fizz";
    if(isBuzz) return "Buzz";
    return n.toString();
};
