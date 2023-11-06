document.getElementById("searchBtn").addEventListener("click", function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "superheroes.php", true);
    xhr.responseType = "text";
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert(xhr.responseText)
      }
    };
    xhr.send();
  });

// window.onload = function () {
//     const searchBtn = document.getElementById("searchBtn");
//     const xhr = new XMLHttpRequest();
//     const url = 'superheroes.php';
  
//     searchBtn.addEventListener("click", function () {
//       xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           // Request was successful, and response is available in xhr.responseText
//           const response = xhr.responseText;
  
//           // You can parse the response as JSON if it's JSON data
//           // For example, if the response is JSON:
//           // const parsedResponse = JSON.parse(response);
  
//           // Now you can work with the response data
//           console.log(response);
//         }
//       };
  
//       xhr.open('GET', url, true);
//       xhr.send();
//     });
//   };
  