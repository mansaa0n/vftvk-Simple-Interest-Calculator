function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal <= 0){
        alert("Enter a positive number")
    }else{
        var results = "If you deposit " + principal 
                    + "\n" 
                    + "at an interest rate of " + rate
                    + "\n"
                    + "You will receive an amount of " + interest
                    + "\n"
                    + "in the year " + year 
        document.getElementById("result").innerText = results
    }

}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var color = 'linear-gradient(90deg, red' + 50 + '%, white 10%, gray)';
    document.getElementById("rate_val").innerText=rateval;
    document.getElementById("rate").style.background = 'linear-gradient(90deg, #0D74F6 '+rateval*4.75+'%, #C1C1C1 '+(rateval*4.75)+'%)';
}
// function slider_lower_bound_color(){
//     var slider = document.getElementById("rate");
//     var color = 'linear-gradient(90deg, red' + slider.value + '%, white 10%, gray)';
//     slider.style.background = color;
//     // linear-gradient(0deg, blue, green 40%, red);
// }
