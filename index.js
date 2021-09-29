//1
function countToTen(){
  for(let i = 1; i<=10; i++){
      console.log(i)
  }
}
//countToTen()

//2
function countFromOne(num){
    for(let i =1; i<=num;i++){
    console.log(i)
    }
}
//countFromOne(10)
//3
function countEveryEven(num){
    for(let i =0; i<=num; i+=2){
        console.log(i)
    }
  
}
//countEveryEven(6)
//4
function countEveryOdd(num){
  for(let i = 1; i <=num; i++){
      if(i%2 != 0){
       console.log(i)   
      }
      
  }
}
//countEveryOdd(22)
//5 
function countEvens(num){
   let count = 0
   for (let i = 0; i <num.length; i++){
       if (num[i]%2 ===0){
           count++
       }
   }
        
  return  count
}

console.log(countEvens([1,2,3,4,5,6]))