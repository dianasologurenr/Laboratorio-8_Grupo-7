var index=1;

$("#distribuidoraForm").submit(function(e) {
    e.preventDefault();
    
    var nombre = $("#nombre").val();
    var descripcion = $("#descripcion").val();
    var web = $("#web").val();
    var fundacion = $("#fundacion").val();
    var pais = $("#pais").val();

    console.log(nombre);
    console.log(nombre.length);

    var llave=0;

    if((nombre.length <3 || nombre.length>50)){
        $("#error-nombre").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#nombre").addClass("is-invalid");
        setTimeout(function() {
            $("#nombre").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if((descripcion.length <3 || descripcion.length>512)){
        $("#error-descripcion").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#descripcion").addClass("is-invalid");
        setTimeout(function() {
            $("#descripcion").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if(web.length<3 || web.length>198){
        $("#error-web").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#web").addClass("is-invalid");
        setTimeout(function() {
            $("#web").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if( fundacion<1800 || fundacion>2100){
        $("#error-fundacion").show(500).delay(1000).hide(500);
        console.log("holi");
        $("#fundacion").addClass("is-invalid");
        setTimeout(function() {
            $("#fundacion").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if(pais === ""){
        $("#error-pais").show(500).delay(3000).hide(500);
        $("#pais").addClass("is-invalid");
        setTimeout(function() {
            $("#pais").removeClass('is-invalid');
        }, 4000);
        llave++;
    } 

    if(llave===0){
        let distribuidora=  '<tr>\n' +
'                                <td>'+ index+ ' </td>\n' +
'                                <td>' + nombre + '</td>\n' +
'                                <td>' + descripcion + '</td>\n' +
'                                <td>' + web + '</td>\n' +
'                                <td>' + fundacion + '</td>\n' +
'                                <td>' + pais + '</td>\n' +
'                                <td><a class="btn btn-primary" href="#"><span class="bi bi-pencil-square"></span> Editar </a></td>\n' +
'                                <td><a class="btn btn-danger" href="#"><span class="bi bi-trash"></span> Borrar</a></td>\n' +
'                            </tr>'
        $("#distribuidores-container").append(distribuidora)
        index++;

        $("#msg-creado").show(500).delay(3000).hide(500)
        $('#distribuidoraForm').trigger("reset")
    }

    $('#btn-cancelar').click(function () {
        $('#distribuidoraForm').trigger('reset');
    })

    
    

    


    



})