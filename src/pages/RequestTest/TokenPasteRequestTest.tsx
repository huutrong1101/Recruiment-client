import React from "react";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useForm } from "react-hook-form";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { UserService } from "../../services/UserService";

export default function TokenPasteRequestTest() {
  const [response, setResponse] = React.useState<string | null>(null);
  const { register, handleSubmit } = useForm<{ token: string }>();

  const onSubmit = async ({ token }: { token: string }) => {
    const response = await UserService.getUserFromToken(token);
    console.debug(response.data);

    // Set response
    setResponse(JSON.stringify(response.data.result));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <h1 className="font-bold text-xl">Token profile test</h1>
      <InputIcon
        icon={<LockClosedIcon />}
        register={register}
        label="token"
        multiple={true}
        placeholder="JWT token to get a profile"
        required
        autoComplete="none"
      />

      {response !== null && <textarea>{response}</textarea>}

      <PrimaryButton type="submit" text="Test localStorage token" />
    </form>
  );
}
