import { ref, onUpdated } from 'vue';
export var defaultProps = {
  percent: 0,
  prefixCls: 'vc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  trailColor: '#D9D9D9',
  trailWidth: 1
};
export var useTransitionDuration = function useTransitionDuration(paths) {
  var prevTimeStamp = ref(null);
  onUpdated(function () {
    var now = Date.now();
    var updated = false;
    paths.value.forEach(function (val) {
      var path = (val === null || val === void 0 ? void 0 : val.$el) || val;
      if (!path) {
        return;
      }
      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      if (prevTimeStamp.value && now - prevTimeStamp.value < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });
    if (updated) {
      prevTimeStamp.value = Date.now();
    }
  });
  return paths;
};