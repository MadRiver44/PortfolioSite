import React, { Component } from 'react';
import Header from './Header';

const Publications = props => {
  return (
    <div>
      <Header />
      <header className="quote">
        <h1>
          <q>When one person teaches, two people learn</q> - Richard Feynman
        </h1>
      </header>
      <header className="learning">
        {' '}
        I've found that to learn something thoroughly, reading and just thinking about a subject is
        not enough. I codify that knowledge by breaking the concepts down as simply as possible. I
        write questions about what I learn and then explain things out loud. When I detect stumbles
        in my explainations or I can't explain it to a friend clearly, then I go back and examine my
        fault area. Learning is a conversation, and when someone questions my explaination, I may
        discover something I haven't considered yet. The articles I have written serve two purposes,
        one, to teach myself complex topics and to verify to myself that I understand it and two, to
        give back to the developer community for all the great resources that I have consumed.
      </header>
      <div className="articles">
        <a href="https://medium.freecodecamp.org/data-structures-101-stacks-696b3282980">
          <h1>Data Structures 101: Stacks</h1>
        </a>
        <a href="https://medium.freecodecamp.org/data-structures-101-queues-a6960a3c98">
          <h1>Data Structures 101: Queues</h1>
        </a>
        <a href="https://medium.freecodecamp.org/data-structures-101-linked-lists-254c82cf5883">
          <h1>Data Structures 101: Linked List</h1>
        </a>
        <a href="https://github.com/MadRiver44/Publications/blob/master/Trees.md">
          <h1>Data Structures 101: Binary Search Tree</h1>
        </a>
        <a href="https://github.com/MadRiver44/Publications/blob/master/Heaps.md">
          <h1>Data Structures 101: Binomial Heap</h1>
        </a>
        <a href="https://github.com/MadRiver44/Publications/blob/master/HashTables.md">
          <h1>Data Structures 101: Hash Tables</h1>
        </a>
        <a href="https://medium.freecodecamp.org/deep-dive-into-scope-chains-and-closures-21ee18b71dd9">
          <h1>Deep Dive into Scope Chain and Closures</h1>
        </a>
        <a href="https://medium.freecodecamp.org/recursion-is-not-hard-858a48830d83">
          <h1>Recursion is not Hard</h1>
        </a>
      </div>
    </div>
  );
};

export default Publications;
