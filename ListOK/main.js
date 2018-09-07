var count = 0;
function insertIt(item){
    
        document.getElementById("maininput").value = "";
        var numLi = document.createElement('li');
        var newLi = document.createElement('li');
        newLi.innerHTML = item;
        count+=1;
        numLi.innerHTML = count;

        lest.appendChild(newLi);
        lestnum.appendChild(numLi);
    }

    