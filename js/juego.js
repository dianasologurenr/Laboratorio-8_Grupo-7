$("#juegoform").submit(function(e) {
    e.preventDefault();
    
    var nombre = $("#nombre").val();

    console.log(nombre);
    console.log(nombre.length);

    if((nombre.length <3 || nombre.length>50)){
        $("#error-nombre").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#nombre").addClass("is-invalid");
        setTimeout(function() {
            $("#nombre").removeClass('is-invalid');
        }, 2000);
    } 

    



})