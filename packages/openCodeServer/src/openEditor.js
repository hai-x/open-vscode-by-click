import axios from "axios";
export default function openEditor(filePath) {
  let { protocol, host } = window.location;
  console.log(protocol,host);
  axios
    .get(`${protocol}//${host}/code`, {
      params: {
        filePath: `${filePath}`,
      },
    })
    .catch((error) => {
      console.log(error);
    });
}
