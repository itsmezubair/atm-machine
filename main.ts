#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000; //Dollars
let myPin = 1234;

let pinAnswer = await inquirer.prompt( 
    [
         { 
    name: "pin",
    message: "Enter your pin number",
    type: "number", 

         }
    ]
);


if (pinAnswer.pin === myPin)

{

    console.log("Correct pin code");

   let operationAns= await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","check balance","fastcash"]
            }
        ]
    );

   console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",

                }
            ]
        );

        if(amountAns.amount < myBalance) {

        myBalance -= amountAns.amount

        console.log("Your remaining balance is: " + myBalance); }

        else{
            console.log("Insufficient Balance");
        }

    }
    
        else if(operationAns.operation === "check balance"){

            console.log("Your balance is: " + myBalance)
        }

        else if(operationAns.operation === "fastcash")
        
        {
            let fast = await inquirer.prompt(
                [

                    {
                        name: "fast_option",
                        message: "How much money you want to withdraw",
                        type: "list",
                        choices: ['1000', '2000', '5000', '10000']
                

                    }
                ]
            );


            if(fast.fast_option === '1000'){
                myBalance -= fast.fast_option;
                console.log(`Your remaining balance is ${myBalance}`);
            }

            if(fast.fast_option === '2000'){
                myBalance -= fast.fast_option;
                console.log(`Your remaining balance is ${myBalance}`);
            }

            if(fast.fast_option === '5000'){
                myBalance -= fast.fast_option;
                console.log(`Your remaining balance is ${myBalance}`);
            }

            if(fast.fast_option === '10000'){
                myBalance -= fast.fast_option;
                console.log(`Your remaining balance is ${myBalance}`);
            }


         
        }
            
        
}

else{
    console.log("Incorrect pin number");
}