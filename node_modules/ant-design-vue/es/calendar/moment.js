import generateConfig from '../vc-picker/generate/moment';
import { withInstall } from '../_util/type';
import generateCalendar from './generateCalendar';
var Calendar = generateCalendar(generateConfig);
export default withInstall(Calendar);