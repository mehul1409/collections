void main ()

{
  //this is single line comment

  /* this is 
  multiple line comment */

  print("Hello Dart");

  // #variable name and rules
  // ## valid variable name

  var name = "Mehul Bansal ";
  var money =  100; 

  // ## invalid variable name

  // var 1person = " mehul ";  (comment out to resolve the error)
  // var for = " dart " ; (because dart already use for variable in this programming language)

  //# printing variable

  print(name);
  print(money);

  //Built-in-Datatypes

  int cart_item =10;
  print(cart_item);

  double price = 10.5;
  print(price);

  String city = "nida";    //s should be in capital 
  print(city);

  bool is_completed = true;
  print(is_completed);

  bool is_incompleted = false;
  print(is_incompleted);

  var name1 = "Mehul Bansal ";
  print(name1);
  print(name1.runtimeType);   //this function tell us about the datatyoe which is used in var datatype

  //#operators
  //## Arithmatic operators 


  var a = 20;
  var b = 10;

  print(a+b); 
  print(a-b); 
  print(a*b); 
  print(a/b); 
  print(a~/b);     // doesn't gives the double type variable 
  print(a%b);     //remainder 

  // ## prefix and postfix increment and decrement operators

  var i= 3;
  print(i);
  ++i;
  print(i);
  print(i++);
  print(i);

  // ### eqational and relational operators

  var x = 100;
  var y = 200;
  print(x==y);
  print(x!=y);
  print(x>y);
  print(x<y);
  print(x>=y);
  print(x<=y);

  //#### logical operators

  var a1 = 100;
  var a2 = 200;

  print(a1==a2 && a1>a2);
  print(a1!=a2 && a1<=a2);

  // ##### test type operators

  var name2 = " bansal";
  print(name2 is String);
  print(name2 is! String);
  
}