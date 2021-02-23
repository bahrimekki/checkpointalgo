sentence = "BAHRI mekki.";
var nbwords =1;
var nbvowels= 0;
var lgh = 0;

while (sentence[lgh]!=='.'){
    if (sentence[lgh] ===' '){
        nbwords = nbwords+1;
    }
    else if (sentence[lgh] ==='a'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='e'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='i'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='o'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='u'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='A'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='E'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='I'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='O'){
        nbvowels = nbvowels+1;
    }
    else if (sentence[lgh] ==='U'){
        nbvowels = nbvowels+1;
    }
    else{
        nbvowels = nbvowels+0;
    }
    lgh = lgh+1;
}
console.log("Total number of characters in a string: ",lgh);
console.log("Total number of wordes in a string: ",nbwords);
console.log("Total number of vowels in a string: ",nbvowels);