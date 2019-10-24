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
    const stevenSArray = array.filter((value) => {
        if(value.director === 'Steven Spielberg' && value.genre.includes("Drama")) { 
        return true;
        } else {
        return false; 
        }
        }); 
        return stevenSArray.length;
    } 

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) { 

array.sort((a, b) => {
    if(a.title > b.title) { 
        return 1;
        } else if (a.title < b.title) { 
        return -1;
        } else {
        return 0;
        } 
}); 
    const titles = array.map((value) => { 
        return value.title
    }); 
    const topTwenty = titles.slice(0, 20); 
    return topTwenty; 
}
      
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    let transformMins = array.map((value) => {
    return value.duration.split(" ")
      })
    console.log(transformMins); 
};

turnHoursToMinutes(MOVIES)



// BONUS Iteration: Best yearly rate average - Best yearly rate average