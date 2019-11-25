//jQuery DOM selectors
var table = $("#weatherData");
var header = $(".header");

/*
	*Connects to Openweathermap API and fetches a json file with weather data of a city.
	*Gets and displays the name of the city as header.
	*Gets and displays average temperature, humidity and date on a HTML table.
	*Only first 5 entries are accessed.
*/
$("document").ready(function (){
	$.ajax({
		type:'GET',
		/*API doesn't respond with "Access-Control-Allow-Origin" header which makes browsers block the request*/
		url:'https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=b6907d289e10d714a6e88b30761fae22',
		crossOrgin:true,
		dataType:"json",
		success: function(data){
			header.append("Weather for: "+data.city.name);
			for(i = 0; i < 5; i++){
				var row = $("<tr></tr>");
				row.append("<td>"+data.list[i].main.temp+"</td>");
				row.append("<td>"+data.list[i].main.humidity+"</td>");
				row.append("<td>"+data.list[i].dt_txt+"</td>");
				table.append(row);
			}
		}
	});
});