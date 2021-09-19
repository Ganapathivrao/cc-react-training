function display(value)
{
    document.getElementById("dis").value +=value;
}
function ans()
{
    var a = document.getElementById("dis").value;
    var b = eval(a);
    document.getElementById("dis").value=b.toFixed(4);
}

function cl(value)
{
    document.getElementById("dis").value="";
}

function del()
{
    var value = document.getElementById("dis").value;
    document.getElementById("dis").value=value.substr(0,value.length - 1);
}

function pow()
{
    var d=document.getElementById("dis").value;
    document.getElementById("dis").value=Math.pow(d,2);
}