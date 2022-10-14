// import axios from "axios";

const fetchData = async (url) => {
  try {
    const response = await axios(url);
    return response;
  } catch (error) {
    return error;
  }
};

export default fetchData;
