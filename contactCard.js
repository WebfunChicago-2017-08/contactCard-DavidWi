$(document).ready(function(){
    $("button").click(function(){
        var first_name = $(".txtA").val();
        var last_name = $(".txtB").val();
        var email = $(".txtC").val();
        var number = $(".txtD").val();
        $("tbody").append("<tr>" +"<td>" + first_name + "</td>" + "<td>" + last_name + "</td>"  +"<td>" + email + "</td>" +"<td>" + number + "</td></tr>");
    })
});