function limpaCampos() {
    /*
    let vcampos = document.getElementsByTagName('input');
    //vcampos.value = '';
    for(let i = 0; i < vcampos.length; i++)
        vcampos[i].val('');
    */

    $('#codigo').val('');
    $('#nome').val('');
    $('#cursos').val('');
    $('#email').val('');
    $('#cursos').val('');
    $('#mensagem').val('');

}

function addTable(c, n, cu) {
    $('tbody').append(`
    <tr id='${c}#${n}#${cu}'>
    <td>${c}</td>
    <td>${n}</td>
    <td onclick="removeTabela(this)">X</td>
    <td  onclick="alt(this)">A</td>
    </tr>
    `);
}
function removeTabela(td)
{
    //console.log(td);
    $(td.closest('tr')).remove();
}
function alt(td)
{
    let data = td.closest('tr').id.split("#");
    $('#codigo').val(data[0]);
    $('#nome').val(data[1]);
    $('#cursos').val(data[2]);

}
function validar() {
    let cod = $('#codigo').val();
    let nome = $('#nome').val().trim();

    if (cod == '' || cod <= 0) {
        $('#codigo').addClass('erro');
        return;
    }
    $('#codigo').removeClass('erro');
    if (nome.length > 10 || nome.length == 0) {
        $('#nome').addClass('erro');
        return;
    }
    $('#nome').val(nome);
    $('#nome').removeClass('erro');


    let cursos = $('#cursos').val();
    if (cursos == '') {
        $('#cursos').addClass('erro');
        return;
    }
    $('#cursos').removeClass('erro');

    addTable(cod, nome, cursos);
    limpaCampos();
    

}