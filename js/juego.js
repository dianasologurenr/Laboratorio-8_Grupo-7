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
        $("#error-nombre").show(500).delay(3000).hide(500);
        $("#nombre").addClass("is-invalid");
        setTimeout(function() {
            $("#nombre").removeClass('is-invalid');
        }, 4000);
    }
    if((descripcion.length <3 || descripcion.length>512)){
        $("#error-descripcion").show(500).delay(3000).hide(500);
        $("#descripcion").addClass("is-invalid");
        setTimeout(function() {
            $("#descripcion").removeClass('is-invalid');
        }, 4000);
    } 
    if(genero === ""){
        $("#error-genero").show(500).delay(3000).hide(500);
        $("#genero").addClass("is-invalid");
        setTimeout(function() {
            $("#genero").removeClass('is-invalid');
        }, 4000);
    } 
    if(typeof(precio) === String){
        $("#error-precio").show(500).delay(3000).hide(500);
        $("#precio").addClass("is-invalid");
        setTimeout(function() {
            $("#precio").removeClass('is-invalid');
        }, 4000);
    } 
    if(isNumeric(precio)){
        if(parseFloat(precio) <50 || parseFloat(precio)>550 ){
            $("#error-precio-maxmin").show(500).delay(3000).hide(500);
            $("#precio").addClass("is-invalid");
            setTimeout(function() {
                $("#precio").removeClass('is-invalid');
            }, 4000);
        }
    } else {
        $("#error-precio-num").show(500).delay(3000).hide(500);
        $("#precio").addClass("is-invalid");
        setTimeout(function() {
            $("#precio").removeClass('is-invalid');
        }, 4000);
    }

    function isNumeric(str) {
        if (typeof str != "string") return false // we only process strings!
        return !isNaN(str) && // use type coercion to parse the entirety of the string (parseFloat alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
      }


    // Rodrigo estuvo aquí :V

    if ((imagen.length < 10 || imagen.length> 256)) {
        $("#error-imagen").show(500).delay(3000).hide(500);
        $("#imagen").addClass("is-invalid");
        setTimeout(function() {
            $("#imagen").removeClass('is-invalid');
        }, 4000);
    }

    if (plataforma === "") {
        $("#error-plataforma").show(500).delay(3000).hide(500);
        $("#plataforma").addClass("is-invalid");
        setTimeout(function() {
            $("#plataforma").removeClass('is-invalid');
        }, 4000);
    }

    if (distribuidora === "") {
        $("#error-distribuidora").show(500).delay(3000).hide(500);
        $("#distribuidora").addClass("is-invalid");
        setTimeout(function() {
            $("#distribuidora").removeClass('is-invalid');
        }, 4000);
    }

    



})