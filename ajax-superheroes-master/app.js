document.getElementById("searchBtn").addEventListener("click", function() {
  var userInput = document.getElementById("searchField").value;
  var sanitizedQuery = encodeURIComponent(userInput);
  var url = "superheroes.php?query=" + sanitizedQuery;

  
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "text";
    xhr.onload = function() {
      if (xhr.status === 200) {
        var resultDiv = document.getElementById("result");
        resultDiv.innerHTML = xhr.responseText;
        // alert(xhr.responseText)
      }
    };
    xhr.send();
  });
