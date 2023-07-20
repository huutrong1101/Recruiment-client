import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import classNames from "classnames";
import axiosInstance from "../../utils/AxiosInstance";
import { UserService } from "../../services/UserService";
import { useAppSelector } from "../../hooks/hooks";
import InputIcon from "../../components/InputIcon/InputIcon";
import TokenPasteRequestTest from "./TokenPasteRequestTest";
import CustomRequestTest from "./CustomRequestTest";

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
          `md:w-5/12 mx-auto my-6 border p-4 flex flex-col gap-2`,
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
      </div>
    </div>
  );
}
