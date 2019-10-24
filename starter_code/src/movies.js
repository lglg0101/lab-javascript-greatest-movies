/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function calculateAverageMovieRate (array){ 
    let rates = array.reduce((accumalator, value) => { 
    return accumalator + value["rate"]; 
    },0); 
    let average = rates/array.length; 
    return average;
}
calculateAverageMovieRate(MOVIES);


// Iteration 2: Drama movies - Get the average of Drama Movies

function calculateAverageDramaRate(newArray) {
    const filteredArray = newArray.filter((value) => {
        return value.genre.includes("Drama")
    }) 
  return calculateAverageMovieRate(filteredArray) || 0; 
}; 
 
 calculateAverageMovieRate(MOVIES); 


// Iteration 3: Ordering by year - Order by ascending (in growing order)

function orderByYear (array) { 
let orderedArray = array.sort((a, b) => { 
    if(a.year === b.year && a.title > b.title){ 
        return 1;
    } else if(a.year === b.year && a.title < b.title) { 
        return -1;
    } else if (a.year > b.year) { 
        return 1;
    } else if (a. year < b.year){ 
        return -1;
    } else { 
        return 0; 
    } 
    });
return orderedArray;
} 

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function countSpielbergDramaMovies (array) { 
    const stevenArray = array.filter((value) => {
        return value.genre.director("Steven Spielberg")
    }) 
  return stevenArray; 
}; 



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average 

