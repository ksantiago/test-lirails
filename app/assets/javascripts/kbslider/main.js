    jQuery(document).ready(function($) {
      (function(){
        var $kenburns = $('#kenburns'),
        $frame = $('.frame', $kenburns),
        $pagesbar = $('#sliderPages', $kenburns),
        $titlesHolder = $('#sliderContentItems', $kenburns),
        $titles = $('.sliderContentItem', $titlesHolder),
        $fullscreen = $('#fullscreen', $kenburns);
        $frame.mightySliderAnimate({
          pages: {
            pagesBar: $pagesbar,
            activateOn: 'click'
          },

          cycling: {
            cycleBy: 'slides',
            pauseTime: 8000
          },

          // Buttons
          buttons: {
            fullScreen: $fullscreen
          }
        },
        {
          load: function() {
            var html = "";
            $titlesHolder.empty();

            for(var i = 0, len = this.slides.length, slide; i < len; i++) {
              slide = this.slides[i];
              html += '<div class="sliderContentItem">'+
              '<h2 class="sliderContentTitle">' + slide.options.title + '</h2>'+
              '<div class="sliderContentDescription">'+
              '<p>' + slide.options.description + '</p>'+
              '</div>'+
              '</div>';
            }

            $titlesHolder.html(html);
            $titles = $('.sliderContentItem', $titlesHolder);
            $titles.eq(0).addClass('selected');
          },
          active: function(name, index){
            $titles.removeClass('selected');
            $titles.eq(index).addClass('selected');
          },
          enterFullScreen: function() {
            $fullscreen.removeClass('icon-expand').addClass('icon-compress');
          },
          exitFullScreen: function() {
            $fullscreen.addClass('icon-expand').removeClass('icon-compress');
          }
        });
  })();
});