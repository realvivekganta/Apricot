var searchPattern = "";

document.addEventListener("DOMContentLoaded", function(){    
    grid();
    
    var slider = document.getElementById("gridSlider");
    slider.oninput = function() {
        var boxes = document.getElementsByName("gridBox")
        for(var index = 0; index<boxes.length; index++){
            boxes[index].style.zoom = this.value/100;
        }
    }
    
    var search = document.getElementById("searchBar");
    search.oninput = function(){
        searchPattern = this.value;
        grid();//reload grid
    }
});

function grid(){
    document.getElementById("foodList").innerHTML = ''; //clear grid
    
    for(index in food){
        var i = food[index];
        if(i.name.toLowerCase().startsWith(searchPattern.toLowerCase())){
        
            var box = document.createElement("li");
            box.id = "ingredientBox";
            box.setAttribute("name", "gridBox");

            var title = document.createElement("h2");
            title.innerHTML= i.name;

            var cals = document.createElement("p");
            cals.innerHTML = "Calories/serving: " + i.calories;

            var amount = document.createElement("p");
            amount.innerHTML = i.unit + " left: " + i.count;

            var img = document.createElement("img");
            img.id = "pantryImage";
            img.src = i.image;
            box.appendChild(img);

            box.appendChild(title);
            box.appendChild(cals);
            box.appendChild(amount);

            document.getElementById("foodList").appendChild(box);
        }
    }
}