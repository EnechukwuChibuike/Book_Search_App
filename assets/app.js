function search(event) {
   document.getElementById("row").innerHTML = "";
   let inputSearch = document.getElementById("searchBook").value;
   const url = `https://www.googleapis.com/books/v1/volumes?q=${inputSearch}`;
   event.preventDefault();
   fetch(url)
      .then((resp) => resp.json())
      .then(function (data) {
         let row = document.getElementById("row");
         let books = data.items;
         books.map((item) => {
            let col = document.createElement("div");
            col.classList.add("col-sm-4");
            let des = `
               <div>
                  <img src="${item.volumeInfo.imageLinks.thumbnail}">
               </div>
               <div>
                  <h6> ${item.volumeInfo.title}</h6>
               </div>
            `;
            col.innerHTML = des;
            row.appendChild(col);
            console.log(item.volumeInfo.title);
         });
         console.log(books);
      });
   document.getElementById("searchBook").value = "";
}
