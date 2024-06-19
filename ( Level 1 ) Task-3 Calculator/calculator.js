var val = document.getElementById('inp');

function AT_Add(v) {
    val.value += v;
}

function percent_sign(p) {
    val.value += p;
}

function cls() {
    val.value = "";
}

function exe() {
    val.value = eval(val.value);
}

function cancel() {
    val.value = val.value.substr(0, val.value.length - 1)
}