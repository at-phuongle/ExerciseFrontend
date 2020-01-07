//câu 1
var num1=2;
var num2=2;
if(num1==num2){
  var result=(num1+num2)*3;
}
else{
  var result=num1+num2;
}
console.log("kq cau 1 la: "+result);

//câu 2
var soNhapVao=22;
if(soNhapVao<=19){
  var hieu= 19 - soNhapVao;
}
else{
  var hieu=(soNhapVao-19)*3;
}
console.log("kq cau 2 la: "+hieu);

//câu 3
var a='1*9';
var i;
document.writeln('kq cau 3 la: ');
document.write('[');
for(i=0;i<9;i++)
{
  var content=a.replace('*',i)
  if(content%3==0)
  {
    document.write(+content+',');
  }
}
document.writeln(']');


//câu 4
var b='1234567890*';
var e;
document.writeln('kq cau 4 la: ');
document.write('[');
for(e=0;e<9;e++)
{
  var contentB=b.replace('*',e)
  if(contentB%6==0)
  {
    document.write(+contentB+',');
  }
}
document.writeln(']');