//PQ-Formel
function pqFormel(p, q) {
  var x1 = p / 2 + Math.sqrt(Math.pow(p / 2, 2) - q);
  var x2 = p / 2 - Math.sqrt(Math.pow(p / 2, 2) - q);
  return { "+": x1, "-": x2 };
}

const p = document.getElementById("p");
const q = document.getElementById("q");
const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const pVal = parseInt(p.value);
  const qVal = parseInt(q.value);
  const some = pqFormel(pVal, qVal);
  console.log(some);

  document.getElementById("svar1").innerHTML = some["+"];
  document.getElementById("svar2").innerHTML = some["-"];
});

//Funktions k- och m-värde
function lutning (x1, x2, y1, y2){
    var k = (y2 - y1) / (x2 - x1);
    var m = y1 - (k * x1);
    return { "k": k, "m": m}
}

const x1 = document.getElementById("x1");
const x2 = document.getElementById("x2");
const y1 = document.getElementById("y1");
const y2 = document.getElementById("y2");
const submit2 = document.getElementById("submit2");

submit2.addEventListener("click", () => {
    const x1Val = parseInt(x1.value);
    const x2Val = parseInt(x2.value);
    const y1Val = parseInt(y1.value);
    const y2Val = parseInt(y2.value);

   const Ans = lutning(x1Val, x2Val, y1Val, y2Val);

    document.getElementById("kAns").innerHTML = Ans["k"];
    document.getElementById("mAns").innerHTML = Ans["m"];
})
