import { toast } from "react-toastify";

/*CONFIG REACT-TOASTIFY NOTIFICATIONS */

const config = { theme: "colored", className: "notification" };

export const addFavNotify = (name) =>
  toast.success(`${name} added to your favourites`, config);
export const removeFavNotify = (name) =>
  toast.error(`${name} removed from your favourites`, config);
