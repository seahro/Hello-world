// What is React
// As internet speeds increased and web browsers became more powerful, web applications grew more complicated and ambitious! It became necessary to develop more advanced tools for building and maintaining web applications
// Spaghetti Code: Writing JavaScript code that interacted directly with HTML became messy as applications were built and maintained over time. Complex JavaScript web applications were often called “spaghetti code” because they were structured in tangled and confusing ways that would quickly get out of hand
// Performance Problems: At the same time, performance became a problem for complex web applications. Using JavaScript to change HTML was fast enough when only a few changes were needed, but not when one click from a user could trigger many complex changes throughout the application
// React to the rescue: In 2013, React came to the rescue! React is a JavaScript library for building user interfaces. React is an open-source tool that was initially developed by Facebook, but it is widely used in many web applications.
// React solves the problem of messy spaghetti code by breaking the code into components. There is typically one component for each discrete feature of the site, and each of the components follows the same general structure. This means that the same code patterns will be enforced throughout the application, which will make the site more maintainable and readable as it is updated.
// React also does a lot of clever calculations under-the-hood to make sure that updates in the browser are calculated as efficiently as possible, thus improving performance. You’ll learn much more about how React works late

// ---***React Intro 1st Example:***---
import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song Title" onChange={this.handleTermChange} />
        <a onClick={this.search}>SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;

// -----***** INTRODUCTION TO COMMAND LINE *****-----
// https://www.codecademy.com/articles/command-line-commands
// that is a list of commonly used commands

// other common commands can be found here.
// https://www.codecademy.com/learn/learn-the-command-line/modules/learn-the-command-line-navigation/cheatsheet
// https://www.codecademy.com/learn/learn-the-command-line/modules/learn-the-command-line-manipulation/cheatsheet
// https://www.codecademy.com/learn/learn-the-command-line/modules/learn-the-command-line-redirection/cheatsheet
// https://www.codecademy.com/learn/learn-the-command-line/modules/learn-the-command-line-environment/cheatsheet


// The command line is a text interface for your computer. It’s a program that takes in commands and passes them on to the computer’s operating system to run
// The advantage of using the command line is its power. You can run programs, write scripts to automate common tasks, and combine simple commands to handle difficult tasks. All of these traits come together to make it an important programming tool.
// This course is for unix-based systems such as Linux and Mac OS X. You can also download programs on Windows that will allow you to use the same commands. An appendix of all commands taught in this course is available here

// -----*****FILE SYSTEM*****-----
// A filesystem organizes a computer’s files and directories into a tree structure
// The first directory in the filesystem is the root directory. It is the parent of all other directories and files in the filesystem
// Each parent directory can contain more child directories and files. In the filesystem on the right, blog/ is the parent of 2014/, 2015/, and hardware.txt
// Each directory can contain more files and child directories. The parent-child relationship continues as long as directories and files are nested
// ** FILE/Folder Tree reference https://content.codecademy.com/courses/learn-command-line/img/LCL-fileTrees-01.png

// *****COMMANDS*****

// --** 'ls' **--
// When you type ls, the command line looks at the directory you are in, and then “lists” all the files and directories inside of it. Be sure to type the letter l as in “List” and not the number 1

// $ is the shell prompt

// typing ls ... the terminal would display our current directory’s files and directories

// --** 'pwd' **--
// The next command we’re going to look at is pwd, which stands for “print working directory.” It outputs the name of the directory you are currently in, called the working directory

// --** 'cd' **-- 
// Our next command is cd, which stands for “change directory.” Just as you would click on a folder in Windows Explorer or Finder, cd switches you into the directory you specify. In other words, cd changes the working directory
// When a file, directory, or program is passed into a command, it is called an argument. 
// Example: $ cd 2015  ... => Here the 2015 directory is an argument for the cd command

// Example changing directories
// $ ls
// 2014  2015  hardware.txt
// $ pwd
// /home/ccuser/workspace/blog
// $ ls
// 2014  2015  hardware.txt
// $ cd 2015
// $ pwd
// /home/ccuser/workspace/blog/2015
// $ cd jan
// $ pwd
// /home/ccuser/workspace/blog/2015/jan
// $ cd memory
// $ pwd
// /home/ccuser/workspace/blog/2015/jan/memory

