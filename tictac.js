var count = 1;
function fill(control) {
    
  if (count <= 9) {
    if (count % 2 != 0) {
      document.getElementById(control.id).innerHTML = "X";
    } else {
      document.getElementById(control.id).innerHTML = "O";
    }
    count += 1;
    checkpattern();
  } else {
    alert("Match Draw!!!");
    reset();
  }
}
function reset() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById("div" + i).innerHTML = "";
  }
  count = 1;
}

function checkpattern() {
  if (
    pattern("div1", "div2", "div3") ||
    pattern("div1", "div4", "div7") ||
    pattern("div7", "div8", "div9") ||
    pattern("div3", "div6", "div9") ||
    pattern("div4", "div5", "div6") ||
    pattern("div2", "div5", "div8") ||
    pattern("div1", "div5", "div9") ||
    pattern("div3", "div5", "div7")
  ) {
    alert("Winner!!!");
    reset();
  }
}
function pattern(div1, div2, div3) {
  if (
    document.getElementById(div1).innerHTML != "" &&
    document.getElementById(div2).innerHTML != "" &&
    document.getElementById(div3).innerHtml != "" &&
    document.getElementById(div1).innerHTML ==
      document.getElementById(div2).innerHTML &&
    document.getElementById(div2).innerHTML ==
      document.getElementById(div3).innerHTML
  ) {
    return true;
  }
}
