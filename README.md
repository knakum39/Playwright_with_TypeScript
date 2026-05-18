# Playwright TypeScript Learning Examples

> A practice repository containing daily TypeScript examples and language feature demonstrations.

## Project Overview

This repository appears to be a collection of TypeScript learning exercises organized by day. Each folder contains one or more `.ts` files focused on a specific language topic, such as variables, control flow, functions, arrays, objects, inheritance, and modules.

## Repository Structure

- `Day1/` – introductory demo
- `Day2/` – comments and variables
- `Day3/` – data types and a test file
- `Day4/` – operators and ternary expressions
- `Day5/` – conditional statements
- `Day6/` – loops and control flow
- `Day7/` – functions and anonymous/arrow functions
- `Day8/` – callbacks and function overloading
- `Day9/` – arrays and tuples
- `Day10/` – array methods
- `Day11/` – advanced array methods
- `Day12/` – string handling
- `Day13/` – objects and inline typed objects with arrow functions
- `Day14/` – method overloading and a student example
- `Day15/` – inheritance, access modifiers, and `super`
- `Day16/` – interfaces, modules, and a main entry file

## Topics Covered

- TypeScript basics: variables, comments, and types
- Control flow: conditionals and loops
- Functions: named, anonymous, arrow, callbacks, and overloads
- Data structures: arrays, tuples, objects, and strings
- Object-oriented programming: classes, inheritance, access modifiers, and `super`
- TypeScript modules and interfaces

## How to Use

1. Install Node.js if it is not already installed.
2. Install repository dependencies once:

   ```bash
   npm install
   ```

3. Compile a file with TypeScript:

   ```bash
   npm run build
   ```

4. Run a single example directly:

   ```bash
   npm run run -- Day5/ConditionalStatements.ts
   ```

## Beginner Guide

Start with the early days and move forward chapter by chapter:

1. Open `Day1/FirstDemo.ts` and read the code.
2. Run it with `npm run run -- Day1/FirstDemo.ts`.
3. Continue to `Day2/Variables.ts` and `Day2/Comments.ts`.
4. Progress through `Day3`, `Day4`, etc., in numerical order.

Each folder is designed to teach one or two related TypeScript concepts.

## Edit and Test Your Code

1. Open the `.ts` file for the day you want to practice.
2. Change or add code in the file.
3. Save the file.
4. Run it directly:

```bash
npm run run -- Day5/ConditionalStatements.ts
```

5. If you want to compile all files, use:

```bash
npm run build
```

## Notes

- A `package.json` and `tsconfig.json` are included for compiling and running examples.
- File naming and folder structure are organized by day, which makes it easy to track learning progression.
- Use `npm run build` to compile all example files into `dist`.
