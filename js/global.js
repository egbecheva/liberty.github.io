(function($) {
  // Scroll to anchor id
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  });

  // CMC data
  function get_data_cmc() {
      // Get getblockcount
  $.getJSON(
    "https://cors-anywhere.herokuapp.com///explorer.lbrt.io/api/getblockcount",
    function(data) {
      //console.log(data);
      var getblockcount = data;
      $(".blockcount").html(
        numbro(getblockcount).format("0,0")
      );
    }
  );
  $.getJSON(
    "https://cors-anywhere.herokuapp.com///explorer.lbrt.io/api/getconnectioncount",
    function(data) {
      //console.log(data);
      var getconnectioncount = data;
      $(".connections").html(
        getconnectioncount
      );
    }
  );
  $.getJSON(
    "https://cors-anywhere.herokuapp.com///explorer.lbrt.io/api/servicenode?command=count",
    function(data) {
      //console.log(data);
      var masternodes = data;
      $(".masternodes").html(
        masternodes.total
      );
    }
  );
  $.getJSON(
    "https://cors-anywhere.herokuapp.com///explorer.lbrt.io/ext/getmoneysupply",
    function(data) {
      //console.log(data);
      var getmoneysupply = parseInt(data);
      $(".supply").html(
        numbro(getmoneysupply).format('0,0')
      );
    }
  );

  }

  get_data_cmc();
  setInterval(get_data_cmc, 60000);

  // match height
 //$(".panel-body").matchHeight();
})(jQuery);
