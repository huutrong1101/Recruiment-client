import React from "react";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useForm } from "react-hook-form";
import { CodeBracketIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import axiosInstance from "../../utils/AxiosInstance";
import { JsonViewer } from "@textea/json-viewer";
import classNames from "classnames";

interface FormParams {
  urlPath: string;
  method: string;
  body?: any;
}

export default function CustomRequestTest() {
  const [response, setResponse] = React.useState<string | null>(null);
  const { register, handleSubmit } = useForm<FormParams>();

  const onSubmit = async ({ urlPath, method, body }: any) => {
    // alert(`submit`);

    axiosInstance(urlPath, {
      method,
      data: body,
    }).then((response: any) => setResponse(response.data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, () => alert(`Please enter endpoint.`))}
      className="flex flex-col gap-2"
    >
      <h1 className="font-bold text-xl">Custom url test</h1>

      <div className="flex flex-row items-center gap-4">
        <select {...register(`method`)}>
          <option value="get">GET</option>
          <option value="post">POST</option>
          <option value="put">PUT</option>
          <option value="delete">DELETE</option>
        </select>

        <div className={classNames(`flex flex-col w-full gap-4`)}>
          <InputIcon
            icon={<CodeBracketIcon />}
            register={register}
            label="urlPath"
            multiple={true}
            placeholder="RESTful API path"
            required
            defaultValue={`/`}
            autoComplete="none"
          />

          <InputIcon
            icon={<CodeBracketIcon />}
            register={register}
            label="body"
            multiple={true}
            placeholder="Body"
            defaultValue={``}
            autoComplete="none"
          />
        </div>
        <PrimaryButton type="submit" text="Send" />
      </div>

      <span>Response</span>
      
      {response !== null && <JsonViewer value={response} />}
      
    </form>
  );
}
