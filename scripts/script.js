$(function(){
    const actors = [
        {
          category: 'male',
          name: 'magnus jensen',
          picture: 'https://randomuser.me/api/portraits/men/29.jpg'
        },
        {
          category: 'male',
          name: 'richard bradley',
          picture: 'https://randomuser.me/api/portraits/men/95.jpg'
        },
        {
          category: 'male',
          name: 'eduardo martin',
          picture: 'https://randomuser.me/api/portraits/men/7.jpg'
        },
        {
          category: 'female',
          name: 'norah faure',
          picture: 'https://randomuser.me/api/portraits/women/11.jpg'
        },
        {
          category: 'female',
          name: 'rose clarke',
          picture: 'https://randomuser.me/api/portraits/women/28.jpg'
        },
        {
          category: 'female',
          name: 'adeline mathieu',
          picture: 'https://randomuser.me/api/portraits/women/6.jpg'
        },
        {
          category: 'baby',
          name: 'joe edwards',
          picture: 'https://randomuser.me/api/portraits/lego/5.jpg'
        },
        {
          category: 'baby',
          name: 'bob kelley',
          picture: 'https://randomuser.me/api/portraits/lego/2.jpg'
        },
        {
          category: 'baby',
          name: 'john doe',
          picture: 'https://randomuser.me/api/portraits/lego/1.jpg'
        }
      ];
    
    for (const actor of actors) {
      const newCard = $(".d-none").clone();
      newCard.find(".card-title").text(actor.name);
      newCard.find("img").attr("src", actor.picture);
      newCard.addClass(actor.category);
      newCard.removeClass("d-none");
      newCard.appendTo('.card-columns');
    }

    $(".baby, .female, .male").hide();
      
      $("#category").on ("click",function(){
          const catValue = $("option:checked").val();
          console.log(catValue);
          if (catValue === "baby") {
              $(".baby").show();
              $(".male, .female").hide();
          }if (catValue === "female") {
            $(".female").show();
            $(".male, .baby").hide();
          } else {
              $(".male").show();
              $(".baby, .female").hide();
          }
          
        });
    $("#option1").on("click", function(){
        const opt1Value = $("input").val();
        console.log(opt1Value);
        $(".male").show();
        $(".baby, .female").hide();
        });    
    $("#option2").on("click", function(){
        const opt2Value = $("input").val();
        console.log(opt2Value);
        $(".female").show();
        $(".male, .baby").hide();
        });    
    $("#option3").on("click", function(){
        const opt3Value = $("input").val();
        console.log(opt3Value);
        $(".baby").show();
        $(".male, .female").hide();
        });
    $("#actors").on("click", function(){
        const actorsName = $("option").val();
        
    })
    $('.card').on('click', function() {
        $('.card').removeClass('bg-primary text-white');
        $(this).addClass('bg-primary text-white');
        const actor = $(this)
          .find('h5')
          .text();
        console.log(actor);
        $('#actor-select').val(actor);
      });

    $("form").on("submit", function(event){
      event.preventDefault();
      console.log(1);
      let compName = $("#companyName").val();
      console.log(compName);
      let cN = compName.length > 1;
      let eMail = $("#email").val();
      console.log(eMail);
      let eM = email;
      let categoryName = $("#category").val();
      console.log(categoryName);
      let catN = categoryName.length > 1;  
      let actorName = $("#actors").val();
      console.log(actorName);
      let aN = actorName.length > 1;
      // let conditions = cN && eM && catN && aN;
      if (aN) {
        let m = "Sorry " + actorName + " is not currently available. You will be contacted as soon as possible.";
          $("form").html(m);
            
        }
    
    })  
});
