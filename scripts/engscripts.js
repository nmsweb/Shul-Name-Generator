var yeshivish;

var beginning = ["Temple", "Congregation", ""];
var first = [["Adath", "Adat"], ["Bet", "Beth"], ["Ahavat", "Ahavath"], ["Knesset", "Knesseth"], ["Bnai", "B'nai","B'ne"], ["Rodeph", "Rodphei"], ["Or", "Ohr"], ["Tiferet", "Tifereth"], ["Mickve", "Mikveh"], ["Anshe", "Anshei"], ["Agudat", "Agudath"], "Neveh", ["Oheiv", "Ohev"], "Ohavei", ["Shaare", "Sha'are", "Sha'arei", "Shaarei"], "Zichron", ["Brit", "Brith", "B'rit", "B'rith"], "Ner"];
var second = ["El", "Israel", ["Tfila", "T'fila", "T'filah", "Tfilah", "Tfilo", "T'filo", "T'filoh", "Tfiloh", "Tefila", "Tefilah", "Tfilla", "T'filla", "T'fillah", "Tfillah", "Tfillo", "T'fillo", "T'filloh", "Tfilloh", "Tefilla", "Tefillah"], "Torah", "Jacob", ["Shalom", "Sholom"], "Zion", ["Emet", "Emeth"], "Achim", ["Zedek", "Tzedek"], "Sinai", "Ephraim", "David", "Abraham", ["Chesed", "Chessed", "Hessed", "Hesed"], "Jeshurun"];
var orthfirst = ["Adas", ["Bais", "Beis"], "Ahavas", "Bnai", "Rodfei", ["Or", "Ohr"], "Tiferes", "Mikveh", "Agudas", "Neveh", "Shaarei", "Zichron", "Ner"];
var orthsecond = [["T'filah", "Tfilah", "T'filoh", "Tefilah", "T'fillah", "Tfillah", "T'filloh", "Tfilloh", "Tefilla", "Tefillah"], "Torah", ["Yaakov", "Ya'akov"], "Shalom", "Tzion", "Emes", "Achim", "Tzedek", "Efraim", "Dovid","Avraham", "Chessed", "Yeshurun"];
var nafter = [["Bet", "Beth"], ["Ahavat", "Ahavath"], ["Or", "Ohr"], ["Tiferet", "Tifereth"], ["Shaare", "Sha'are", "Sha'arei", "Shaarei"], "Zichron", "Ner", ""];
var orth_nafter = [["Bais", "Beis"], "Ahavas", "Bnai", ["Or", "Ohr"], "Tiferes", "Neveh", "Shaarei", "Zichron", "Ner"];
var allfirst;
var allsec;
var beginning_rand;




function generator1()
{
    document.getElementById("memory").innerHTML = "";
    document.getElementById("donor").innerHTML = "";
    clear_radio();
    clear_box();
    if (yeshivish == true)
    {
        allfirst = orthfirst;
        allsec = orthsecond;
        beginning_rand = "";
    }
    else
    {
        allfirst = first;
        allsec = second;
        beginning_rand = beginning[Math.floor(Math.random() * beginning.length)];
    }
    //clear_box();
    var first_random = allfirst[Math.floor(Math.random() * allfirst.length)];
    var second_random = allsec[Math.floor(Math.random() * allsec.length)];
    if (Array.isArray(first_random)) {
        first_random = first_random[Math.floor(Math.random() * first_random.length)]
    }
    if (Array.isArray(second_random)) {
        second_random = second_random[Math.floor(Math.random() * second_random.length)]
    }
    document.getElementById("result").innerHTML = (beginning_rand + " " + first_random + ' ' + second_random);
    document.getElementById("result").style.fontSize = "x-large";
    if (isMobile.any()) {document.getElementById("copy_button").style.visibility = "visible";}
}


function generator2(f_name)
{
    if (yeshivish == true)
    {
        allfirst = orth_nafter;
        beginning_rand = "";
    }
    else
    {
        allfirst = nafter;
        beginning_rand = beginning[Math.floor(Math.random() * beginning.length)];
    }
    var first_random = allfirst[Math.floor(Math.random() * allfirst.length)];
    if (Array.isArray(first_random)) {
        first_random = first_random[Math.floor(Math.random() * first_random.length)]
    }
    if (first_random == "")
    {
        beginning_rand = "Temple";
    }
    document.getElementById("result").innerHTML = (beginning_rand+ " " + first_random + ' ' + f_name);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("donor").style.fontSize = "x-large";
    x = f_name;
    if (isMobile.any()) {document.getElementById("copy_button").style.visibility = "visible";}
}


function choose_name()
{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    document.getElementById('donor').innerHTML = f_name + " " + l_name;
    generator2(f_name);
}

function check_radio()
{
    var checkBox1 = document.getElementById("isdonor");
    var checkBox2 = document.getElementById("isdead");
    if (checkBox1.checked == false && checkBox2.checked == false)
    {
        alert("Error: please choose one of the above!");
        return 0;
    }
    else if(checkBox1.checked == true)
    {
        document.getElementById("memory").innerHTML = "Generously donated by";
    }
    else if(checkBox2.checked == true)
    {
        document.getElementById("memory").innerHTML = "In memory of";
    }
}


function two_things()
{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    if (f_name == ""|| l_name == "")
    {
        alert("Error: Please enter a name!");
        return 0;
    }
    var checkBox1 = document.getElementById("isdonor");
    var checkBox2 = document.getElementById("isdead");
    if (checkBox1.checked == false && checkBox2.checked == false)
    {
        alert("Error: please choose one of the above!");
        return 0;
    }
    choose_name();
    check_radio();
}



function clear_box()
{
    document.getElementById('f_name').value = "";
    document.getElementById('l_name').value = "";
}


function clear_radio()
{
    document.getElementById("isdonor").checked = false;
    document.getElementById("isdead").checked = false;
}


function open_heb()
{
    window.open("heb.html", "_self");
}


function checkbox(){
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked == true)
    {
        yeshivish = true;
    } 
    else
    {
        yeshivish = false;
    }
}



function copy_text(text)
{
    navigator.clipboard.writeText(text);
    alert("Copied!");
}



var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};