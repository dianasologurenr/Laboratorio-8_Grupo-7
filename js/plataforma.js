var plataformas = []
var id = 0
var edit = false
var idedit = -1

$("#plataformaform").submit(function(e) {
    e.preventDefault();
    
    let nombre = $("#nombre").val();
    let descripcion = $("#descripcion").val();
    let web = $("#web").val();

    let validacionnombre=nombre.length <3 || nombre.length>20;
    let validaciondescripcion=descripcion.length <3 || descripcion.length>512;
    let validacionweb=web.length <3 || web.length>256

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
        
        let platObject={
            nombre: nombre,
            descripcion: descripcion,
            web: web
        }

        if (edit) {
            plataformas[idedit] = platObject
            $("#" + idedit).replaceWith(genRow(idedit,nombre,descripcion,web));
        } else {
            let plataforma = genRow(id,nombre,descripcion,web)
            $("#msg-creado").show(500).delay(3000).hide(500)
            $("#plataforma-container").append(plataforma)
            plataformas.push(platObject);
        
        }

        $('#plataformaform').trigger("reset")
        $(".btn-borrar").click(function () {
            $(this).parent().parent().remove();
        })

        id = id + 1
    }
})

$('#btn-cancelar').click(function () {
    $('#plataformaform').trigger('reset');
})

function editarPlataforma(idx) {
    let obj = plataformas[idx]
    $("#nombre").val(obj.nombre)
    $("#descripcion").val(obj.descripcion);
    $("#web").val(obj.web);
    edit = true
    idedit = idx
}

function genRow(id,nombre,descr,web ) {
    let plataforma = '<tr id="' + id + '">\n'+
    '<td>'+id+'</td>\n'+
    '<td>'+nombre+'</td>\n'+
    '<td>'+descr+'</td>\n'+
    '<td>'+web+'</td>\n'+
    '<td><a class="btn btn-primary" onclick="editarPlataforma(' + id + ')"><span class="bi bi-pencil-square"></span> Editar</a></td>\n' +
    '<td><button class="btn btn-danger btn-borrar"><span class="bi bi-trash"></span> Borrar</button></td>\n' +
    '</tr>'
    return plataforma
}
