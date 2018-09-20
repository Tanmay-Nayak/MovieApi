var jsonObj = {};

function getMovies(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      jsonObj = JSON.parse(this.responseText);
      console.log(jsonObj);
      var length = jsonObj.results.length;
      for(i = 0; i<length;i++){
        var aTag = document.createElement('a');
        var imgTag = document.createElement('img');
        var innerDiv = document.createElement('div');
        
        imgTag.alt = i+1;
        imgTag.src = imageUrl+jsonObj.results[i].poster_path;
        imgTag.width = "400";
        imgTag.height = "300";
        
        aTag.target = "_blank";
        aTag.appendChild(imgTag);
        
        innerDiv.className = "desc";
        innerDiv.innerHTML = jsonObj.results[i].title;
        
        var divs = document.createElement('div');
        divs.className = "gallery";
        divs.appendChild(aTag);
        divs.appendChild(innerDiv);
        
        var bgrndDivs = document.createElement('div');
        bgrndDivs.className = "galleryBackground";
        bgrndDivs.appendChild(divs);
      
          
        document.body.appendChild(bgrndDivs);
      }
    }
  };
  xhttp.open("GET", requestUrl1+key+requestUrl2, true);
  xhttp.send();
}






/* <div class="gallery">
        <a target="_blank">
          <img src="1.jpg" alt="Image 1" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div> */
