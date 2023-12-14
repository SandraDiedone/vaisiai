
        document.getElementById('getFruit').addEventListener('click', getFruit)
  
        function getFruit(){
          fetch('https://fruityvice.com/api/fruit/all')
          .then((res) => res.json())
          .then((data) => {
            let output = '<h2></h2>';
            data.forEach(function(post){
              output += `
              <div id="items" class="card shadow rounded" style="width: 12rem; background-color: green;">
                    <div class="card-body text-center">
                        <h5 class="card-text">${post.name}</h5>
                        <p class="card-text">Family: ${post.family}</p>
                        <p class="card-text">Order: ${post.order}</p>
                        <p class="card-text">Genus: ${post.genus}</p>
                        <p class="card-text">NUTRITIONS: </p>
                        <ul>
                            <li>Calories: ${post.nutritions.calories}</li>
                            <li>Fat: ${post.nutritions.fat}</li>
                            <li>Sugar: ${post.nutritions.sugar}</li>
                            <li>Carbohydrates: ${post.nutritions.carbohydrates}</li>
                            <li>Protein: ${post.nutritions.protein}</li>
                        </ul>

                    </div>
                </div>`
              
              
            });
            document.getElementById('output').innerHTML = output;
          })
        }

document.getElementById("inputName").addEventListener('input', (e)=>{
            e.preventDefault();
            let inputValue = document.getElementById('inputName').value
            console.log(inputValue)
            fetch(`https://fruityvice.com/api/fruit/${inputValue}`)
            .then(response => response.json())
            .then(data=> console.log(data)
            .then(data=> {
                const items = document.getElementById("items")
                items.innerHTML = ""
                if(data == null){
                    //console.log("No fruits...")
                    document.getElementById("msg").style.display = "block"
                }else{
                    document.getElementById("msg").style.display = "none"
                    data.forEach(element => {
                    console.log(element)
                    itemDiv = document.createElement("div")
                        itemDiv.className = "m-2 singleItem"
                        const itemInfo = `
                        <div id="items" class="card shadow rounded" style="width: 12rem; background-color: green;">
                        <div class="card-body text-center">
                            <h5 class="card-text">${post.name}</h5>
                            <p class="card-text">Family: ${post.family}</p>
                            <p class="card-text">Order: ${post.order}</p>
                            <p class="card-text">Genus: ${post.genus}</p>
                            <p class="card-text">NUTRITIONS: </p>
                            <ul>
                                <li>Calories: ${post.nutritions.calories}</li>
                                <li>Fat: ${post.nutritions.fat}</li>
                                <li>Sugar: ${post.nutritions.sugar}</li>
                                <li>Carbohydrates: ${post.nutritions.carbohydrates}</li>
                                <li>Protein: ${post.nutritions.protein}</li>
                            </ul>
    
                        </div>
                    </div>`
                        itemDiv.innerHTML= itemInfo
                        items.appendChild(itemDiv)
                    })
                }
            }
        ))})
        
