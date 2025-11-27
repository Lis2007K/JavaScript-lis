//12a

let add = function (){
    console.log(2+3);
}

add();
add();

//12b

function runTwice(fun){
    fun();
    fun();
}

runTwice(function() {console.log('12b');});
runTwice(add);

//12d

const btn1 = document.querySelector('.js-button1');

btn1.addEventListener('click', () => {
    setInterval(() => btn1.innerHTML = 'finished'
        , 1000)

    btn1.innerHTML = 'loading...'
})

//12e

const prg1 = document.querySelector('.js-p1');
let timeoutId;

document.querySelector('.js-button2').addEventListener('click', () => {
    clearTimeout(timeoutId)
    timeoutId = setInterval(() => prg1.innerHTML = ''
        , 2000)
    prg1.innerHTML = 'added to cart'
})

//12g

// setInterval(function() {
//     if (document.title === 'App') {
//         document.title = '(2) New messages';
//     } else {
//         document.title = 'App';
//     }
//     }, 1000);

    
//13g

let titleMsgs = 0;

document.querySelector('.js-button-plus').addEventListener('click',  () => {
    titleMsgs++;
})

document.querySelector('.js-button-minus').addEventListener('click',  () => {
    titleMsgs--;
})


setInterval(() => {
    if (titleMsgs < 0) {
        titleMsgs = 0;
    } 
    if (titleMsgs === 0) {
        document.title = 'App';
    } 
    if (titleMsgs > 0) {
        document.title = `(${titleMsgs}) New messages`;
    }
}, 100);

//12k

const multiply = (a,b) => a*b;

console.log(multiply(2,3))

//12l

function countPositive(array){
    let numer = 0;
    array.forEach((value) => {
        if (value >= 0){
            numer++
        }
    });

    return numer
}

console.log(countPositive([1,-2,3,-4,5]));

//12m

function addNum(array, num) {
    return array.map((value) => value += num)
}
console.log(addNum([1,3,4], 5));

//12n

function removeEgg(foods) {
    // return foods.filter((value) => {
    //     if (value ==='egg'){
    //         return false;
    //     } else {
    //         return true;
    //     }
    // });

    return foods.filter((food) => food !== 'egg');
};

console.log(removeEgg(['egg', 'milk', 'cheese', 'egg']));

//12o

function removeEgg(foods) {
    let eggsRemoved = 0;

    return foods.filter((food) => {
        // If the food is 'egg', we should return false
        // but only if we haven't removed 2 eggs already.
        if (food === 'egg' && eggsRemoved < 2) {
            eggsRemoved++;
            return false;
        }

        return true;
    });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));

