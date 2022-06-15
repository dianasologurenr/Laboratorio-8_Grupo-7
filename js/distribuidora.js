var index=1;
var distList=[]
var edit=false
var idedit=-1


$("#distribuidoraForm").submit(function(e) {
    e.preventDefault();
    
    let nombre = $("#nombre").val();
    let descripcion = $("#descripcion").val();
    let web = $("#web").val();
    let fundacion = $("#fundacion").val();
    let pais = $("#pais").val();

    console.log(nombre);
    console.log(nombre.length);

    var llave=0;

    if((nombre.length <3 || nombre.length>50)){
        $("#error-nombre").show(500).delay(2000).hide(500);
        console.log("holi");
        $("#nombre").addClass("is-invalid");
        setTimeout(function() {
            $("#nombre").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if((descripcion.length <3 || descripcion.length>512)){
        $("#error-descripcion").show(500).delay(2000).hide(500);
        console.log("holi");
        $("#descripcion").addClass("is-invalid");
        setTimeout(function() {
            $("#descripcion").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if(web.length < 3 || web.length > 198 ){
        $("#error-web").show(500).delay(2000).hide(500);
        $("#web").addClass("is-invalid");
        setTimeout(function () {
            $("#web").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if( fundacion<1800 || fundacion>2100){
        $("#error-fundacion").show(500).delay(2000).hide(500);
        console.log("holi");
        $("#fundacion").addClass("is-invalid");
        setTimeout(function() {
            $("#fundacion").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 

    if(pais === ""){
        $("#error-pais").show(500).delay(2000).hide(500);
        $("#pais").addClass("is-invalid");
        setTimeout(function() {
            $("#pais").removeClass('is-invalid');
        }, 2000);
        llave++;
    } 


    if(llave===0){
        let temp_dist={
            nombre: nombre,
            descripcion: descripcion,
            web: web,
            fundacion: fundacion,
            pais: pais
        }

        if(edit){
            distList[idedit]=temp_dist
            $("#" + idedit).replaceWith(createDistri(idedit, nombre,descripcion, web, fundacion,pais));
            
        } else{
            let distribuidora= createDistri(index, nombre,descripcion, web, fundacion,pais)
            $("#distribuidores-container").append(distribuidora)
            $("#msg-creado").show(500).delay(3000).hide(500)
            distList.push(distribuidora);
            index++;
        }


        $('#distribuidoraForm').trigger("reset")
        $(".btn-borrar").click(function () {
            $(this).parent().parent().remove();
        })
        
    }

})

$('#btn-cancelar').click(function () {
    $('#distribuidoraForm').trigger('reset');
})

function createDistri(index, nombre,descripcion, web, fundacion,pais){
    
    let distribuidora=  '<tr id="' + index + '">\n' +
    '                                <td>'+ index+ ' </td>\n' +
    '                                <td>' + nombre + '</td>\n' +
    '                                <td>' + descripcion + '</td>\n' +
    '                                <td>' + web + '</td>\n' +
    '                                <td>' + fundacion + '</td>\n' +
    '                                <td>' + pais + '</td>\n' +
    '                                <td><a class="btn btn-primary" onclick="editarDistri(' + index + ')"><span class="bi bi-pencil-square"></span> Editar</a></td>\n' +
    '                                <td><button class="btn btn-danger btn-borrar" ><span class="bi bi-trash"></span> Borrar</button></td>\n' +
    '                            </tr>'
    return distribuidora

}

function editarDistri(idd) {
    let temp = distList[idd]
    $("#nombre").val(temp.nombre)
    $("#descripcion").val(temp.descripcion);
    $("#web").val(temp.web);
    $("#fundacion").val(temp.fundacion);
    $("#pais").val(temp.pais);
    edit = true
    idedit = idd
}
