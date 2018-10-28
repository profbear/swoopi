/*
 * Copyright (c) 2018 Unbearable Professional
 *
 * I dedicate any and all copyright interest in this software to the
 * public domain. I make this dedication for the benefit of the public at
 * large and to the detriment of my heirs and successors. I intend this
 * dedication to be an overt act of relinquishment in perpetuity of all
 * present and future rights to this software under copyright law.
 */

// @ts-ignore
export const fromNullable = (nullable) =>
    nullable != null ? Right.of(nullable)
        /* it's null */ : Left.of(nullable)

class Right {
  // @ts-ignore
  constructor(x) {
    // @ts-ignore
    this.x = x
  }

  // @ts-ignore
  static of(x) {
    return new Right(x)
  }

  // @ts-ignore
  map(f) {
    // @ts-ignore
    this.x = f(this.x);
    return this
  }

  // @ts-ignore
  fold(f, g) {
    // @ts-ignore
    return g(this.x)
  }
}

class Left {
  // @ts-ignore
  constructor(x) {
    // @ts-ignore
    this.x = x
  }

  // @ts-ignore
  static of(x) {
    return new Left(x)
  }

  // @ts-ignore
  map(f) {
    return this
  }

  // @ts-ignore
  fold(f, g) {
    // @ts-ignore
    return f(this.x)
  }
}

// Right.of("hi")
//     .map(x => x.split(''))
//     .map(a => a[a.length - 2])
//     .fold(console.error, console.log) => 'h'
//
// Left.of(null)
//     .map(x => x.split(''))
//     .map(a => a[a.length - 2])
//     .fold(console.error, console.log) => null
