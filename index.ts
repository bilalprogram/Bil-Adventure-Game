#! /usr/bin/env node
//Shabang
import chalk from "chalk";
import inquirer from "inquirer";
// class player & opponent 

class Player {
    name: string;
    fuel: number = 100;
    constructor (name: string) {
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    } 

}
class Opponent { 
 name: string;
 fuel: number = 100;
 constructor (name: string) {
this.name = name;
}
fuelDecrease(){
 let fuel = this.fuel - 25
 this.fuel = fuel   
}    

}

// Player name & opponent

let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name:"
});



let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin","Zombie"]
});

//  Gather Data

let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)

do{
    // skeleton

    if (opponent.select == "Skeleton"){ 
    let ans =  await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Make Your Choice",
        choices: ["Attack", "Heal Yourself","Run For Your Life...!"]
    });

if (ans.option == "Attack") {
    let num = Math.floor(Math.random() * 2)
    if (num > 0) {
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"));
            
        }
        
    }
    if (num <= 0) {
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Win"));
            process.exit()
            
        }
     }
    
}
if(ans.option == "Heal Yourself") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`You healed up now Your Fuel is ${p1.fuel}`));
    
}
if(ans.option == "Run For Your Life...!") {
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"));
    process.exit()
    
}
      }

// assassin

if (opponent.select == "Assassin"){ 
    let ans =  await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Make Your Choice",
        choices: ["Attack", "Heal Yourself","Run For Your Life...!"]
    });
if (ans.option == "Attack") {
    let num = Math.floor(Math.random() * 2)
    if (num > 0) {
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"));
            
        }
        
    }
    if (num <= 0) {
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Win"));
            process.exit()
            
        }
     }
    
}
if(ans.option == "Heal Yourself") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`You healed up now Your Fuel is ${p1.fuel}`));
    
}
if(ans.option == "Run For Your Life...!") {
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"));
    process.exit()
    
}
}

// zombie

if (opponent.select == "Zombie"){ 
    let ans =  await inquirer.prompt({
        type: "list",
        name: "option",
        message: "Make Your Choice",
        choices: ["Attack", "Heal Yourself","Run For Your Life...!"]
    });
if (ans.option == "Attack") {
    let num = Math.floor(Math.random() * 2)
    if (num > 0) {
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"));
            
        }
        
    }
    if (num <= 0) {
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
            console.log(chalk.green.bold.italic("You Win"));
            process.exit()
            
        }
     }
    
}
if(ans.option == "Heal Yourself") {
    p1.fuelIncrease()
    console.log(chalk.bold.italic.green(`You healed up now Your Fuel is ${p1.fuel}`));
    
}
if(ans.option == "Run For Your Life...!") {
    console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time!"));
    process.exit()
    
}
}
}
while(true)


