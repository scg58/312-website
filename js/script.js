@import url('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js');
@import url('https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js');

$(".main-carousel").flickity({
    // options
    cellAlign: "left",
    contain: true,
    wrapAround: true,
    autoPlay: true
  });