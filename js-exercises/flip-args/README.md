# Instructions

Create a function that invokes `func` with arguments reversed.

```js
var flipped = flipArgs(function() {
  console.log(arguments);
});
 
flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']
```

# Requirements

### **What are some good real-life use cases for such a function?**
Flip arguments could be used in last in first out(LIFO) implementation

### **What test cases can you add to the test file?**
Test case for checking return type and values.
*Add the relevant test-cases in the test file*


# Restrictions
- Don't use any libraries