$("#juegoform").submit(function(e) {
    e.preventDefault();
    
    var nombre = $("#nombre").val();
    var descripcion = $("#descripcion").val();
    var genero = $("#genero").val();
    var precio = $("#precio").val();



    console.log(nombre);
    console.log(nombre.length);

    if((nombre.length <3 || nombre.length>50)){
        $("#error-nombre").show(500).delay(1000).hide(500);
        $("#nombre").addClass("is-invalid");
        setTimeout(function() {
            $("#nombre").removeClass('is-invalid');
        }, 2000);
    }
    if((descripcion.length <3 || descripcion.length>512)){
        $("#error-nombre").show(500).delay(1000).hide(500);
        $("#descripcion").addClass("is-invalid");
        setTimeout(function() {
            $("#descripcion").removeClass('is-invalid');
        }, 2000);
    } 

    



})