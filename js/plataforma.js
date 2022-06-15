var index=0;
$("#plataformaform").submit(function(e) {
    e.preventDefault();

    var lista=[];
    
    var nombre = $("#nombre").val();
    var descripcion = $("#descripcion").val();
    var web = $("#web").val();

    var validacionnombre=nombre.length <3 || nombre.length>20;
    var validaciondescripcion=descripcion.length <3 || descripcion.length>512;
    var validacionweb=web.length <3 || web.length>256

    if(validacionnombre){
        $("#error-nombre").show(500).delay(3000).hide(500);
        $("#nombre").addClass("is-invalid");
        setTimeout(function() {
            $("#nombre").removeClass('is-invalid');
        }, 4000);
    } 

    if(validaciondescripcion){
        $("#error-descripcion").show(500).delay(3000).hide(500);
        $("#descripcion").addClass("is-invalid");
        setTimeout(function() {
            $("#descripcion").removeClass('is-invalid');
        }, 4000);
    }

    if(validacionweb){
        $("#error-web").show(500).delay(3000).hide(500);
        $("#web").addClass("is-invalid");
        setTimeout(function() {
            $("#web").removeClass('is-invalid');
        }, 4000);
    }

    if(!validacionnombre && !validaciondescripcion && !validacionweb){
        let object={
            id:index,
            nombrep:nombre,
            descripcionp:descripcion,
            webp:web
        }
        index+=1;
        lista.push(object);
        $(".tabla").append(
            '<tr>'+
                            '<td class="text-center">'+(parseInt(object.id,10) + 1)+'</td>'+
                            '<td class="text-center">'+object.nombrep+'</td>'+
                            '<td class="text-center">'+object.descripcionp+'</td>'+
                            '<td class="text-center">'+object.webp+'</td>'+
                            '<td class="text-center"><a class="btn btn-primary"  ><span class="bi bi-pencil-square"></span></a></td>' +
                            '<td class="text-center"><button class="btn btn-danger" ><span class="bi bi-trash"></span></button></td>'
                            +'</tr>');
        

                            $(".btn-borrar").click(function () {
                                $(this).parent().parent().remove();
                            })
    }
});

