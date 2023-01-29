import { Post_Message } from "../Types";
import axios from "axios";
import toast from "react-hot-toast";


export const sendMessage = (contact) => async (dispatch) => {
    try {
      const response = await axios.post("https://portfolio-.up.railway.app/message", contact);
  
      dispatch({ type: Post_Message, payload: response.data });
  
      console.log(response.data);
      toast.success(response.data.msg);
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.error);
    }
  };