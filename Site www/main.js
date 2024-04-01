function logIn()
{
	userName=document.forms["form"].userName.value;
	password=document.forms["form"].password.value;
	if(userName=="student" && password=="wsb1234")
	{
		window.open("mainPage.html")
		window.close("loginPage.html")
	} else {
		document.getElementById('feedBack').innerHTML="Nazwa użytkownika lub hasło jest niepoprawne. Spróbuj ponownie";
	}
}
function logOut() 
{
	window.open("loginPage.html")
	window.close("mainPage.html")
}