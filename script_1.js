function fetchData() {

    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {

        arr = []
        for(let i =0 ; i < 10; i++){

            let randomIndex =
            math.floor(math.random() * data.product.length);

            arr.push(
                data.product[randomIndex].price
            );
        }

        showGraph();
    });
}

function Sort() {

    for(let i = 0; i < arr.length; i++) {

        for(let j = 0; j < arr.length - i - 1; j++) {

            if(arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                showGraph();
            }
        }
    }
    
}

function showGraph() {
    
    let graph = document.getElementById("graph");    
    graph.innerHTML = "";
    
arr.forEach(num => {

    graph.innerHTML += `
    <div class="graph"
      style="height:${num * 5}px ; width:70px ;">
    ${num}
    </div>    
    `;
});    
}