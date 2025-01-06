let countDisplay = document.getElementById("increasing");
let increase = 0
let count = 1
function Increment()
{
    increase++;
    countDisplay.innerText = increase;
    if(increase > (50 * count))
    {
        count++;
        increase++;
    }
}
