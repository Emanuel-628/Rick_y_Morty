
function hacerAlgo (enlace) {
    
    $.ajax({
        //alert ("hola"),
        url: enlace,
        contentType: "application/json",
        dataType: 'json',
        success: function(result){
            //console.log(result);
            result.results.forEach(element => {
                $("#feed").append("<div id='ITEM'>" + element.name + "<br>" + "<img src = " + element.image +"> <br>" + "</div>")
            });
            if (result.info.next) {
                hacerAlgo(result.info.next)
            }
        }
    })
}