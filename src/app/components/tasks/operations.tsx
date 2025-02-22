import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function Operations(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Please share your thoughts on how effectively you would like to plan the
        event for the upcoming Info Session that we are going to have, where we
        will officially on-board you as the Core Team Member of the College.
        <br />
        We will have to welcome and introduce everyone for the Google Developer
        Student Club to our College.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the Document</b>
      </div>
      <TextField
        className="my-3 w-full"
        placeholder="Link"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Link />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
