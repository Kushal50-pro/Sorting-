let arr = [];

async function fetchData() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  arr = data.products.slice(0,10).map(p => p.price);
  showBars();
}

function showBars() {
  let bars = document.getElementById("bars");
  bars.innerHTML = "";

  arr.forEach(num => {
    bars.innerHTML += `
      <div class="bar"
      style="height:${num*2}px">
      ${num}
      </div>`;
  });
}

function sleep(ms){
  return new Promise(r => setTimeout(r, ms));
}

async function bubbleSort() {
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i-1;j++){

      if(arr[j] > arr[j+1]){
        [arr[j], arr[j+1]] =
        [arr[j+1], arr[j]];

        showBars();
        await sleep(300);
      }
    }
  }

  fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      status:"success",
      sortedArray:arr
    })
  });
}