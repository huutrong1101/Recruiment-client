import classNames from "classnames";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import axiosInstance from "../../utils/AxiosInstance";
import CustomRequestTest from "./CustomRequestTest";
import ToastHelperTest from "./ToastHelperTest";
import TokenPasteRequestTest from "./TokenPasteRequestTest";

export default function RequestTest() {
  const handleTestButton = async () => {
    // console.log(import.meta.env);
    const response = await axiosInstance.get("/");
    alert(response.data);
  };

  return (
    <div>
      <div
        className={classNames(
          `md:w-10/12 mx-auto my-6 border p-4 flex flex-col gap-2`,
        )}
      >
        <PrimaryButton text="Test" onClick={handleTestButton} />

        <TokenPasteRequestTest />

        <PrimaryButton
          text="Job Lists"
          onClick={() => {
            axiosInstance.get(`/api/jobs/`);
          }}
        />

        <CustomRequestTest />

        <ToastHelperTest />
      </div>
    </div>
  );
}
