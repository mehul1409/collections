void main ()

{

  // # conditional expresssions

  var is_login = true;
  var user = is_login ? " mehul " : " bansal " ;
  print(user);

  var name = null;
  var user1 = name ?? "nothing is written";
  print(user1); 

  // # String in dart

  String name1 = "mehul" ;
  print(name1);

  var name2= 'mehul basnal ';
  print(name2);
  print(name2.runtimeType);

  var s1 = "it's a dart language";
  print(s1);

  var s2 = 'it\'s a dart language';     // use this syntax if we want to use single code inside single code string
  print(s2);

  // if you want to write multi-line string then we have to use triple single code 

  var s3 = '''this 
is mehul 
basnal ''';
          print(s3);

    // ## expression inside string 

    var s4 = "mehul";
    print('My name is $s4');
    print("my name is ${s4.toUpperCase()}");

    // ### string concatenation 

    print("Hello dart");
    print("hello " + "dart");
    print('Hello' + " " + 'dart');

    var s5 = 'hello';
    var s6 = 'dart';
    print(s5+s6);

    // #### raw string

    var w = ' in a raw string , not even \n gets the special treatment ';
    print(w);

    var w1 = r' in a raw string , not even \n gets the special treatment ';  // if we want to use raw string write  r in starting 
    print(w1); 

}