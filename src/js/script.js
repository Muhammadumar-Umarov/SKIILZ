{
    // 1-question
    let a = -5

    if(a === 0){
        console.log("Entered number is Zero");
    }
    else if(a > 0){
        console.log("Entered number is Positive");
    }
    else{
        console.log("Entered number is Negative");
        
    }
}

{
    // 2-question
    let a = -5

    if(a > 0){
        a++
    }
    else{
        a-= 2
    }
    console.log(a);
}

{
    // 3-question
    let a = 0

    if(a === 0){
        a = 10
    }
    else if(a > 0){
        a++
    }
    else{
        a-= 2
    }
    console.log(a);
}

{
    // 4-question

    let counterP = 0, a = 10, b = 5, c = 3
    
    if(a > 0){
        counterP++
    }

    if(b > 0){
        counterP++
    }

    if(c > 0){
        counterP++
    }

    console.log("The number of Positive numbers: ", counterP);
}

{
    // 5-question

    let counterP = 0, counterN = 0, a = 10, b = 5, c = 3
    
    if(a > 0){
        counterP++
    }else{
        counterN++
    }

    if(b > 0){
        counterP++
    }else{
        counterN++
    }

    if(c > 0){
        counterP++
    }else{
        counterN++
    }

    console.log("The number of Positive numbers: ", counterP);
    console.log("The number of Negative numbers: ", counterN);
}

{
    // 6-question

    let a = 10, b = 11
    
    if(a === b){
        console.log("The numbers are equal");        
    }
    else if(a > b){
        console.log("A number is greater");        
    }
    else{
        console.log("B number is greater");
    }
}

{
    // 7-question

    let a = 10, b = 11
    
    if(a === b){
        console.log("The numbers are equal");        
    }
    else if(a > b){
        console.log("Second number is smaller");        
    }
    else{
        console.log("First number is smaller");
    }
}

{
    // 8-question

    let a = 5, b = 11
    
    if(a === b){
        console.log("The numbers are equal");     
    }
    else if(a > b){
        console.log(b, a);    
    }
    else{
        console.log(a, b);
    }
}

{
    // 9-question

    let a = 13.3, b = 3.5, c = 0;

    if(a === b){
        console.log("The numbers are equal");        
    }
    else if(a > b){
        c = a
        a = b
        b = c
        console.log("a number:", a, " b number:", b)
    }
    else{
        console.log("a number:", a, " b number:", b);
    }
}

{
    // 10-question

    let a = 10, b = 14, c = a + b

    if(a != b){
        a = c
        b = c
    }
    else{
        a = 0
        b = 0
    }

    console.log(a, b);
}