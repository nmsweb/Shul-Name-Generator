var x = "";
var first = ["נווה", "תפארת", "ברית", "עטרת", "פאר", "זכות", "דרכי", "היכל", "מצוות", "תפילת", "רינת", "שמחת", "שלוות", "בית", "אהבת", "זכרון", "מנחת", "תשועת", "צדקת", "שירת", "דביר", "קרן", "שושנת", "יד", "עץ", "בני", "נצח", "שיח", "אוהל", "אור", "רצון", "תיקון", "נר", "תורת", "משכן"];
var w_jeshurun = ["נווה", "תפארת", "ברית", "עטרת", "פאר", "זכות", "דרכי", "היכל", "מצוות", "תפילת", "רינת", "שמחת", "שלוות", "בית", "אהבת", "זכרון", "מנחת", "תשועת", "צדקת", "בני", "נצח", "שיח", "אוהל"];
var w_olam = ["נווה", "תפארת", "ברית", "עטרת", "פאר", "זכות", "דרכי", "היכל", "מצוות", "תפילת", "רינת", "שמחת", "שלוות", "בית", "אהבת", "זכרון", "מנחת", "תשועת", "צדקת", "אור", "רצון", "תיקון", "נר", "תורת", "משכן", "שם"];
var rand_first;

function generator1()
{
    clear_box();
    var second = ["אלעזר" ,"חנניה" ,"נחמיה" ,"עזרא" ,"עזריה" ,"גבריאל" ,"רפאל" ,"שאול" ,"איתן" ,"יונה" ,"שמעון" ,"יהודה" ,"אלישע" ,"יהושע" ,"דניאל" ,"לאה" ,"רחל" ,"רבקה" ,"שרה" ,"נחמה" ,"דוד" ,"אהרון" ,"משה" ,"שלמה" ,"יונתן" ,"יעקב" ,"יצחק" ,"אברהם" ,"ישראל", "יוסף", "ראובן", "יששכר", "נפתלי", "דן", "בנימין", "מנשה", "אפרים", "עקיבא", "אסתר", "חיים", "ישורון", "עולם"];
    var second_random = Math.floor(Math.random() * second.length);
    if (second[second_random] == "ישורון")
    {
        rand_first = w_jeshurun.slice();
        document.getElementById("alshem").style.visibility="hidden";
    }
    else if (second[second_random] == "עולם")
    {
        rand_first = w_olam.slice();
        document.getElementById("alshem").style.visibility="hidden";
    }
    else
    {
        rand_first = first.slice();
        document.getElementById("alshem").style.visibility="visible";
    }
    var first_random = Math.floor(Math.random() * rand_first.length);
    document.getElementById("result").innerHTML = (rand_first[first_random] + ' ' + second[second_random]);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("donor").innerHTML = ('');
    x = second[second_random];
    if (isMobile.any()) {document.getElementById("copy_button").style.visibility = "visible";}
}

function generator2(f_name)
{
    var first_random = Math.floor(Math.random() * first.length);
    document.getElementById("result").innerHTML = (first[first_random] + ' ' + f_name);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("donor").style.fontSize = "x-large";
    x = f_name;
    if (isMobile.any()) {document.getElementById("copy_button").style.visibility = "visible";}
}


function name_after()
{
    var third = ["שפירו" ,"פרידמן" ,"קליין" ,"אייזן" ,"רובין" ,"הימלפרב" ,"שוורץ" ,"ויינברג" ,"שכטר" ,"הורוביץ" ,"אהרונסון" ,"יעקובסון" ,"אברהמסון" ,"ליבוביץ" ,"לוין" ,"לוי" ,"כהן" ,"אבוחצירא" ,"שרייבר" ,"וייס" ,"שוורץ","גולדברג" ,"גרינברג","אדלמן", "הופמן", "גולדמן", "בלאו", "בלום", "ליברמן", "ברנשטיין", "מלמד", "שטרן", "אלטמן", "לנדאו", "ליכטנשטיין", "קפלן", "בלוך", "ברקוביץ", "בוהם", "שולמן", "פרלמן"];
    var l_name = Math.floor(Math.random() * third.length);
    document.getElementById("donor").innerHTML = (x + " " + third[l_name]);
    document.getElementById("donor").style.fontSize = "x-large";
}

function choose_name()
{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    if (f_name == ""|| l_name == "")
    {
        alert("Error: !נא להכניס שם");
        return 0;
    }
    if(!(/^[\u05D0-\u05EA + ֿ\u05F3]+$/.test(f_name)))
    {
        alert("Error: !נא להכניס שם בעברית");
        return 0;
    }
    if(!(/^[\u05D0-\u05EA + ֿ\u05F3]+$/.test(l_name)))
    {
        alert("Error: !נא להכניס שם בעברית");
        return 0;
    }
    document.getElementById('donor').innerHTML = f_name + " " + l_name;
    document.getElementById("alshem").style.visibility="visible";
    generator2(f_name);
}


function clear_box()
{
    document.getElementById('f_name').value = "";
    document.getElementById('l_name').value = "";
}


function open_eng()
{
    window.open("eng.html", "_self");
}



function copy_text(text)
{
    navigator.clipboard.writeText(text);
    alert("!הועתק");
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

