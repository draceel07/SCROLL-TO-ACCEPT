console.log('100%........................');

//first i will capture the terms and condition div 
// function scrollToaccept() {
//     const termsCondition = document.querySelector('.terms-and-conditions');
//     console.log(termsCondition); // it works
//     if(!termsCondition) {
//         return; // quit this function if it's not present on the page.
//     }
//     termsCondition.addEventListener('scroll', (e) => {
//         console.log(e.currentTarget.scrollTop); //1475 : it will measure height from the top
//         console.log(e.currentTarget.scrollHeight); //2010 both can be might change : total height of scroll
//     })
// }
// scrollToaccept()
//second i will listen to the scroll event inside terms and conditions


// in case if termsCondition is not present we can pass some if statements for prevention by making a function

const termsCondition = document.querySelector('.terms-and-conditions');

const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

//Intersection Observer :- 
//callback function
function callbackForIntersection(payload) {
    // console.log(payload);
    // console.log(payload[0].isIntersecting); ///output either true or false
    console.log(payload[0].intersectionRatio);
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false
        // console.log('REMOVING OBSERVER');
        // observer.unobserve(termsCondition.lastElementChild);
    }
    else {
        button.disabled = true;
    }
}
const observer = new IntersectionObserver(callbackForIntersection, {
    root: termsCondition,
    threshold:1,
    // for getting 1 threshold we have to add image or any element in the end
}); 
//inside intersection observer function we need to give callback function as argument. we can also optionmethod inside intersection function 

//working:
// observer.observe(watch); 
// now i will observe the last paragraph termsCondition
observer.observe(termsCondition.lastElementChild); 