// --** 'cd' CONTINUED **--
// extending the change directory command. nstead of using cd twice in order to move from 2015 to memory, we can use it once and give it a longer argument. 
// To navigate directly to a directory, use cd with the directory’s path as an argument. Here, cd jan/memory navigates directly to the memory directory
// Example: $ cd jan/memory  ... => Here the directory is changed to the memory directory, inside the january directory.

// 'cd ..' is used to move up a directory

// combining multiple commands into single commands for directory movement adding the '/' between the directories is used to combine the directories
// examples cd xxx/.. or ../.. or ../xxx
// 'cd next-directory' command goes down further into a directory

// --** 'mkdir' **--
// mkdir stands for make directory
//$ cd 2014/dec
//$ pwd
///home/ccuser/workspace/blog/2014/dec
//$ ls
//monitor.txt  mouse.txt
//$ mkdir media
//$ ls
//media  monitor.txt  mouse.txt
//$ mkdir media/tv
//$ ls
//media  monitor.txt  mouse.txt
//$ cd media
//$ ls
//tv

// -----***** creating new files inside working directories *****-----
// 'touch' The touch command creates a new file inside the working directory. It takes in a filename as an argument and then creates an empty file with that name in the current working directory
// Example: $ touch keyboard.txt would create keyboard.txt in the current directory.

// ***** HELPER COMMANDS *****
// 'clear' is used to clear your terminal, which is useful when it’s full of previous commands and outputs. It doesn’t change or undo your previous commands, it just clears them from the view
// 'tab' can be used to autocomplete your command. When you are typing the name of an existing file or directory, you can use tab to finish the rest of the name
// up and down arrows can be used to cycle through previous commands

// ----conditionals review
//An if statement checks a condition and will execute a task if that condition evaluates to true.
//if...else statements make binary decisions and execute different code blocks based on a provided condition.
//We can add more conditions using else if statements.
//Comparison operators, including <, >, <=, >=, ===, and !== can compare two values.
//The logical and operator, &&, or “and”, checks if both provided expressions are truthy.
//The logical operator ||, or “or”, checks if either provided expression is truthy.
//The bang operator, !, switches the truthiness and falsiness of a value.
//The ternary operator is shorthand to simplify concise if...else statements.
//A switch statement can be used to simplify the process of writing multiple else if statements. The break keyword stops the remaining cases from being checked and executed in a switch statement

//Magic Eight Ball Example
let userName = 'Tim';

userName === 'Tim' ? console.log ('Hello Tim!') :
console.log(`Hello ${userName}`);

const userQuestion = 'Will I get paid today?';
console.log(`${userName} asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random()* 8);

let eightBall ='';
switch (randomNumber) {
case 0:
 eightBall = 'It is certain';
 break;
case 1:
 eightBall = 'It is decidedly so';
 break;
case 2:
 eightBall = 'Reply hazy try again';
 break;
case 3:
 eightBall = 'Cannot predict now';
 break;
case 4:
 eightBall = 'Do not count on it';
 break;
case 5:
 eightBall = 'My sources say no';
 break;
case 6:
 eightBall = 'Outlook not so good';
 break;
case 7:
 eightBall = 'Signs point to yes';
 break

}
console.log(`The eight ball answered: ${eightBall}`);

// Race Day JS Example //
let raceNumber = Math.floor(Math.random() * 1000);

console.log(raceNumber);

const earlyRegistration = false;

let racerAge = 18;

if (racerAge > 18 && earlyRegistration === true){
  raceNumber += 1000;
} else {
  raceNumber = raceNumber;
}

console.log(raceNumber)

if (racerAge >= 20 && earlyRegistration === true){
  console.log(`Racer ${raceNumber}, you will race at 9:30 am.`);
} else {
  console.log(`Racer ${raceNumber}, you will race at 11:00 am.`)
}

if (racerAge < 18){
  console.log (`Youth registrants run at 12:30 pm.`);
}

if (racerAge === 18){
  console.log ('Please consult the registration desk.')
}
Conditional Statements


