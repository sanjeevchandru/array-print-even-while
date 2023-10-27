// 1. Separate even numbers of an array using while loop

document.write("Separate even numbers of an array using while loop"+"<br>");
document.write("---------------------------------"+"<br>");

var a=[12,13,34,19,90,45];
document.write("The number of array elements are:"+a.length+"<br>");
document.write("The array elements are:"+a+"<br>");
var i=0;
while(i<a.length){
    if(a[i]%2==0)
    {
        document.write(a[i]+"<br>");
    }
    i++;
}
