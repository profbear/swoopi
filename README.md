# SWOOPI
SWOOPI is the freshest [SWAPI](https://swapi.co/about) and
[loopback API](https://github.com/strongloop/loopback-next)!

# Why?
are you kidding me? it's a Star Wars API. using the
latest greatest loopback. what more could you ask for?

# How do I...
1. clone it `git clone the https://github.com/profbear/swoopi.git`
1. install deps `cd swoopi ; npm i`
1. start it  `npm start` boots a URL like [localhost:3000](http://localhost:3000)
1. skim it in the browser at [localhost:3000](http://localhost:3000)
1. explore the depths at [localhost:3000/explorer](http://localhost:3000/explorer)

# What next?
make a GUI, make an app, make some
[bitch lasagna](https://www.youtube.com/watch?v=6Dh-RL__uN4).

# bugs in SWAPI
these are not SWOOPI bugs, but I don't know how to
get ahold of the homeboy who wrote SWAPI. so, they remain bugs:
- created, edited, and url `/schema $.description`s don't 
  matchup across all models
- Species and Vehicle have the wrong `/schema $.title`
