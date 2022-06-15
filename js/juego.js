var juegos = []
var id = 0
var edit = false
var idedit = -1

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
    let precio_invalid = !isNumeric(precio) || !(isNumeric(precio) && (parseFloat(precio) >= 50 && parseFloat(precio) <= 550));
    let gen_invalid = genero === "";
    let plat_invalid = plataforma === "";
    let dis_invalid = distribuidora === "";
    let img_invalid = (imagen.length < 10 || imagen.length > 256) || !validURL(imagen);

    if (precio_invalid) {
        $("#error-precio").show(500).delay(3000).hide(500);
        $("#precio").addClass("is-invalid");
        setTimeout(function () {
            $("#precio").removeClass('is-invalid');
        }, 4000);
    }

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

        let juegoObj = {
            imagen: imagen,
            nombre: nombre,
            genero: genero,
            descripcion: descripcion,
            plataforma: plataforma,
            distribuidora: distribuidora,
            precio: precio
        }

        if (edit) {
            juegos[idedit] = juegoObj
            $("#" + idedit).replaceWith(genRow(idedit, imagen, nombre, genero, descripcion, plataforma, distribuidora, precio));
        } else {
            let juego = genRow(id, imagen, nombre, genero, descripcion, plataforma, distribuidora, precio)
            $("#msg-creado").show(500).delay(3000).hide(500)
            $("#juegos-container").append(juego)
            juegos.push(juegoObj);
        }


        $('#juegoform').trigger("reset")
        $(".btn-borrar").click(function () {
            $(this).parent().parent().remove();
        })

        id = id + 1
    }

})

$('#btn-cancelar').click(function () {
    $('#juegoform').trigger('reset');
})

function editarJuego(idx) {
    let obj = juegos[idx]
    $("#nombre").val(obj.nombre)
    $("#descripcion").val(obj.descripcion);
    $("#genero").val(obj.genero);
    $("#precio").val(obj.precio);
    $("#imagen").val(obj.imagen);
    $("#distribuidora").val(obj.distribuidora);
    $("#plataforma").val(obj.plataforma);
    edit = true
    idedit = idx
}

function genRow(id, img, nombre, gen, des, plat, dis, precio) {
    let juego = '<tr id="' + id + '">\n' +
        '       <td>' + id + '</td>\n' +
        '       <td><img style="max-width: 100px;" src="' + img + '"></td>\n' +
        '   <td>\n' +
        '       <span>' + nombre + '</span>\n' +
        '       <span class="badge bg-warning text-dark">' + gen + '</span>\n' +
        '   </td>\n' +
        '   <td>' + des + '</td>\n' +
        '   <td>' + plat + '</td>\n' +
        '   <td>' + dis + '</td>\n' +
        '   <td>' + precio + '</td>\n' +
        '   <td><a class="btn btn-primary" onclick="editarJuego(' + id + ')"><span class="bi bi-pencil-square"></span> Editar</a></td>\n' +
        '   <td><button class="btn btn-danger btn-borrar"><span class="bi bi-trash"></span> Borrar</button></td>\n' +
        '</tr>'
    return juego
}

function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}

