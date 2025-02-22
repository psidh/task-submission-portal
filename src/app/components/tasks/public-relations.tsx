import { InputAdornment, Radio, TextField } from "@mui/material";
import { Link } from "react-feather";
import FileTask from "../file-upload";

export default function PublicRelations(props: {
  radioIndex: number;
  setRadioIndex: (arg0: number) => void;
}) {
  return (
    <div>
      <h3 className="pt-3 my-3 font-bold text-md">Task</h3>
      <p>
        Pay close attention to the upcoming GUSAC carnival and the preparations
        surrounding it. <br />
        <br />
        If you are not actively participating in the festival, gather pertinent
        information about the event, including any notable achievements and
        statistics, from fellow attendees.
        <br />
        <br />
        Use this information to craft a press release or news article spanning
        300 to 500 words through a blog on Medium/HashNode.
        <br />
        <br />
        The article should capture the enthusiasm and interest displayed by
        students in participating in the GUSAC carnival, delve into its
        organization, and provide a succinct summary of the event's
        significance.
        <br />
      </p>
      <div className="my-2">
        <b>Link to the blog</b>
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
