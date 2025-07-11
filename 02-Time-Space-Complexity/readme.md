
# Algorithm
a procedure to solve specitic problem is called algoritham

# How to analyze an Algorithm
1. Time   // 
2. Space
3. N/W // how much data is transfering and how much(mb) data is required
4. Power
5. CPU Registers  // how much cpu registers is consuming


# Big O describes the worst-case performance.

Common Big O Time Complexities:
Notation	Name	Example
O(1) =	Constant Time ->	Accessing array element
O(log n)c=	Logarithmic Time ->	Binary Search
O(n) =	Linear Time	-> Loop through array
O(n log n) =	Linearithmic Time ->	Merge Sort, Quick Sort (avg)
O(n²) =	Quadratic Time	-> Nested loops
O(2ⁿ)	= Exponential Time ->	Recursive Fibonacci
O(n!) =	Factorial Time	-> Solving traveling salesman

# how we count time comlexity 
// because of these operaton 

🔹 Common operations that take 1 unit each:
# Operation                 Type	            Example	Counted?
Arithmetic	         +, -, *, /, %	           ✅ Yes
Assignment	        x = 10, a[i] = value	   ✅ Yes
Comparison	       x < y, a === b, i <= n	   ✅ Yes
Accessing Array	       a[i]	                   ✅ Yes
Function Call	       sum(arr)	               ✅ Yes (if it's not recursive or expensive)
Return statement	   return x;	           ✅ Yes
Logical operations	   &&, `	
Increment/Decrement    i++, i--	               ✅ Yes

