function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5e9ay8RowCe":
        Script1();
        break;
      case "5i4YR26RgvK":
        Script2();
        break;
      case "5WupEXV0bGH":
        Script3();
        break;
      case "6ZK88k4Xwyv":
        Script4();
        break;
      case "6in1fz9FYd8":
        Script5();
        break;
      case "687QcyOPsdT":
        Script6();
        break;
      case "5hJjqVDaJ9z":
        Script7();
        break;
      case "6LuQ4XXJXLI":
        Script8();
        break;
      case "6ha6Tl3kY3A":
        Script9();
        break;
      case "5nKTA9rCLfJ":
        Script10();
        break;
      case "5paJC4yr2R8":
        Script11();
        break;
      case "5aQbP7nvYKU":
        Script12();
        break;
      case "6nZAjQZpEuk":
        Script13();
        break;
      case "5xcfk96cZpo":
        Script14();
        break;
      case "6VMRXc36vpW":
        Script15();
        break;
      case "6qUIPogHKZC":
        Script16();
        break;
      case "6at65Ki8iyO":
        Script17();
        break;
      case "5mr1vVLNcfy":
        Script18();
        break;
      case "6CMFlYKetSD":
        Script19();
        break;
      case "6ZiDZekqmHV":
        Script20();
        break;
      case "6rW9yRYZLSP":
        Script21();
        break;
      case "5wg2EEV7DlH":
        Script22();
        break;
      case "6bxWMOq6som":
        Script23();
        break;
  }
}

function Script1()
{
  player = GetPlayer();

var x = player.GetVar("SizeOfRoom");
var y = player.GetVar("CountOfRooms");

var func2 = 50*x+500;
if (func2 <1000) 
{
 func2 = 1000;
}
func2= player.GetVar("check2")*func2;

if (y==1)
{ 
var func3=player.GetVar("check3")*1000;
}
else
{
var func3=player.GetVar("check3")*500*y;
}

var func4=20*x;

var func5=player.GetVar("check5")*func4;
var func6=player.GetVar("check6")*func4;
var func7=player.GetVar("check7")*func4;
var func8=player.GetVar("check8")*func4;
var func9=player.GetVar("check9")*func4;
var func10=player.GetVar("check10")*func4;
var func11=player.GetVar("check11")*func4;
var func12=player.GetVar("check12")*func4;
var func13=player.GetVar("check13")*func4;
var func14=player.GetVar("check14")*func4;
var func15=player.GetVar("check15")*func4;
var func16=player.GetVar("check16")*func4;

var func17=player.GetVar("check17")*60*x;
if (func17 < 1000)
{
func17=1000;
}

var func18=player.GetVar("check18")*500*y;
var func19=player.GetVar("check19")*100*x;
var func20=player.GetVar("check20")*200*x;
var func21=player.GetVar("check21")*100*x;
var func22=player.GetVar("check22")*300*x;
var func23=player.GetVar("check23")*8000;

var func24 = Math.ceil((50*x+500)/1000)*1000;
func24= player.GetVar("check24")*func24;

var totalcount=func2+func3+func4+func5+func6+func7+func8+func9+func10+func11+func12+func13+func14+func15+func16+func17+func18+func19+func20+func21+func22+func23+func24;


player.SetVar("TotalCost", totalcount);


//alert("всего: " + totalcount + " руб.\nОбмер помещния = "+func2 +"\nРазработка концепции = " + func3 + "\nОбмерный план = " + func4 + "\nПлан перепланировки = " + func5 +"\nПлан расстановки мебели = " + func6 + "\nПлан демонтажных работ = " + func7 + "\nПлан монтажных работ = " + func8 +"\nПлан потолков = "+ func9 +"\nПлан полов = " + func10 + "\nПлан теплых полов = " + func11 + "\nПлан расположения светильников = " + func12 + "\nПлан расположения розеток и выключателей = " + func13 + "\nПлан расположения сантехнического оборудования = " + func14 + "\nЧертежи встроенной и корпусной мебели под заказ = " + func15+"\nДополнительные чертежи при необходимости = " + func16 +"\nРазвертки помещений с указанием материалов и декоративных элементов = "+ func17 +"\nКоллажи интерьера = "+ func18 + "\nСписок покупок = " + func19 + "\nКомплектация  = " + func20 +"\nСмета = " + func21 + "\n3д визуализация = " + func22+"\nАвторский надзор = " + func23 + "\nФинальная консультация по расстановке декора = " + func24);

}

function Script2()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'1';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script3()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'2';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script4()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'3';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script5()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'4';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script6()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'5';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script7()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'6';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script8()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'7';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script9()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'8';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script10()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'9';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script11()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"));
var s = x.slice(0, -1);
var ss = Number(s);
player.SetVar("SizeOfRoom", ss);



}

function Script12()
{
  player = GetPlayer();
var x = String(player.GetVar("SizeOfRoom"))+'0';
var ss = Number(x);
player.SetVar("SizeOfRoom", ss);


}

function Script13()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'1';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script14()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'2';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script15()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'3';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script16()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'4';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script17()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'5';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script18()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'6';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script19()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'7';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script20()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'8';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script21()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'9';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

function Script22()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"));
var s = x.slice(0, -1);
var ss = Number(s);
player.SetVar("CountOfRooms", ss);



}

function Script23()
{
  player = GetPlayer();
var x = String(player.GetVar("CountOfRooms"))+'0';
var ss = Number(x);
player.SetVar("CountOfRooms", ss);


}

