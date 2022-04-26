import axios from "axios";

const getData = async (url, cb) => await axios(url).then(res => cb(res.data))
const giveTasksByStatus = (arr, status) => arr.filter(item => item.status === status);

export  {getData, giveTasksByStatus};

