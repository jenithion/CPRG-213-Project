/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
let days_selected = 0;
let cost = 0;
let time = true //ture is equal to full half is equal to false


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
const MONDAY = document.getElementById("monday");
const TUESDAY = document.getElementById("tuesday");
const WEDNESDAY = document.getElementById("wednesday");
const THURSDAY = document.getElementById("thursday");
const FRIDAY = document.getElementById("friday");

MONDAY.onclick = () => {day_clicked(MONDAY)};
TUESDAY.onclick = () => {day_clicked(TUESDAY)};
WEDNESDAY.onclick = () => {day_clicked(WEDNESDAY)};
THURSDAY.onclick = () => {day_clicked(THURSDAY)};
FRIDAY.onclick = () => {day_clicked(FRIDAY)};

function day_clicked(day){
    const IS_DAY_CLICKED = day.classList;
    if(IS_DAY_CLICKED.contains("clicked") == false){
        IS_DAY_CLICKED.add("clicked");
        days_selected++;
    } else {
        IS_DAY_CLICKED.remove("clicked"); 
        days_selected--;
    }
    update_cost()
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
const DAYS = [MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY];
const CLEAR_BUTTON = document.getElementById("clear-button");

CLEAR_BUTTON.onclick = () => {
    days_selected = 0;
    update_cost()
    console.log(cost)

    for(i = 0; i <= DAYS.length; i++){
        remove_clicked(DAYS[i]);
    }
}

function remove_clicked(day){
    if(day.classList.contains("clicked") == true){
        day.classList.remove("clicked") ;
    }
}
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
const FULL_DAY_BUTTON = document.getElementById("full");
const HALF_DAY_BUTTON = document.getElementById("half");

FULL_DAY_BUTTON.onclick = () => {
    time = true
    FULL_DAY_BUTTON.classList.add("clicked")
    if(HALF_DAY_BUTTON.classList.contains("clicked")){
        HALF_DAY_BUTTON.classList.remove("clicked")
    }
    update_cost()
}

HALF_DAY_BUTTON.onclick = () => {
    time = false
    HALF_DAY_BUTTON.classList.add("clicked")
    if(FULL_DAY_BUTTON.classList.contains("clicked")){
        FULL_DAY_BUTTON.classList.remove("clicked")
    }
    update_cost()
}




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
const HALF_DAY_RATE = 20;
const FULL_DAY_RATE = 35;

document.getElementById("calculated-cost").innerText = 0;
function update_cost(){
    if(time == true){
        cost = days_selected * FULL_DAY_RATE;
    } else {
        cost = days_selected * HALF_DAY_RATE;
    }

    document.getElementById("calculated-cost").innerHTML = cost;
}
