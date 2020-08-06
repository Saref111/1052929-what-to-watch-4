import {extend} from "@helpers/helpers.js";

export const userDataAdapter = (data) => {
  const formatData = extend(data, {avatar: data.avatar_url});
  delete formatData.avatar_url;
  return formatData;
};
