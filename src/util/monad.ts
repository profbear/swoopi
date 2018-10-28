/*
 * Copyright (c) 2018 Unbearable Professional
 *
 * I dedicate any and all copyright interest in this software to the
 * public domain. I make this dedication for the benefit of the public at
 * large and to the detriment of my heirs and successors. I intend this
 * dedication to be an overt act of relinquishment in perpetuity of all
 * present and future rights to this software under copyright law.
 */

export const fromNullable = <T>(nullable: T) =>
    nullable != null ? Right.of(nullable)
        /* it's null */ : Left.of(nullable)

class Right {
  constructor(x) {
    this.x = x
  }

  static of(x) {
    return new Right(x)
  }

  map(f) {
    this.x = f(this.x);
    return this
  }

  fold(f, g) {
    return g(this.x)
  }
}

class Left {
  constructor(x) {
    this.x = x
  }

  static of(x) {
    return new Left(x)
  }

  map(f) {
    return this
  }

  fold(f, g) {
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
