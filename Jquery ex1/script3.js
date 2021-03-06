$(function () {
    $("#chg-txt-btn").click(function () {
        
        $("#p-txt").html("Diamond (/ˈdaɪ(ə)mənd/) is a metastable allotrope of carbon, where the carbon atoms are arranged in a variation of the face-centered cubic crystal structure called a diamond lattice. Diamond is less stable than graphite, but the conversion rate from diamond to graphite is negligible at standard conditions. Diamond is renowned as a material with superlative physical qualities, most of which originate from the strong covalent bonding between its atoms. In particular, diamond has the highest hardness and thermal conductivity of any bulk material. Those properties determine the major industrial application of diamond in cutting and polishing tools and the scientific applications in diamond knives and diamond anvil cells.");
      });

      $("#chg-img-btn").click(function (){
          $("body>img").attr("src","https://media.istockphoto.com/photos/luxury-diamonds-on-white-background-picture-id517905062?k=6&m=517905062&s=612x612&w=0&h=R0ymeQH4T7NFMFOaACnXWf7-V6JYADGUQkQSFknisgc=");
      });

      $("#chg-color-btn").click(function (){
        $("#p-txt").toggleClass("chng-bck-clr");
      });
});