package org.example.Games.Game1;

import java.util.*;

public class RockPapersScissors {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        while (true){
//            String[] rps = {"r", "p", "s"};
            List<String> rps = new ArrayList<>(
                    Arrays.asList("r", "p", "s"));
            String computerMove = rps.get(new Random().nextInt(rps.size()));
            String playerMove;

            while (true) {
                System.out.println("Please enter your move (r, p, or s)");
                playerMove = scanner.nextLine();
                if (playerMove.equals("r") || playerMove.equals("p") || playerMove.equals("s")) {
                    break;
                }
                System.out.println(playerMove + "is not a valid move");
            }
            System.out.println("Computed move" + computerMove);
            if (playerMove.equals(computerMove)) {
                System.out.println("the game was a tie");
            } else if (playerMove.equals("r")) {
                if (computerMove.equals("p")) {
                    System.out.println("You lose!");
                } else if (computerMove.equals("s")) {
                    System.out.println("You win!");
                }
            } else if (playerMove.equals("p")) {
                if (computerMove.equals("r")) {
                    System.out.println("You win!");
                } else if (computerMove.equals("s")) {
                    System.out.println("You lose!");
                }
            } else if (playerMove.equals("s")) {
                if (computerMove.equals("p")) {
                    System.out.println("You win!");
                } else if (computerMove.equals("r")) {
                    System.out.println("You lose!");
                }
            }
            System.out.println("one game(y/n)?");
            String playAgain = scanner.nextLine();
            if(!playAgain.equals("y")){
                break;
            }
        }
    }
}
