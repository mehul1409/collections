void main()

{
  // # Set (set contains unique values only)------------------>

  var st1 = {'sonam', 'rahu', 'sumit'};
  print(st1);
  print(st1.runtimeType);

  var st2 = {1,2,'sonam', 'rahu', 'sumit'};
  print(st2);
  print(st2.runtimeType);

  var st3 = <String>{'sonam', 'rahu', 'sumit'};
  print(st3);
  print(st3.runtimeType);

  Set st4 = {'sonam', 'rahu', 'sumit'};
  print(st4);
  print(st4.runtimeType);

  Set<String> st5 = {'sonam', 'rahu', 'sumit'};
  print(st5);
  print(st5.runtimeType);

  // ## empty set--------------->

  var st6 = <int>{};
  print(st6);
  print(st6.runtimeType);

  var st7 = {};   // now this is map  not a set
  print(st7);      
  print(st7.runtimeType);

  Set<String> st8 = Set();
  print(st8);
  print(st8.runtimeType);

  // add item to empty set

  var p = <String>{};
  p.add("javascript");
  p.add("dart");
  print(p);
  print(p.runtimeType);
}