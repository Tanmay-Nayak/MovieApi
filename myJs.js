var jsonObj = {};

function getMovies(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("bodyId").innerHTML = this.responseText;
      jsonObj = JSON.parse(this.responseText);
      console.log(jsonObj);
      var length = jsonObj.results.length;
      for(i = 0; i<length;i++){
        var aTag = document.createElement('a');
        var imgTag = document.createElement('img');
        var innerDiv = document.createElement('div');
        
        imgTag.alt = "1";
        //imgTag.src = "https://image.tmdb.org/t/p/w500/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg";
        imgTag.src = "https://image.tmdb.org/t/p/w500"+jsonObj.results[i].poster_path;
        imgTag.width = "600";
        imgTag.height = "400";
        
        aTag.target = "_blank";
        aTag.appendChild(imgTag);
        
        innerDiv.className = "desc";
        innerDiv.innerHTML = "Add a description of the image here";
        
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
  xhttp.open("GET", "https://api.themoviedb.org/3/movie/now_playing?api_key=34c46d1fef129ad73f6f6a0bd839b017&language=en-US&page=1", true);
  xhttp.send();
}






/* <div class="gallery">
        <a target="_blank">
          <img src="1.jpg" alt="Image 1" width="600" height="400">
        </a>
        <div class="desc">Add a description of the image here</div>
      </div> */
