
# Comparison Operators

| Operator | Meaning            | Example       |
| -------- | ------------------ | ------------- |
| `==`     | Equal (loose)      | `5 == '5'` ✅  |
| `===`    | Equal (strict)     | `5 === '5'` ❌ |
| `!=`     | Not equal (loose)  | `5 != '5'` ❌  |
| `!==`    | Not equal (strict) | `5 !== '5'` ✅ |
| `>`      | Greater than       | `5 > 3` ✅     |
| `<`      | Less than          | `3 < 5` ✅     |
| `>=`     | Greater or equal   | `5 >= 5` ✅    |
| `<=`     | Less or equal      | `3 <= 3` ✅    |

# Logical Operators
Operator	Meaning	Example
&&	AND — both must be true	true && true ✅
`		`
!	NOT — reverses true/false	!true → false

# Truthy and Falsey value
❌ Falsy Values (these behave like false):
false

0

"" (empty string)

null

undefined

NaN

✅ Truthy Values:
Everything else, like:

"hello"

1, -1

[], {}

# Key Points to Remember - CONDITIONALS ⚖️
# If Statements:

Use clear, readable conditions (age >= 18 instead of age > 17)
Use === for strict equality, avoid == (checks type and value)
Group related conditions with logical operators (&&, ||)
Use parentheses to make complex conditions clear
Keep conditions simple - break complex logic into variables

# Switch Statements:

Use switch when checking one variable against many values
Always include break statements (unless intentional fall-through)
Always include a default case
Group similar cases together when they do the same thing

# Best Practices:

Handle all possible cases (especially edge cases)
Use early returns to avoid deep nesting
Make conditions readable (use meaningful variable names)
Test with different input values