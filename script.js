// Takes a number as a parameter(= n)
// Print console.log(), 1 - parameter
// if x % 3 == 0, then print 'Fizz'
// if x % 3 == 0 && x % 5 == 0, then 'Fizz Buzz'



function puzzle(x) {

    for(i=1; i <= x; i++) {

        if(i % 3 == 0 && i % 5 == 0) {
            console.log('Fizz Buzz')
        }

        else if(i % 5 == 0) {
            console.log('Buzz ')
        }

        else if(i % 3 == 0) {
            console.log('Fizz ')
        }

        else {
            console.log(i)
        }
    }
}


puzzle(100)