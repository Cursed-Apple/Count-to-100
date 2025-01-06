let countDisplay = document.getElementById("increasing");
let increase = 0
let count = 1
function Increment()
{
    increase++;
    
    if(increase > 50)
        {
            increase++;
        }
    if(increase > 200)
        {
            increase++;
        }
    if(increase > 500)
        {
            increase += 2;
        }
    
    countDisplay.innerText = increase;
}
