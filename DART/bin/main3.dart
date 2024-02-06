void main ()

{
  // # List     --------------------->
  // ## growable list -------------------->

  var lst = ["mehul", "bansal"];
  print(lst);
  print(lst[0]);
  print(lst.runtimeType);


  var lst1 = [1,2,3];
  print(lst1);
  print(lst1.runtimeType);


  var lst2 = [ 1,2,'hello'];
  print(lst2);
  print(lst2.runtimeType);


  var lst3 = <int>[1,2,3];   //we cannot able to write any other data variable in this becauce we fixed the list with int
  print(lst3);
  print(lst3.runtimeType);


  // ## insert list into another list ------------------------>
  // spread operator -------------------------->


  var women = ['sonam', 'rani', 'shweta'];
  var men = ['mehul', 'ram'];

  var spread = ['gabbar',...men];

  print(spread);

  var people = ["gabbar", ...men ,...women];


  print(people);  //if we want to insert list into another list then we have to use three dot and the variable name 

  //## Empty list and add() method ------------------------>
  // list() constructor----------------------->


  // var student = new List.empty();
  // student.add("mehul");
  // print(student);


  // list constructor doesn't work in above case --------------->


  var student1 = ["mehul", "ram", "shyam"];
  print(student1);

  print(student1.length);

  print(student1.isEmpty);

  print(student1.isNotEmpty);

  print(student1.reversed);

  print(student1.first);

  print(student1.last);
}

