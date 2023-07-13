import React from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import classNames from "classnames";
import axiosInstance from "../../utils/AxiosInstance";

export default function RequestTest() {
  const handleTestButton = () => {
    console.log(import.meta.env);
    axiosInstance
      .post(`/api/auth/register`, {
        phone: "01233456789" + Math.random() * 100,
        fullName: "Admin Is Me",
        email: "admin" + Math.round(Math.random() * 10000) + "@gmail.com",
        password: "12345678",
        confirmPassword: "12345678",
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div className={classNames(`w-1/3 mx-auto my-6 border p-4`)}>
        <PrimaryButton text="Test" onClick={handleTestButton} />
      </div>
    </div>
  );
}
