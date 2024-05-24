package com.algorithms.algoLog.findUser;
import java.util.ArrayList;
import java.util.List;

public class CreateFunction {

    String user;
    String address;
    int count;

    CreateFunction(String user, String address, int count){
        this.user = user;
        this.address = address;
        this.count = count;
    };

   public static void create(){
       List<CreateFunction> podaci = new ArrayList<>();
       podaci.add(new CreateFunction("Mesud", "Novi Pazar", 10));
       podaci.add(new CreateFunction("Skome", "veogra", 20));
       podaci.add(new CreateFunction("nadi", "kraljevo", 30));

       String imeKorisnika = "Skome";
       int rezultat = brojKorisnikaSaImenom(imeKorisnika, podaci);
       if (rezultat == 0) {
           System.out.println("Nema korisnika");
       } else {
           System.out.println("Broj korisnika sa imenom " + imeKorisnika + ": " + rezultat);
       }
    }

    public static int brojKorisnikaSaImenom( String name, List<CreateFunction> podaci){

       int counter = 0;
       for(CreateFunction typeOfPodaci : podaci){
           if(typeOfPodaci.user.equals(name)){
               return counter = typeOfPodaci.count;
           }
       }
       return counter;
    }
}

//    create javasscript function one argument parametar
//using this defined paremeter function should filter the data by user key value and return the count value
//        if not matched witch passed User paremater value, function should return "no users found"