// Takes a number as a parameter(= n)
// Print console.log(), 1 - parameter
// if x % 3 == 0, then print 'Fizz'
// if x % 3 == 0 && x % 5 == 0, then 'Fizz Buzz'



function puzzle(x) {

    //Go thtough from 1 to parameter
    for(i=1; i <= x; i++) {

        //Check if i is divisible by 3 and 5
        //If so then print 'Fizz Buzz'
        if(i % 3 == 0 && i % 5 == 0) {
            console.log('Fizz Buzz')
        }
        
        //Check if i is divisible by 3
        //If so then print 'Fizz '
        else if(i % 3 == 0) {
            console.log('Fizz ')
        }

        //Other than that, print i 
        else {
            console.log(i)
        }
    }
}

//Run function
puzzle(100)