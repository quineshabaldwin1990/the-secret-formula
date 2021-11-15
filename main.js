function acc()
{
    var s="The user creds are :-\n";
    s+=document.getElementById("Username").value;
    s+="\n";
    s+=document.getElementById("Email").value;
    if(document.getElementById("password").value!=document.getElementById("cpassword").value)
    {
        alert("Passwords do not match ");
        return ;
    }
    alert(s);
}
function print()
{
    var x=document.getElementById("value").value;
    alert(x);
}
function haircut()
{
    var x=document.getElementById("date").value;
    var s="Haircut scheduled for ";
    s+=x;
    s+=" with ";
    s+=document.getElementById("naam").value;
    s+=" for ";
    if(document.getElementById("Short").checked)
    {
        s+="Short ";
    }
    if(document.getElementById("Long").checked)
    {
        s+="Long ";
    }
    s+=" hair.";
    alert(s);
}
function checkbox()
{
    var a=document.getElementById("mayo");
    var b=document.getElementById("mustard");
    var c=document.getElementById("cheese");
    var d=document.getElementById("onion");
    var e=document.getElementById("sausage");
    var f=document.getElementById("peas");
    var g=document.getElementById("pineapple");
    var h=document.getElementById("salad");
    var i=document.getElementById("kiwi");
    var j=document.getElementById("olive");
    var s="Your Sandwich will have ";
    if(a.checked==true)
    {
        s+="Mayo";
    }
    if(b.checked==true)
    {
        s+="Mustard";
    }
    if(c.checked==true)
    {
        s+="Cheese";
    }
    if(d.checked==true)
    {
        s+="Onion";
    }
    if(e.checked==true)
    {
        s+="Sausage";
    }
    if(f.checked==true)
    {
        s+="Peas";
    }
    if(g.checked==true)
    {
        s+="Pineapple";
    }
    if(h.checked==true)
    {
        s+="Salad";
    }
    if(i.checked==true)
    {
        s+="Kiwi";
    }
    if(j.checked==true)
    {
        s+="Olive";
    }
    if(!s.localeCompare("Your Sandwich will have "))
    {
        alert("Enter some value firstly");
        return ;
    }
    alert(s);
}