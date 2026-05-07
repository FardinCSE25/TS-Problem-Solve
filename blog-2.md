# blog-2.md

# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

One of the most powerful features of TypeScript is **Generics**.

Generics allow developers to write reusable and flexible codes by using dynamic types.

Without generics, we often need to write separate functions or components for different data types.  
Generics solve this problem by allowing types to be passed dynamically.

In this blog, we will learn:

- What Generics are
- Why Generics are useful
- How Generics create reusable functions
- How Generics maintain strict typing

---

# What are Generics in TypeScript?

Generics allow us to create components, functions, classes, or interfaces that work with different types.

Usually, we use:

```ts
<T>
```

# Basic Generic Function Example

Without Generics:

```ts
const createStringArray = (value: string) => {
  return [value];
}
```

This only works for strings.

If we want numbers or objects, we have to create multiple functions.

---

# But Using Generics

```ts
const createArray = <T>(value: T) => {
  return [value];
}
```

Now this function works for any type.

---

# Example Usage

```ts
const stringArray = createArray("Hello");

const numberArray = createArray(100);

const booleanArray = createArray(false);

```

TypeScript automatically keeps tracking the correct types.

---

# Why Generics are Powerful

Generics provide two important benefits:

## 1. Reusability

One function can work with multiple data types.

## 2. Type Safety

TypeScript still checks types strictly.

---

# How Generics Maintain Strict Typing

```ts
const identity = <T>(value: T) => {
  return value;
}
```

When we pass a string:

```ts
const result = identity("TypeScript");
```

TypeScript understands:

```ts
result: string
```

If we pass a number:

```ts
const result = identity(123);
```

Now TypeScript understands:

```ts
result: number
```

The type changes dynamically based on the passed argument.

---

# Generic with Multiple Types

Generics can accept multiple type parameters.

```ts
const createTuple = <X, Y>(value1: X, value2: Y) => {
  return [ value1, value2 ];
}
```

Usage:

```ts
const result = createTuple<number, number>(11, 22);
```

Output type:

```ts
{
  value1: number;
  value2: number;
}
```
---

# Advantages of Generics

| Feature | Benefit |
|---|---|
| Reusability | Write once, use everywhere |
| Flexibility | Works with multiple and different data types |

---

# Conclusion

Generics are one of the most important features in TypeScript because they allow us to create reusable and flexible types codes.

By using generic types like `<T>`, we can build functions, interfaces, classes, components that automatically adapt to different data structures.

In modern TypeScript development, Generics are essential for writing clean code.