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
            let des = `
               <div>
                  <img src="${item.volumeInfo.imageLinks.thumbnail}">
               </div>
               <div>
                  <h6> ${item.volumeInfo.title}</h6>
                  <p><a target="blank" href="${item.volumeInfo.infoLink}">Know more</a></p>
               </div>
            `;
            col.innerHTML = des;
            row.appendChild(col);
            console.log(item.volumeInfo);
         });
         console.log(books);
      })
      .catch((error) => {
         alert("invalid information");
      });
   document.getElementById("searchBook").value = "";
}
