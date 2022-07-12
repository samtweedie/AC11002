
    function loadCocktailsList()
    {
        var alcoholSelected = localStorage.getItem("alcoholSelected");
        document.getElementById("cocktailHeader").innerHTML = "Cocktails containing " + alcoholSelected;

        var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
        xhr.onload = success; // call success function if request is successful
        xhr.onerror = error;  // call error function if request failed
        xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcoholSelected); // open a GET request
        xhr.send(); // send the request to the server.
    }
    
    // function to handle web service response
    function success()
    {
        var data = JSON.parse(this.responseText).drinks; //parse the string to JSON
        
        target = document.getElementById("cocktails");
        data.forEach((val, key) => {  
            target.innerHTML += `<div class="image-list"><img src ="${val.strDrinkThumb}" class="image-styles pointer" onclick="selectDrink('${val.strDrink}', '${val.strDrinkThumb}', ${val.idDrink})"/><p class="image-title">${val.strDrink}</p></div>`;
        });  
    }

    // function to handle error
    function error(err)
    {
        alert('Web Service call failed -> ' + err.message);
    }
    
    // function to get drink selection
    function selectDrink(strDrink, strDrinkThumb, selectedDrinkId)
    {        
        localStorage.setItem("selectedDrink", strDrink);      
        localStorage.setItem("selectedDrinkThumb", strDrinkThumb);      
        localStorage.setItem("selectedDrinkId", selectedDrinkId);
        location.href = "cocktail.html";
    }