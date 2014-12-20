# lazy-seq

> Lazy sequences

[![Build Status](https://secure.travis-ci.org/phadej/lazy-seq.svg?branch=master)](http://travis-ci.org/phadej/lazy-seq)
[![NPM version](https://badge.fury.io/js/lazy-seq.svg)](http://badge.fury.io/js/lazy-seq)
[![Dependency Status](https://david-dm.org/phadej/lazy-seq.svg)](https://david-dm.org/phadej/lazy-seq)
[![devDependency Status](https://david-dm.org/phadej/lazy-seq/dev-status.svg)](https://david-dm.org/phadej/lazy-seq#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/phadej/lazy-seq.svg)](https://codeclimate.com/github/phadej/lazy-seq)

## Lazy?

The list structure could be defined as

```hs
data Seq a = Nil | Cons a (Seq a)
```

The `Cons` constuctor takes two arguments, so there are four different laziness variants:

```hs
Cons (Strict a) (Strict (Seq a)) -- 1. fully strict
Cons (Lazy a)   (Strict (Seq a)) -- 2. lazy values
Cons (Strict a) (Lazy (Seq a))   -- 3. lazy structure
Cons (Lazy   a) (Lazy (Seq a))   -- 4. fully lazy
```

This module implements the third variant: lazy structure, but strict values.

## Example

```js
var ones = lazyseq.cons(1, function () { return ones; });
console.log(ones === ones.tail()); // true!
```

## API


- *.isNil : Boolean* &mdash; Constant time check, whether the sequence is empty.


- *.toString : () → String* &mdash; String representation. Doesn't force the tail.


- *.length : () → Nat* &mdash; Return the length of the sequene. Forces the structure.


- *.toArray : () → Array a* &mdash; Convert the sequence to JavaScript array.


- *.fold : (z : b, f : (a, () → b) → b) → b* &mdash; Fold from right.

    ```hs
    fold nil x f        = x
    fold (cons h t) x f = f x (fold t x f)
    ```


- *.head : () → a


- *.tail : () → Seq a* &mdash; Return the tail of the sequence.

    ```hs
    tail nil        = nil
    tail (cons h t) = t
    ```


- *.nth : (n : Nat) → a* &mdash; Return nth value of the sequence.


- *.take : (n : Nat) → Seq a* &mdash; Take `n` first elements of the sequence.


- *.drop : (n : Nat) → Seq a* &mdash; Drop `n` first elements of the sequence.


- *.map : (f : a → b) : Seq b* &mdash; The sequence obtained by applying `f` to each element of the original sequence.


- *.append : (ys : Seq a | Array a) : Seq a* &mdash; Append `ys` sequence.


- *fromArray: (arr : Array a) → Seq a* &mdash; Convert a JavaScript array into lazy sequence.


- *iterate : (x : a, f : a → a) → Seq a* &mdash; Create an infinite sequence of repeated applications of `f` to `x`: *x, f(x), f(f(x))&hellip;*.


## Release History

- **XXX** *2014-12-xx* First release

## Contributing

- `README.md` is generated from the source with [ljs](https://github.com/phadej/ljs)
- Before creating a pull request run `make test`, yet travis will do it for you.
