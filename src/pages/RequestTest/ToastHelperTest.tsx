import { toast } from "react-toastify";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function ToastHelperTest() {
  const handleShowToast = () => {
    toast("This is a test to show toast helper");
    // toast.success("This is a test to show toast helper");
    // toast.error("This is a test to show toast helper");
    // toast.warning("This is a test to show toast helper");
  };

  return (
    <div>
      <h1>Toast helper</h1>
      <PrimaryButton text={`Show toast`} onClick={handleShowToast} />
    </div>
  );
}
