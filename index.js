
let countDisplay = document.getElementById("increasing");
let increase = 0
function Increment()
{
    increase++;
    countDisplay.innerText = increase;
    if(increase >= 50)
    {
        increase++;
    }
}
