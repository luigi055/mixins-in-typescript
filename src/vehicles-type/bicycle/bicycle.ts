import Vehicle from "../../vehicle";
import { wheelsMixin, seatsMixin } from "../../mixins";
import applyMixins from "../../utils/apply-mixins";

const mixinsToApply = [seatsMixin, wheelsMixin];
const Bicycle = applyMixins(Vehicle, mixinsToApply);

export default Bicycle;
