let contador = 0;
let input = document.getElementById('inputTarefa');
let btnadd = document.getElementById('btn-add');
let main = document.getElementById('arealista');

function addTarefa() {
    let valorinput = input.value.trim();

    if (valorinput !== "") {
        ++contador;

        let novoitem = `
        <div class="item" id="item_${contador}">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div> 
            <div onclick="marcarTarefa(${contador})" class="item-nome" id="nome_${contador}">
                ${valorinput}
            </div> 
            <div class="item-botao">
                <button class="delete" onclick="deletar(${contador})">
                    <i class="mdi mdi-delete"></i> Deletar
                </button>
            </div> 
        </div>`;

        main.innerHTML += novoitem;

        // limpa campo
        input.value = "";
        input.focus();
    }
}

// enter = adicionar
input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        btnadd.click();
    }
});

function deletar(id) {
    let tarefa = document.getElementById("item_" + id);
    if (tarefa) {
        tarefa.remove();
    }
}

function marcarTarefa(id) {
    let item = document.getElementById("item_" + id);
    let icone = document.getElementById("icone_" + id);

    if (item.classList.contains("clicado")) {
        // desmarcar
        item.classList.remove("clicado");
        icone.classList.remove("mdi-check-circle");
        icone.classList.add("mdi-circle-outline");
    } else {
        // marcar como concluída
        item.classList.add("clicado");
        icone.classList.remove("mdi-circle-outline");
        icone.classList.add("mdi-check-circle");
        item.parentNode.appendChild(item);
    }
}
