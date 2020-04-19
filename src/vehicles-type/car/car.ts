import Vehicle from "../../vehicle";
import { motorMixin, wheelsMixin, seatsMixin } from "../../mixins";
import applyMixins from "../../utils/apply-mixins";

const mixinsToApply = [motorMixin, seatsMixin, wheelsMixin];
const Car = applyMixins(Vehicle, mixinsToApply);

export default Car;
