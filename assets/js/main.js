let row = document.querySelector('#mobiles .row');

axios.get('https://fakestoreapi.com/products').then(res => {
    console.log(res);
    for (let i = 0; i < 8; i++) {
        row.innerHTML += `
        <div class="col-3">
            <div class="card" style="he: 18rem;">
                <img src="${res.data[i].image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${res.data[i].title}</h5>
                    <p class="card-text">${res.data[i].description.length > 50 ? res.data[i].description.substring(0,50)+ " ..." : res.data[i].description}</p>
                    <a href="#" class="btn btn-success w-100">Səbətə əlavə et</a>
                </div>
            </div>
        </div>
        `
    }
})