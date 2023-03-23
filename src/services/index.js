export const API = `https://api.novaposhta.ua/v2.0/json/`;


export const controller = async (url, method = `GET`, obj) => {
  let options = {
    method: method,
    headers: {
      "content-type": "application/json",
    },
  };

  if (obj) options.body = JSON.stringify(obj);

  let request = await fetch(url, options),
    response = request.ok ? request.json() : Promise.catch(request.statusText);
  return response;
};
