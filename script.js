function test(){
    var list = document.getElementById ("software").value;

    alert ("acknowledged");
    var li =localStorage.setItem("list",list);

    var li =localStorage.getItem("list",list);
}
function tes(){
    var ninst = document.getElementById ("soft").value.split("\n");
    alert ("compairing");

    var li =localStorage.getItem("list");

    for (let i = 0; i < ninst.length; i++) {
        let exists = li.includes(ninst[i]);
        console.log(ninst[i] + " " + exists);
    }

}