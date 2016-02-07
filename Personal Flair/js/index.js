(function() {
  window.signature = {
    initialize: function() {
      return $('.signature svg').each(function() {
        var delay, length, path, paths, previousStrokeLength, speed, _i, _len, _results;
        paths = $('path, circle, rect', this);
        delay = 0;
        _results = [];
        for (_i = 0, _len = paths.length; _i < _len; _i++) {
          path = paths[_i];
          length = path.getTotalLength();
          previousStrokeLength = speed || 0;
          speed = length < 100 ? 20 : Math.floor(length);
          delay += previousStrokeLength + 100;
          _results.push($(path).css('transition', 'none').attr('data-length', length).attr('data-speed', speed).attr('data-delay', delay).attr('stroke-dashoffset', length).attr('stroke-dasharray', length + ',' + length));
        }
        return _results;
      });
    },
    animate: function() {
      return $('.signature svg').each(function() {
        var delay, length, path, paths, speed, _i, _len, _results;
        paths = $('path, circle, rect', this);
        _results = [];
        for (_i = 0, _len = paths.length; _i < _len; _i++) {
          path = paths[_i];
          length = $(path).attr('data-length');
          speed = $(path).attr('data-speed');
          delay = $(path).attr('data-delay');
          _results.push($(path).css('transition', 'stroke-dashoffset ' + speed + 'ms ' + delay + 'ms linear').attr('stroke-dashoffset', '0'));
        }
        return _results;
      });
    }
  };

  $(document).ready(function() {
    window.signature.initialize();
    return $('button').on('click', function() {
      window.signature.initialize();
      return setTimeout(function() {
        return window.signature.animate();
      }, 500);
    });
  });

  $(window).load(function() {
    return window.signature.animate();
  });

}).call(this);
