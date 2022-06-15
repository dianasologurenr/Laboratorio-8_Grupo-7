$("#juegoform").submit(function(e) {
    e.preventDefault();
    
    var nombre = $("#nombre").val();
    var descripcion = $("#descripcion").val();
    var genero = $("#genero").val();
    var precio = $("#precio").val();
    var imagen = $("#imagen").val();
    var distribuidora = $("#distribuidora").val();
    var plataforma = $("#plataforma").val();


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


    // Rodrigo estuvo aquí :V

    if ((imagen.length < 10 || imagen.length> 256)) {
        $("#error-imagen").show(500).delay(1000).hide(500);
        $("#imagen").addClass("is-invalid");
        setTimeout(function() {
            $("#imagen").removeClass('is-invalid');
        }, 2000);
    }

    if (plataforma === "") {
        $("#error-plataforma").show(500).delay(1000).hide(500);
        $("#plataforma").addClass("is-invalid");
        setTimeout(function() {
            $("#plataforma").removeClass('is-invalid');
        }, 2000);
    }

    if (distribuidora === "") {
        $("#error-distribuidora").show(500).delay(1000).hide(500);
        $("#distribuidora").addClass("is-invalid");
        setTimeout(function() {
            $("#distribuidora").removeClass('is-invalid');
        }, 2000);
    }

    



})