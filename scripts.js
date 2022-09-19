var x = "";

function generator1()
{
    clear_box();
    var second = ["אלעזר" ,"חנניה" ,"נחמיה" ,"עזרא" ,"עזריה" ,"גבריאל" ,"רפאל" ,"שאול" ,"איתן" ,"יונה" ,"שמעון" ,"יהודה" ,"אלישע" ,"יהושע" ,"דניאל" ,"לאה" ,"רחל" ,"רבקה" ,"שרה" ,"נחמה" ,"דוד" ,"אהרון" ,"משה" ,"שלמה" ,"יונתן" ,"יעקב" ,"יצחק" ,"אברהם" ,"ישראל", "יוסף", "ראובן", "יששכר", "נפתלי", "דן", "בנימין", "מנשה", "אפרים", "עקיבא", "אסתר"];
    var first = ["אור" ,"צדקת" ,"רצון" ,"תיקון" ,"נצח" ,"שירת" ,"תשועת" ,"מנחת" ,"זכרון" ,"אהבת" ,"נר" ,"תורת" ,"בית" ,"שלוות" ,"דביר" ,"שיח" ,"בני" ,"שמחת" ,"רנת" ,"תפילת" ,"מצוות" ,"אוהל" ,"היכל", "דרכי", "קרן", "שושנת", "רינת", "זכות", "פאר", "עטרת", "יד", "ברית", "תפארת"];
    var first_random = Math.floor(Math.random() * first.length);
    var second_random = Math.floor(Math.random() * second.length);
    document.getElementById("eng").innerHTML = ('Generated shul name: ');
    document.getElementById("result").innerHTML = (first[first_random] + ' ' + second[second_random]);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("eng").style.fontSize = "x-large";
    document.getElementById("donor").innerHTML = ('');
    x = second[second_random];
}

function generator2(f_name)
{
    var first = ["אור" ,"צדקת" ,"רצון" ,"תיקון" ,"נצח" ,"שירת" ,"תשועת" ,"מנחת" ,"זכרון" ,"אהבת" ,"נר" ,"תורת" ,"בית" ,"שלוות" ,"דביר" ,"שיח" ,"בני" ,"שמחת" ,"רנת" ,"תפילת" ,"מצוות" ,"אוהל" ,"היכל", "דרכי", "קרן", "שושנת", "רינת", "זכות", "פאר", "עטרת", "יד", "ברית", "תפארת"];
    var first_random = Math.floor(Math.random() * first.length);
    document.getElementById("eng").innerHTML = ('Generated shul name: ');
    document.getElementById("result").innerHTML = (first[first_random] + ' ' + f_name);
    document.getElementById("result").style.fontSize = "x-large";
    document.getElementById("eng").style.fontSize = "x-large";
    document.getElementById("donor").style.fontSize = "x-large";
    x = f_name;
}


function name_after()
{
    if (x == "")
    {
        alert("Error: Please generate a shul name first");
        return 0;
    }
    var third = ["שפירו" ,"פרידמן" ,"קליין" ,"אייזן" ,"רובין" ,"הימלפרב" ,"שוורץ" ,"ויינברג" ,"שכטר" ,"הורוביץ" ,"אהרונסון" ,"יעקובסון" ,"אברהמסון" ,"ליבוביץ" ,"לוין" ,"לוי" ,"כהן" ,"אבוחצירא" ,"שרייבר" ,"וייס" ,"שוורץ","גולדברג" ,"גרינברג","אדלמן", "הופמן", "גולדמן", "בלאו", "בלום", "ליברמן", "ברנשטיין", "מלמד", "שטרן", "אלטמן", "לנדאו", "ליכטנשטיין", "קפלן", "בלוך", "ברקוביץ", "בוהם", "שולמן", "פרלמן"];
    var l_name = Math.floor(Math.random() * third.length);
    document.getElementById("donor").innerHTML = (x + " " + third[l_name]);
    document.getElementById("donor").style.fontSize = "x-large";
}

function choose_name()
{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    if(!(/^[\u05D0-\u05EA + ֿ\u05F3]+$/.test(f_name)))
    {
        alert("Error: please enter a name in hebrew!");
        return 0;
    }
    if(!(/^[\u05D0-\u05EA + ֿ\u05F3]+$/.test(l_name)))
    {
        alert("Error: please enter a name in hebrew!");
        return 0;
    }
    if (f_name == ""|| l_name == "")
    {
        alert("Error: please enter a name first!");
        return 0;
    }
    document.getElementById('donor').innerHTML = f_name + " " + l_name;
    generator2(f_name);
}


function clear_box()
{
    document.getElementById('f_name').value = "";
    document.getElementById('l_name').value = "";
}