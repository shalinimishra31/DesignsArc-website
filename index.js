var submit = document.querySelector(".submit");

submit.addEventListener("click", () =>
{
    var name = document.querySelector(".name").value;
    var mail = document.querySelector(".mail").value;
    var number = document.querySelector(".number").value;
    var applied_for;
    var position = document.querySelector(".form-check").value; 
    if(position == "grad")
    {
        applied_for = "Grad";
    }
    else(position == "postGrad")
    {
        applied_for = "postGrad";
    }
    console.log(name);
    console.log(mail);
    console.log(number);
    console.log(applied_for);
})
