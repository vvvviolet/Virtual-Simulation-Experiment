var now = +new Date();
var index = 0;
export default function uid() {
  // eslint-disable-next-line no-plusplus
  return "vc-upload-".concat(now, "-").concat(++index);
}