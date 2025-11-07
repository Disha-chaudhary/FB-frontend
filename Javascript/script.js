// console.log("hello")
// alert("welcome to this site")
// const name=prompt("enter the user name:")
// console.log(name)
// alert("hello the name is"+name)
// document.write("<h1>hello,"+ name + "!</h1>")
// const age=prompt("enter the age")
// if(age>18){
//    document.write("<h1>you are eligible</h1>")
// }
// else{
//     alert("you are not eligible")
// }
    
//ARRAY:-

//const arr=[1,2,3,4,"disha",undefined,NaN,false]
//const arr=new Array(8)
// const arr=new Array("abc","def","gei")
// const start=[1,2,3,4]
// const end=[5,6,7,8]
//const newArr=[];
// for(let num of start){
//     newArr.push(num)
// }
// for(let num of end){
//     newArr.push(num)
// }
// const newArr=start.concat(end)
// console.log(newArr)
//METHODS: push,arrayname.indexof(element),arrayname.concat(secondarrayname)
// const sorted=start.sort(a,b)=>{
//     return a-b
// }
// const double=start.map((n)=>n*2)
// console.log(start)
// function calc(calculate,num1,num2) {
//     console.log(calculate(num1,num2))
// }
// function add(n1,n2) {
//     return n1+n2 
// }

// function multiply(n1,n2) {
//     return n1*n2 

// }
// calc(add,5,10)
// calc(multiply,5,10)
// const arr=[1,3,4,5,7,8,2]
// const isEven=(num)=>{
//     return num%2==0
// }
// const firsteven=arr.find(isEven)
// console.log(firsteven)
// const evenArr=arr.filter(isEven)
// console.log(evenArr)
// 
// let num=5
// if(num>3){
//     let num=10
//     console.log("inside"+num)
// }
// console.log("outside"+ num)

// const isOdd=(num)=>num%2===1
// let greet=(name)=>{
//     return "hello,"+name+"I"
// }
// const  add=(a,b)=>{
//     return a+b
// }
// const isEven=(num)=>{
//     return num%2===0;
// }

// const user="aman"
// const points=120
// const message=`hey ${user} you have ${points} points!`
// console.log(message)
// 
// const count=[1,2,3,4,5,6,7,8,9]
// const[,second,,,fifth]=count
// console.log(second,fifth)
// const person={
//     name:"disha",
//     age:25,

// }
// const{name,age}=person
// console.log(name)
// console.log(age)

//REST PARAMETER
// const arr=[1,2,3,4,5,6,7,8,9]
// const[first,second,...rest]=arr
// console.log(first)
//  console.log(second)
//  console.log(arr)

//SPREAD PARAMETER
// const arr=[1,2,3,4,5,6,7,8,9]
// const arr2=[10,11,12,13]
// //const result=arr.concat(arr2)
// const result=[...arr,...arr2]
// console.log(result)
// let count=1
// const timer=setInterval(()=>{
//     console.log("hello"+count)
//     count++
//     if(count>5) clearInterval(timer)
// },1000)
