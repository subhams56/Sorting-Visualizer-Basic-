//we gonna need the array of random values
//a sorted version of that array
let arraySize=40;
let min = 3;
let max = 250;
let array = [arraySize];
let sortedArray = [arraySize];
 //we need to pass a random number to every element of our array (40 random numbers)
 generateArray();

 function generateArray(){
    for(var i=0;i<arraySize;i++){ //i<arraySize when i=0 makes 40 numbers
    array[i] = generateArrayValue(); //function to generate random array values



    if(array[i]==array[i-1]) //a preventive measure to check no two consecutive numbers are same i.e array[i] & array[i-1]
    {
        array[i]=generateArrayValue();
    }
 }
}

function generateArrayValue(){ 
    return Math.floor(Math.random() * (max -min) + min); //generates a random number b/n min and max range (3 - 250)
    
} 

console.log(array);

bubbleSort();

function bubbleSort(){
    sortedArray = Array.from(array);
    for(var i=0;i<arraySize;i++){
        for(var j =0;j<arraySize-1;j++){
            if(sortedArray[j]>sortedArray[j+1]){
                let temp = sortedArray[j];
                sortedArray[j]=sortedArray[j+1];
                sortedArray[j+1]= temp;

            }
        }
    }
}

console.log(sortedArray);


