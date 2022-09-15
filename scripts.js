function generator(f_name,l_name)
{
    if (l_name == "" && f_name == "")
    {
        var second = ["אלעזר" ,"חנניה" ,"נחמיה" ,"עזרא" ,"עזריה" ,"גבריאל" ,"רפאל" ,"שאול" ,"איתן" ,"יונה" ,"שמעון" ,"יהודה" ,"אלישע" ,"יהושע" ,"דניאל" ,"לאה" ,"רחל" ,"רבקה" ,"שרה" ,"נחמה" ,"דוד" ,"אהרון" ,"משה" ,"שלמה" ,"יונתן" ,"יעקב" ,"יצחק" ,"אברהם" ,"ישראל", "יוסף", "ראובן", "יששכר", "נפטלי", "דן", "בנימין", "מנשה", "אפרים"];
        var third = ["שפירו" ,"פרידמן" ,"קליין" ,"אייזן" ,"רובין" ,"הימלפרב" ,"שוורץ" ,"ויינברג" ,"שכטר" ,"הורוביץ" ,"אהרונסון" ,"יעקובסון" ,"אברהמסון" ,"ליבוביץ" ,"לוין" ,"לוי" ,"כהן" ,"אבוחצירא" ,"שרייבר" ,"וייס" ,"שוורץ","גולדברג" ,"גרינברג"];
        f_name = Math.floor(Math.random() * second.length);
        l_name = Math.floor(Math.random() * third.length);    
        var first = ["אור" ,"צדקת" ,"רצון" ,"תיקון" ,"נצח" ,"שירת" ,"תשועת" ,"מנחת" ,"זכרון" ,"אהבת" ,"נר" ,"תורת" ,"בית" ,"שלוות" ,"דביר" ,"שיח" ,"בני" ,"שמחת" ,"רנת" ,"תפילת" ,"מצוות" ,"אוהל" ,"היכל", "דרכי"];
        var first_random = Math.floor(Math.random() * first.length);
        document.getElementById("eng").innerHTML = ('Generated shul name: ');
        document.getElementById("result").innerHTML = (first[first_random] + ' ' + second[f_name] + ' ע״ש ' + second[f_name] + ' ' + third[l_name]);
        document.getElementById("result").style.fontSize = "x-large";
        document.getElementById("eng").style.fontSize = "x-large";
    }
    else
    {
        var first = ["אור" ,"צדקת" ,"רצון" ,"תיקון" ,"נצח" ,"שירת" ,"תשועת" ,"מנחת" ,"זכרון" ,"אהבת" ,"נר" ,"תורת" ,"בית" ,"שלוות" ,"דביר" ,"שיח" ,"בני" ,"שמחת" ,"רנת" ,"תפילת" ,"מצוות" ,"אוהל" ,"היכל", "דרכי"];
        var first_random = Math.floor(Math.random() * first.length);
        document.getElementById("eng").innerHTML = ('Generated shul name: ');
        document.getElementById("result").innerHTML = (first[first_random] + ' ' + f_name + ' ע״ש ' + f_name + ' ' + l_name);
        document.getElementById("result").style.fontSize = "x-large";
        document.getElementById("eng").style.fontSize = "x-large";
    }
}



function choose_name()
{
    var f_name = document.getElementById("f_name").value;
    var l_name = document.getElementById("l_name").value;
    generator(f_name,l_name);
}