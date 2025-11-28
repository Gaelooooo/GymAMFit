let inventario = JSON.parse(localStorage.getItem("inventario")) || [];

function renderInventoryUser() {
    const filter = document.getElementById("filterUser").value.toLowerCase();
    const cat = document.getElementById("filterCatUser").value;

    const tbody = document.getElementById("inventoryTableUser");
    tbody.innerHTML = "";

    inventario
        .filter(item =>
            item.name.toLowerCase().includes(filter) &&
            (cat === "" || item.cat === cat)
        )
        .forEach(item => {
            tbody.innerHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.cat}</td>
                    <td>${item.stock}</td>
                </tr>
            `;
        });
}

renderInventoryUser();
