function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }else{
        var results = "If you deposit \<mark>" + principal + "\</mark> ,\<br\>at an interest rate of \<mark>" + rate + "%\</mark>\<br\>You will receive an amount of \<mark>" + interest + "\</mark>,\<br\>in the year \<mark>"+ year + "\</mark>\<br\>"
        document.getElementById("result").innerHTML = results
    }

}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    var color = 'linear-gradient(90deg, #0D74F6 '+rateval*4.75+'%, #EFEFEF '+(rateval*4.75)+'%)';
    document.getElementById("rate_val").innerText=rateval;
    document.getElementById("rate").style.background = color;
}
