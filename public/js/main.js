console.log("TESTING, this file will include the ajax requests");

  $(document).ready(function() {
    $('select').material_select();
  });

    // $("#submit").on("click", function() {
    //   // store the information in the input field
    //   var searchedCharacter = $("#character-search").val().trim();

    //   searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();
    //   // cleaning up the data
      
    //   $.get("/api/" + searchedCharacter, function(data) {
    //     console.log(data);
    //     if (data) {
    //       $("#stats").show();
    //       $("#name").text(data.name);
    //       $("#role").text(data.role);
    //       $("#age").text(data.age);
    //       $("#force-points").text(data.forcePoints);
    //     }
    //     else {
    //       $("#name").text("Your character was not found.");
    //       $("#stats").hide();
    //     }
        
    //   });
    // });