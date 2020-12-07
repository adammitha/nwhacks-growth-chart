var table = document.getElementById("childTable");

if (newChildName !== null) {
    var row = table.insertRow(2);

    var cell0 = row.insertCell(0);
    var cell1 = row.insertCell(1);
    var cell2 = row.insertCell(2);

    var cell0Text = document.createTextNode("<a href='chart.html'><img src='placeholder-profile.jpg' class='thumbnail' width='100' /></a>");
    cell0.appendChild(cell0Text);

    var cell1Text = document.createTextNode(childName);
    cell1.appendChild(cell1Text);

    var cell2Text = document.createTextNode("<button type='button' class='btn btn-primary'>Delete Chart</button> </td>");
    cell2.appendChild(cell2Text);
 
}