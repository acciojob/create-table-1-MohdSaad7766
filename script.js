function insert_Row() {
    // Get the table by its ID
    const table = document.getElementById("sampleTable");
    
    // Insert a new row at the top of the table (position 0)
    const newRow = table.insertRow(0);
    
    // Create two new cells for the new row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    
    // Set the cell values as specified
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}