# Calculator

A fully functional browser-based calculator built with vanilla JavaScript. Part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.

## Live Preview

[View on GitHub Pages](https://salem-qahtani.github.io/Calculator/)

## About

A calculator that handles chained mathematical expressions with proper operator precedence. Rather than using `eval()` or simple left-to-right chaining, it tokenizes the full expression into numbers and operators, then evaluates multiplication, division, and modulo before addition and subtraction. Built to practice DOM manipulation, state management, and algorithmic thinking with vanilla JavaScript.

## Features

- **Expression Parser** — Tokenizes and evaluates full expressions with correct operator precedence (× and ÷ before + and −)
- **Decimal Handling** — Automatically prepends `0` when starting with a decimal point; prevents duplicate dots per number
- **Percent Operator** — Supports `%` as a modulo operation within expressions
- **Backspace** — Deletes the last character and correctly restores state
- **Division by Zero Protection** — Displays an `ERROR` message and resets on the next input

## Built With

- HTML
- CSS (Grid layout, custom scrollbar)
- Vanilla JavaScript (DOM manipulation, expression parsing)
- [Font Awesome](https://fontawesome.com/) — backspace icon
- [Digital-7](https://www.dafont.com/digital-7.font) — display font

## What I Learned

- Laying out a button grid with `grid-template-areas` and named regions per element
- Writing a tokenizer and two-pass expression evaluator without `eval()`
- Managing multiple UI state flags (`pressedEqual`, `catchedError`) to handle edge cases cleanly
- Why `user-select: none` does not inherit into `<input>` elements and how to work around it
- Styling WebKit scrollbars and the difference between `parent:hover::scrollbar-thumb` and `::scrollbar-thumb:hover`
- Deploying a project with GitHub Pages
