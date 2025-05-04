// Substitability

// Liskov Substitution Principle: If S is a subtype of T, then objects of type T may be replaced with objects of type S

// Liskov Substitution Principle: Subtypes must be substitutable for their base types, here is the story:
// 
// We have a main Class called Animal, and we have a subclass called Dog, which extends Animal.
// So now, Dog class (inherited-class) can be used as a substitute for Animal class (base class) without any issues.

// Example:

class BaseMath {
  count = 0;

  getCount() {
    return this.count;
  }

  sum(num1, num2) {
    this.count++;
    return num1 + num2;
  }
}

// class IntegerMath extends BaseMath {
//   count = 0;

//   getCount() {
//     return this.count;
//   }

//   sum(num1, num2) { // ❌❌❌ IntegerMath (inherited class) is substitutable for BaseMath (base class), the sum method is same as the base class, which will overwrite the original logic, which does not satisfy Liskov Substitution Principle.
//     this.count++; // ❌❌❌ Please don't modify the value from parent class, because it will cause side effects..
//     // 可以有自己的新方法，但不能修改父类的现有方法，否则会破坏原有的逻辑。
//     return parseInt(num1) + parseInt(num2);
//   }
// } 

class IntegerMath extends BaseMath {
  count = 0;

  getCount() {
    return this.count;
  }

  intSum(num1, num2) { // ✅✅✅ intSum (inherited class) is different from sum (base class), which satisfies Liskov Substitution Principle.
    // this.count++;  // ❌❌❌ Please don't modify the value from parent class, because it will cause side effects..
    // So we create a new method for new requirements handling.
    return parseInt(num1) + parseInt(num2);
  }
}

const baseMath = new BaseMath();
const integerMath = new IntegerMath();

console.log(baseMath.sum(0.1, 0.2)); // 0.30000000000000004
console.log(integerMath.sum(0.1, 0.2)); // 0.30000000000000004
console.log(integerMath.intSum(0.1, 0.2)); // 0

console.log(baseMath.getCount()); // 1
console.log(integerMath.getCount()); // 1

// Remember: better not rewrite the parent class's method, because it might cause side effects.
