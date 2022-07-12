
    function loadCocktailDetails()
    {
        var alcoholSelected = localStorage.getItem("alcoholSelected");
        var selectedDrink = localStorage.getItem("selectedDrink");  
        var selectedDrinkThumb = localStorage.getItem("selectedDrinkThumb");  
        var selectedDrinkId = localStorage.getItem("selectedDrinkId"); 
        
        document.getElementById("cocktailHeader").innerHTML = "How to make a " + selectedDrink;


        var xhr = new XMLHttpRequest(); //invoke a new instance of the XMLHttpRequest
        xhr.onload = success; // call success function if request is successful
        xhr.onerror = error;  // call error function if request failed
        xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + parseInt(selectedDrinkId)); // open a GET request
        xhr.send(); // send the request to the server.
        
    }
    
    // function to handle web service response
    function success()
    {
        var data = JSON.parse(this.responseText).drinks[0]; //parse the string to JSON
        // do some stuff here with the response data        
        //data.strDrinkThumb
        document.getElementById("cocktailImage").src = data.strDrinkThumb;
        //data.strDrink
        //data.strGlass
        //data.strInstructions
        document.getElementById("howToMake").innerHTML = data.strInstructions;
        //data.strIngredient1
        //data.strIngredient2
        //data.strIngredient3 -> 15
        //data.strMeasure1
        //data.strMeasure2
        //data.strMeasure3 -> 15
        var ingredientsTable = "";
        
        if (data.strIngredient1 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient1 + "</td><td>" + data.strMeasure1 + "</td></tr>";}
        if (data.strIngredient2 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient2 + "</td><td>" + data.strMeasure2 + "</td></tr>";}
        if (data.strIngredient3 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient3 + "</td><td>" + data.strMeasure3 + "</td></tr>";}
        if (data.strIngredient4 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient4 + "</td><td>" + data.strMeasure4 + "</td></tr>";}
        if (data.strIngredient5 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient5 + "</td><td>" + data.strMeasure5 + "</td></tr>";}
        if (data.strIngredient6 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient6 + "</td><td>" + data.strMeasure6 + "</td></tr>";}
        if (data.strIngredient7 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient7 + "</td><td>" + data.strMeasure7 + "</td></tr>";}
        if (data.strIngredient8 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient8 + "</td><td>" + data.strMeasure8 + "</td></tr>";}
        if (data.strIngredient9 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient9 + "</td><td>" + data.strMeasure9 + "</td></tr>";}
        if (data.strIngredient10 != null) {ingredientsTable = ingredientsTable + "<tr><td>" + data.strIngredient10 + "</td><td>" + data.strMeasure10 + "</td></tr>";}
        
        document.getElementById("ingredientsTable").innerHTML =  ingredientsTable;
         
    }

    // function to handle error
    function error(err)
    {
        alert('Web Service call failed -> ' + err.message);
    }
