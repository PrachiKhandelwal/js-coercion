//ToNumber() abstract method

console.log(2 - 9); //-7
console.log(2 - null); //2-0=2
console.log(2 - undefined); //2-NaN=NaN
console.log(2 - "435"); //2-435=433
console.log(2 - "4e35"); //2-4*10^35(4e35)= -4e35
console.log(2 - "4e3aw5"); //2-NaN=NaN
console.log(1 - "0xa"); //-9 !!! => why?? bcz 0xa is a hexadecimal number and binary equivalent of this is 10

//ToPrimitive abstract method
const obj = {};
console.log(obj.toString()); //returns a string "[object Object]"
console.log(obj.valueOf()); //returns the object itself
console.log(10 - obj); //subtraction operator uses toNumber() which internally uses toPrimitive() for object input. For toNumber(), toPrimitive() uses "number" as hint which make methodNames array as [valueOf,toString]. valueOf() returns an object, so it tries to use toString() method in next iteration which returns a string. So toNumber(obj) returns a string "[object Object]". Then toNumber() method  reruns toNumber() again on this result i.e. toNumber([object Object]) which evaluates to NaN

//hence it becomes 10-NaN which results in NaN

let obj1 = { x: 9, y: 10 };
console.log(100 - obj1); //100-NaN =  NaN

let obj2 = {
  x: 7,
  valueOf() {
    return 99;
  },
};
console.log(100 - obj2); // 100-99=1

let obj3 = {
  x: 7,
  toString() {
    return 99;
  },
};
console.log(100 - obj3); //100-99=1

let obj4 = {
  x: 7,
  toString() {
    return {};
  },
};
// console.log(100 - obj4);//TypeError

//Addition operator:firstly it calls ToPrimitive(). after ToPrimitive(), if the type of either left or  right operand is string, it tries to convert both operands to string. If type of any of them is not string, it tries to convert both of them to number

console.log(1 + {}); //  1 + ToPrimitive({}) => hint: Number=> [valueOf,toString]=>1+ "[object Object]"=> now above rule applies => 1[object Object]

//Unary + operator => converts its operand to a number => it uses ToNumber() internally

//== this one is called abstract equality
//==== this one is called strict equality
//both types of equality checks type as per official doc. what they do after that, it varies. THE DIFFERENCE IS ABSTRACT EQUALITY DOES COERCION.

//Bcz of how ToBoolean abstract operation works: undefined, null, +0, -0, NaN, false,  empty string("") are all considered falsy values, hence any negative number is considered truthy value

//Logical not operator(!) internally uses ToBoolean operation, it applies ToBoolean() on input, if the result of ToBoolean() is true it  returns false, if the result is false it returns true

//the condition given inside if also uses ToBoolean()

console.log(null === undefined); //true bcz of abstract equality rules

//ABSTRACT equality: if one operand is number and the other operand is string, it does ToNumber() on the string operand and then apply == again
//if one operand is boolean, it converts that to Number and then perform == again
//if one operand is number/symbol/string and the other operand is object, convert object using ToPrimitive() and apply the == operation
console.log(0 == false); // 0 == ToNumber(0) =>0 == +0 => true

console.log(34 == true); //false

console.log(34 == {}); // 34 == ToPrimitive({}) => 34 == "[object Object]" => 34 == NaN => false

console.log(NaN === NaN); //false bcz of strict equality rules

console.log(NaN == NaN); //false => type of both operand is number, hence it goes for strict equlity check. Now as per strict equality rules, even if one of the operand is NaN, it returns false

console.log("NaN" == NaN); //false=> ToNumber(NaN) == NaN => NaN == NaN =>both have type as number => false

let obj6 = {
  valueOf() {
    return 100;
  },
};
console.log(obj6 == 100); //false => 100 == 99 => false
console.log(100 == obj6); //true => 100  == 100 => true

// STRICT EQUALITY RULES
/**
 * if type of both operands dont match, return false
 * if type of x is Number:
 * (->if either x or y is NaN, return false
 * ->if value of x is same as y, return true
 * ->if one operand is +0 and other is -0, return true
 * -> return false otherwise)
 * else(
 * -> if both x and y are same object value(same object in memory), return true  else return false
 * )
 */

console.log(undefined === undefined); //true

console.log(null == null); //true
console.log(null === null); //true

const o1 = { x: 10 };
const o2 = { x: 10 };
const o3 = { x: 30 };
console.log(o1 === o2); //false=> they are two different objects in the memory
console.log(o1 === o1); //true

console.log(o1 == o2); //false

//ToString() SPECIAL CASES-----------------------------------------------

console.log("" + 0); //""+"0"=>"0"
console.log("" + -0); //""+"0"=>"0"
console.log("" + []); //""=>""+remove square brackets from arrray=>""
console.log("" + [1, 2, 3]); // ""+"1,2,3"=>"1,2,3"
console.log("" + [null, undefined]); //null and undefined gets removed=> ""+","=>","
console.log("" + [1, null, 7]); //""+"1,,7"=>"1,,7"

//ToNumber() SPECIAL CASES-----------------------------------------------

console.log(0 - "010"); //0-10=-10 => 010 is conssidered as normal decimal
console.log(0 - 010); //010 is without quotes hence get converted to octal number => 0  - 8=-8
console.log(0 - "0xa"); //numbers starting with 0x are treated hexadecimal numbers=> 0 - 10 = -10
console.log(0 - 0xa); //-10

console.log([] - 1); //-1
console.log([""] - 1);//-1
console.log([0] - 1);//-1
console.log(["0"] - 1);//-1
console.log([4] - 1); //3
console.log([2,4] - 1); //NaN

//COERCION WITH TEMPLATED STRINGS

console.log("Object is ",obj);
console.log(`Object is ${obj}`); // we are doing string concatination here so this returns Object is [object Object] bcz of ToPrimitive() conversion
console.log("Object is"+ obj); 
console.log(1<2<3); // 1<2 => true=> true<3 => 1<3 => true
console.log(3>2>1); // true > 1=> 1>1=> false

//EXPLICIT CCONVERSION
console.log(Boolean(""));//false
console.log(String(123));//"123"

console.log(isNaN(NaN));//true
console.log(isNaN("prachi"));//true => this is bcz isNaN() method applies ToNumber() method to incoming input
console.log(Number.isNaN(NaN)); //true
console.log(Number.isNaN("prachi"));//false

const IsNaNCustom=(input)=>{
  if(typeof input === "number" && input !== input){
      return true;
  } 
  return false;
}
console.log(isNaN(NaN));
console.log(IsNaNCustom("prachi"));//false

let x=-4;
console.log(Object.is(x,-4));//true
console.log(Object.is(x,+4));//false

console.log("abc".toString()); //returns "abc" due to autoboxing in JavaScript
// console.log(1.toString()); //throws error bcz 1  is a primitive and toString()  is available only for objects. JS assumes . to be a decimal point and hence assume it as a part of the number itself, hence due to ambiguity of syntax, autoboxing dont occur  here

console.log((1).toString()); // String("1")  => returns "1" bcz of autoboxing

//null and undefined are not considered for autoboxing bcz we dont have corresponding object type for them in js
//due to autoboxing, primitive types try to get converted to their corresponding object type
