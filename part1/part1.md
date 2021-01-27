1. Line 11 prints out 3 because i is declared as a var and vars don't have block scope.
2. Line 12 prints out 150 because discountPrice is declared as a var and vars don't have block scope.
3. Line 13 prints out 150 because finalPrice is declared as a var and vars don't have block scope.
4. The function should return [50,100,150] because discountPrices() will iterate through [100,200,300] and apply the discount that is passed (0.5). So each price will be halved.

5. Line 11 will throw an error because i was defined with the "let" keyword which gives it scope only within the for loop.
6. Line 12 will throw an error because discountPrice was defined with the "let" keyword in the for loop which gives it scope only within 1 instance of the for loop.
7. Line 13 will print out 150 because finalPrice was defined with the "let" keyword at the beginning of the function, so it has scope within the entire function.
8. Assuming no errors, the function should return [50,100,150] due to the same reason as question 4.

9. The program halts before line 11, but assuming no errors, line 11 will throw an error because i was defined with the "let" keyword which gives it scope only within the for loop.
10. The program halts before line 12, but assuming no errors, line 12 will throw an error because discountedPrice was defined with the "const" keyword inside of the for loop which gives it scope only within 1 instance of the for loop.
11. The program halts before line 13, but assuming no errors, line 13 will print 0 because finalPrice was defined with the "const" keyword and was set to 0, so finalPrice will have the value of 0 for the entire function.
12. Assuming no errors, the function should return [0,0,0] because discounted is an const object/list the unchanging part of it is the address, not the values themselves so you can push to it without errors.

13.
  1. student.name
  2. student['Grad Year']
  3. student.greeting()
  4. student['Favorite Teacher'].name
  5. student.courseLoad[0]

14.
  a. 32, '3' is a string so the + operator acts as a concat
  b. 1, '3' gets converted into a number due to the - operator
  c. 3, since the first operand is a number, null gets converted to 0
  d. '3null', '3' is a string so the + operator acts as a concat
  e. 4, true is converted to 1 so 1 + 3 = 3
  f. 0, false is 0 and so is null so 0 + 0 = 0
  g. '3undefined', '3' is a string so the + operator acts as a concat
  h. NaN, the - operator converts both operands to a number but undefined is NaN

15.
  a. True, '2' gets converted into 2, 2 > 1 = true
  b. False, since both operands are strings, javascrip compares them lexicographically and '2' comes after '12'.
  c. True, '2' gets converted into 2, 2 == 2 = true
  d. False, === is a strict equality operator without type conversion, and 2 and '2' are different types.
  e. False, true gets converted to 1 and 1 != 2
  f. True, === checks if the operands are the same type, true is a boolean and Boolean(2) converts 2 into a boolean that is true since 2 != 0

16. == checks the value between two operands and performs type conversions if necessary, whereas === checks the value between two operands without any type conversions.

17. "How are you?" gets printed, true == 2 is false because true gets converted to 1 and 1 != 2, if(a number) is true as long as the number is non-zero, so it will enter that if statement and print "How are you?".

19. modifyArray takes as input an array and a function. In this case doSomething is the function and it takes as input a number and another function. doSomething will add 2 to that number and then call the function it was passed. Going back to modifyArray, it iterates through each element in the array and calls doSomething(array[i], function(x)). function(x) simple doubles the number given to it. So for each element in the array, it calls doSomething, adds 2 to the number, then calls function(x) and doubles that and pushes it to the new array. Aka 2(arr[i] + 2) for each element.

21. The function prints out:
1
4
3
2
Numbers 1 and 4 are regular console.log() statements so they will be printed first and since the 1 comes before 4, it gets printed first out of the two. 3 gets printed 3rd because it takes a miniscule amount of time to set the timeout/delay to 0 seconds. And 2 gets printed last because it sets a delay of 1 second before being printed out.
