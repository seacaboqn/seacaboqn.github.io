function Calc(a, b)
{
    a = Number(a);
    b = Number(b);
    var node = document.querySelector('input[name = "operator"]:checked');
    if (node == null)
    {
        document.getElementById("noti").innerHTML = "Bạn chưa nhập phép tính!!!";
        return "";
        
    }
    var _operator = node.value;
    if (_operator == "Plus")
    {
        return a + b;
    }
    else if (_operator == "Minus")
    {
        return a - b;
    }
    else if (_operator == "Multiply")
    {
        return a * b;
    }
    else if (_operator == "Devide")
    {
        if (b == 0)
        {
            document.getElementById("noti").innerHTML = "Mẫu số phải khác 0!!!";
            return "";
        }
        return a / b;
    }
}



function Proc() 
{
    if (document.getElementById("1stnum").value == "")
    {
        document.getElementById("noti").innerHTML = "Bạn chưa nhập số thứ nhất!!!";
        return "";
    }
    if (document.getElementById("2ndnum").value == "")
    {
        document.getElementById("noti").innerHTML = "Bạn chưa nhập số thứ hai!!!";
        return "";
    }
    if (check1 == false || check2 == false)
    {
        document.getElementById("kq").value = "";
        return;
    }
    
    document.getElementById("noti").innerHTML = "";
    let result = Calc(document.getElementById("1stnum").value, document.getElementById("2ndnum").value)
    document.getElementById("kq").value = result;
}

var check1 = true;
var check2 = true;


function Check()
{
    let firstnum = document.getElementById("1stnum").value;
    let secondnum = document.getElementById("2ndnum").value;
    check1 = true;
    check2 = true;
    for (let i = 0; i < firstnum.length; i = i + 1) 
    {
        if ((firstnum.charCodeAt(i) < 48 || firstnum.charCodeAt(i) > 57) && firstnum.charCodeAt(i) != 45 && firstnum.charCodeAt(i) != 46)
        {
            document.getElementById("noti").innerHTML = "Ô thứ nhất phải là số!!!";
            check1 = false;
            break;
        }
    }
    for (let i = 0; i < secondnum.length; i = i + 1) 
    {
        if ((secondnum.charCodeAt(i) < 48 || secondnum.charCodeAt(i) > 57) && secondnum.charCodeAt(i) != 45 && secondnum.charCodeAt(i) != 46)
        {
            document.getElementById("noti").innerHTML = "Ô thứ hai phải là số!!!";
            check2 = false;
            break;
        }
    }
    
}

function Reset1()
{
    document.getElementById("noti").innerHTML = "";
    document.getElementById("kq").value = "";
}

function Reset2()
{
    if (document.getElementById("noti").value == "")
    {
        document.getElementById("kq").value = "";
    }
    if (document.getElementById("kq").value != "")
    {
        document.getElementById("kq").value = "";
    }
}


