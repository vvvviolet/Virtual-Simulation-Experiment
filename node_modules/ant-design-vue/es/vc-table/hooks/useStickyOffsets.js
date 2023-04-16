import { computed } from 'vue';
/**
 * Get sticky column offset width
 */
function useStickyOffsets(colWidthsRef, columnCountRef, directionRef) {
  var stickyOffsets = computed(function () {
    var leftOffsets = [];
    var rightOffsets = [];
    var left = 0;
    var right = 0;
    var colWidths = colWidthsRef.value;
    var columnCount = columnCountRef.value;
    var direction = directionRef.value;
    for (var start = 0; start < columnCount; start += 1) {
      if (direction === 'rtl') {
        // Left offset
        rightOffsets[start] = right;
        right += colWidths[start] || 0;
        // Right offset
        var end = columnCount - start - 1;
        leftOffsets[end] = left;
        left += colWidths[end] || 0;
      } else {
        // Left offset
        leftOffsets[start] = left;
        left += colWidths[start] || 0;
        // Right offset
        var _end = columnCount - start - 1;
        rightOffsets[_end] = right;
        right += colWidths[_end] || 0;
      }
    }
    return {
      left: leftOffsets,
      right: rightOffsets
    };
  });
  return stickyOffsets;
}
export default useStickyOffsets;