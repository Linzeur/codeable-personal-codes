const $divOperation = document.getElementsByClassName("opt");
const $frm = document.getElementById("frmCalculator");
const $nDivs = $divOperation.length;
for (var i = 0; i < $nDivs; i++) {
  $divOperation[i].addEventListener("click", selectedAsOption);
}

$frm.addEventListener("submit", operationSubmit);

const operations = {
  "+": function(x, y) {
    return x + y;
  },
  "-": function(x, y) {
    return x - y;
  },
  "*": function(x, y) {
    return x * y;
  },
  "/": function(x, y) {
    return x / y;
  },
  sqrt: function(x, y) {
    return Math.sqrt(x);
  },
  "**": function(x, y) {
    return x ** y;
  }
};

function selectedAsOption(event) {
  for (var i = 0; i < $nDivs; i++) {
    $divOperation[i].className = "opt";
  }
  console.log(event.target.tagName);
  if (event.target.tagName != "SUP") event.target.className = "opt selected";
  else event.target.parentNode.className = "opt selected";
}

function operationSubmit(event) {
  event.preventDefault();
  const $elements = event.target.elements;
  const $firstInput = $elements[0].value * 1;
  const $secondInput = $elements[1].value * 1;
  console.log($firstInput);
  let operator = document
    .getElementsByClassName("selected")[0]
    .getAttribute("data-value");
  document.getElementById("result").innerText = operations[operator](
    $firstInput,
    $secondInput
  );
}
