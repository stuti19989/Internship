<script>
info="<!DOCTYPE html>
<html>
<head>
<title>Demo</title>
<style>
#div1 {margin:10px;font-size:1.25em;}
table {border-collapse:collapse;border:1px solid #7f7f7f;}
td {border:1px solid #7f7f7f;width:50px;height:50px;text-align:center;}
</style>
</head>
<body >

<div id=&#34;div2&#34;>
    <label for=&#34;wid&#34;>Number of columns</label>
    <input id=&#34;wid&#34; type=&#34;number&#34;>
    <button onclick=&#34;draw()&#34; type=&#34;button&#34;>Draw columns</button>
</div>
<div id=&#34;div1&#34; draggable=&#34;true&#34;></div>

<script>
function draw() {
    //var width = document.getElementById(&#34;wid&#34;).value;
    drawTable();
    }
    


    function drawTable() {
        var totalRows = 1;
        var cellsInRow = document.getElementById(&#34;wid&#34;).value;
        // alert(cellsInRow);
        var min = 1;
        var max = 10;
        // get the reference for the body
        var div1 = document.getElementById(&#39;div1&#39;);

        // creates a <table> element
        var tbl = document.createElement(&#34;table&#34;);
        tbl.setAttribute(&#39;draggable&#39;, &#39;true&#39;);
        // creating rows
        for (var r = 0; r < totalRows; r++) {
            var row = document.createElement(&#34;tr&#34;);
                   
                   // create cells in row
             for (var c = 0; c < cellsInRow; c++) {
                var cell = document.createElement(&#34;td&#34;);
                cell.setAttribute(&#39;draggable&#39;, &#39;true&#39;);
                cell.setAttribute(&#39;contenteditable&#39;,&#39;true&#39;);
                 getRandom = Math.floor(Math.random() * (max - min + 1)) + min;
                var cellText = document.createTextNode(Math.floor(Math.random() * (max - min + 1)) + min);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }           
            
              tbl.appendChild(row); // add the row to the end of the table body
        }
    
     div1.appendChild(tbl); // appends <table> into <div1>
     makeResizable();
}
//window.onload=drawTable;

function makeResizable(tb1)
{
var table = document.getElementsByTagName(&#39;table&#39;)[0];
resizableGrid(table);
}

function resizableGrid(table) {
var row = table.getElementsByTagName(&#39;tr&#39;)[0],
cols = row ? row.children : undefined;
if (!cols) return;

 table.style.overflow = &#39;hidden&#39;;

 var tableHeight = table.offsetHeight;

 for (var i=0;i<cols.length;i++){
  var div = createDiv(tableHeight);
  cols[i].appendChild(div);
  cols[i].style.position = &#39;relative&#39;;
  setListeners(div);
}

function setListeners(div){
  var pageX,curCol,nxtCol,curColWidth,nxtColWidth;

  div.addEventListener(&#39;mousedown&#39;, function (e) {
   curCol = e.target.parentElement;
   nxtCol = curCol.nextElementSibling;
   pageX = e.pageX; 
 
   var padding = paddingDiff(curCol);

   curColWidth = curCol.offsetWidth - padding;
   if (nxtCol)
    nxtColWidth = nxtCol.offsetWidth - padding;
  });

  div.addEventListener(&#39;mouseover&#39;, function (e) {
   e.target.style.borderRight = &#39;2px solid #0000ff&#39;;
  })

  div.addEventListener(&#39;mouseout&#39;, function (e) {
   e.target.style.borderRight = &#39;&#39;;
  })

  document.addEventListener(&#39;mousemove&#39;, function (e) {
   if (curCol) {
    var diffX = e.pageX - pageX;

    if (nxtCol)
     nxtCol.style.width = (nxtColWidth - (diffX))+&#39;px&#39;;

    curCol.style.width = (curColWidth + diffX)+&#39;px&#39;;
   }
  });

  document.addEventListener(&#39;mouseup&#39;, function (e) { 
   curCol = undefined;
   nxtCol = undefined;
   pageX = undefined;
   nxtColWidth = undefined;
   curColWidth = undefined
  });
}

 function createDiv(height){
  var div = document.createElement(&#39;div&#39;);
  div.style.top = 0;
  div.style.right = 0;
  div.style.width = &#39;5px&#39;;
  div.style.position = &#39;absolute&#39;;
  div.style.cursor = &#39;col-resize&#39;;
  div.style.userSelect = &#39;none&#39;;
  div.style.height = height + &#39;px&#39;;
  return div;
}

 function paddingDiff(col){

  if (getStyleVal(col,&#39;box-sizing&#39;) == &#39;border-box&#39;){
   return 0;
  }

  var padLeft = getStyleVal(col,&#39;padding-left&#39;);
  var padRight = getStyleVal(col,&#39;padding-right&#39;);
  return (parseInt(padLeft) + parseInt(padRight));

}

function getStyleVal(elm,css){
  return (window.getComputedStyle(elm, null).getPropertyValue(css))
}
};

</script>
"

document.write(info)
</script>