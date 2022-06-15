$("#juegoform").submit(function(e) {
    e.preventDefault();
    
    var nombre = $("#nombre").val();
    var descripcion = $("#descripcion").val();
    var web = $("#web").val();
    var fundacion = $("#fundacion").val();
    var pais = $("#pais").val();

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

    if((descripcion.length <3 || descripcion.length>512)){
        $("#error-descripcion").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#descripcion").addClass("is-invalid");
        setTimeout(function() {
            $("#descripcion").removeClass('is-invalid');
        }, 2000);
    } 

    if(web.length<3 || web.length>198){
        $("#error-web").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#web").addClass("is-invalid");
        setTimeout(function() {
            $("#web").removeClass('is-invalid');
        }, 2000);
    } 

    if( fundacion<1800 || fundacion>2100){
        $("#error-fundacion").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#fundacion").addClass("is-invalid");
        setTimeout(function() {
            $("#fundacion").removeClass('is-invalid');
        }, 2000);
    } 

    if(pais === ""){
        $("#error-pais").show(500).delay(3000).hide(500);
        $("#pais").addClass("is-invalid");
        setTimeout(function() {
            $("#pais").removeClass('is-invalid');
        }, 4000);
    } 


    



})