//function
function greet(name,callback){
    console.log("hi"+" "+name);
    callback()
    
}
//callback function
function callme(){
    console.log("i am an callback function");
    
}
//passing function as argument
greet("peter",callme)