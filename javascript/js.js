if (document.getElementById("id_valle") !== null) {
    document.getElementById("id_valle").addEventListener("click", function() {
        window.location.href = "http://127.0.0.1:5501/valle.html";
        console.log("das click en valle");
      });
    }
    
      if (document.getElementById("id_cauca") !== null) {
        document.getElementById("id_cauca").addEventListener("click", function() {
          window.location.href = "http://127.0.0.1:5501/cauca.html";
          console.log("das click en cauca");
        });
      }
      if (document.getElementById("id_nariño") !== null) {
        document.getElementById("id_nariño").addEventListener("click", function() {
          window.location.href = "http://127.0.0.1:5501/nariño.html";
          console.log("das click en nariño");
        });
      } 