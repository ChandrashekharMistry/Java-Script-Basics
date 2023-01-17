
class students{
    constructor(){
        this.rollNo;
        this.arrMarks;

    }
  funGetRollNo(){
    var arr=[]
    arr.push(this.rollNo)
    arr.push(this.arrMarks)
    return arr
    } 
  funSetRollNo(rollNo,arrMarks){
    this.rollNo=rollNo
    this.arrMarks=arrMarks

    } 
}
var mohit=new students()
mohit.funGetRollNo()
console.log(mohit);
mohit.funSetRollNo(34,100)
console.log(mohit);
// why we use classes instead of array
