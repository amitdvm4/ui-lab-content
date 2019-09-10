//Modifiers
/* Typescript supports following modifiers : Public, private and protected
Default modifier is "public".
public members we can access anywhere in application. 
public members accessible through objects. 
public modifier applicable to variables, functions and constructors. not applicable to class
*/

/* public class cone{} //public' modifier cannot appear on a module or namespace element. */

class one{
    public wish:string;
    public constructor(public arg1:string){
        this.wish = arg1;
    }
    public fun1():string{
        return this.wish;
    }
}
class two extends one{
    public fun2():string{
        return "this is fun2 of class two";
    }
}
let obj:two = new two("Kya bolte bantai!!");
console.log(obj.fun1(), obj.fun2());