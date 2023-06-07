import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { MySliceZone } from "@/facades";

function SliceSimulatorPage() {
  return (
    <SliceSimulator
      sliceZone={(props) => <MySliceZone {...props} />}
    />
  );
}

export default SliceSimulatorPage;