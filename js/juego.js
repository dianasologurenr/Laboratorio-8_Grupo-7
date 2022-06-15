$("#juegoform").submit(function (e) {
    e.preventDefault();

    let nombre = $("#nombre").val();
    let descripcion = $("#descripcion").val();
    let genero = $("#genero").val();
    let precio = $("#precio").val();
    let imagen = $("#imagen").val();
    let distribuidora = $("#distribuidora").val();
    let plataforma = $("#plataforma").val();

    let nombre_invalid = nombre.length < 3 || nombre.length > 50;
    let descrip_invalid = descripcion.length < 3 || descripcion.length > 512;
    let precio_invalid = !isNumeric(precio) && (parseFloat(precio) < 50 || parseFloat(precio) > 550);
    let gen_invalid = genero === "";
    let plat_invalid = plataforma === "";
    let dis_invalid = distribuidora === "";
    let img_invalid = imagen.length < 10 || imagen.length > 256;


    if (nombre_invalid) {
        $("#error-nombre").show(500).delay(3000).hide(500);
        $("#nombre").addClass("is-invalid");
        setTimeout(function () {
            $("#nombre").removeClass('is-invalid');
        }, 4000);
    }

    if (descrip_invalid) {
        $("#error-descripcion").show(500).delay(3000).hide(500);
        $("#descripcion").addClass("is-invalid");
        setTimeout(function () {
            $("#descripcion").removeClass('is-invalid');
        }, 4000);
    }

    if (gen_invalid) {
        $("#error-genero").show(500).delay(3000).hide(500);
        $("#genero").addClass("is-invalid");
        setTimeout(function () {
            $("#genero").removeClass('is-invalid');
        }, 4000);
    }

    if (precio_invalid) {
        $("#error-precio").show(500).delay(3000).hide(500);
        $("#precio").addClass("is-invalid");
        setTimeout(function () {
            $("#precio").removeClass('is-invalid');
        }, 4000);
    }


    if (img_invalid) {
        $("#error-imagen").show(500).delay(3000).hide(500);
        $("#imagen").addClass("is-invalid");
        setTimeout(function () {
            $("#imagen").removeClass('is-invalid');
        }, 4000);
    }

    if (plat_invalid) {
        $("#error-plataforma").show(500).delay(3000).hide(500);
        $("#plataforma").addClass("is-invalid");
        setTimeout(function () {
            $("#plataforma").removeClass('is-invalid');
        }, 4000);
    }

    if (dis_invalid) {
        $("#error-distribuidora").show(500).delay(3000).hide(500);
        $("#distribuidora").addClass("is-invalid");
        setTimeout(function () {
            $("#distribuidora").removeClass('is-invalid');
        }, 4000);
    }

    if (!(nombre_invalid || descrip_invalid || precio_invalid || gen_invalid || plat_invalid ||
        dis_invalid || img_invalid)) {

        let juego = '<tr>\n' +
            '                                <td></td>\n' +
            '                                <td><img style="max-width: 100px;">' + imagen + '</td>\n' +
            '                                <td>\n' +
            '                                    <span>' + nombre + '</span>\n' +
            '                                    <span class="badge bg-warning text-dark">' + genero + '</span>\n' +
            '                                </td>\n' +
            '                                <td>' + descripcion + '</td>\n' +
            '                                <td>' + plataforma + '</td>\n' +
            '                                <td>' + distribuidora + '</td>\n' +
            '                                <td>' + precio + '</td>\n' +
            '                                <td><a class="btn btn-primary"><span class="bi bi-pencil-square"></span> Editar </a></td>\n' +
            '                                <td><button class="btn btn-danger btn-borrar"><span class="bi bi-trash"></span> Borrar</button></td>\n' +
            '                            </tr>'


        $("#msg-creado").show(500).delay(3000).hide(500)
        $("#juegos-container").append(juego)    
        $('#juegoform').trigger("reset")    

        $(".btn-borrar").click(function () {
            $(this).parent().parent().remove();
        })

    }

})

function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}


$('#btn-cancelar').click(function () {
    $('#juegoform').trigger('reset');
})



