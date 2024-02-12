$(document).ready(function () {
    $(".container")
      .mouseenter(function () {
        $(".card").stop().animate(
          {
            top: "-90px",
          },
          "slow"
        );
      })
      .mouseleave(function () {
        $(".card").stop().animate(
          {
            top: 0,
          },
          "slow"
        );
      });
  });



  document.addEventListener('mousemove',function(e){
    let body = document.querySelector('body');
    let cora = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    cora.style.left = x+'px';
    cora.style.top = y+'px';

    let size = Math.random() * 80;
    cora.style.width = 20 + size + 'px';
    cora.style.height = 20 + size + 'px';

    let transformValue = Math.random() * 360;
    cora.style.trasnform = 'rotate('+ transformValue +'deg)'

    body.appendChild(cora)

    setTimeout(function(){cora.remove();},1000)
  })
  