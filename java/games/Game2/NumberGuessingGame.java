package org.example.Games.Game2;

import java.util.Random;
import java.util.Scanner;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random random = new Random();
        Scanner scanner = new Scanner(System.in);
        int randomNumber = random.nextInt(100) + 1;
        System.out.println("Random number is " + randomNumber);

     while (true){
         System.out.println("Enter your guess (1-100)");
         int playerGuess = scanner.nextInt();
         if(playerGuess == randomNumber){
             System.out.println("Correct! You win");
             break;
         } else if(randomNumber > playerGuess){
             System.out.println("Nope! The number is higher. Guess again");
         } else {
             System.out.println("Nope! The number is lower");
         }
     }
    }
}
