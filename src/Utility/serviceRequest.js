import store from "../redux/store";
import { applicationProperties } from "./applicationConfig";

// ------------------------------------ START- AJAX OPERATIONS ---------------------------------------------//

export const doAjax = async (sUrl, sMethod, oPayload, rSuccess, rError, oHeaders) => {
  const oParams = getParams(oHeaders);
  sUrl = getUrl(sUrl, oParams);
  switch (sMethod.toLowerCase()) {
    case "post":
      await fetch(sUrl, {
        method: "POST",
        body: JSON.stringify(oPayload),
        headers: oParams.headers,
        mode: "cors",
      })
        // .post(sUrl, oPayload, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    case "postblobfile": //POST Method call for blob type file upload
      await fetch(sUrl, {
        method: "POST",
        body: oPayload, // For file type we should not parse the body object to JSON.Stringify and no headers should be passed
        headers: { authorization: oParams.headers.Authorization },
      })
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    case "get":
      await fetch(sUrl, {
        method: "GET",
        headers: oParams.headers,
        mode: "cors",
      })
        // .get(sUrl, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    case "getblobfile": //GET method for blob files
      await fetch(sUrl, {
        method: "GET",
        headers: oParams.headers,
        mode: "cors",
      })
        .then((res) => res.blob()) // return type should be in blob type
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    case "delete": //DELETE method call which does not accepts payload
      await fetch(sUrl, {
        method: "DELETE",
        headers: oParams.headers,
        mode: "cors",
      })
        // .delete(sUrl, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    case "deletewithbody": //DELETE method call which accepts payload
      await fetch(sUrl, {
        method: "DELETE",
        headers: oParams.headers,
        body: JSON.stringify(oPayload),
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    case "put":
      await fetch(sUrl, {
        method: "PUT",
        headers: oParams.headers,
        mode: "cors",
      })
        // .put(sUrl, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    case "patch":
      await fetch(sUrl, {
        method: "PATCH",
        body: JSON.stringify(oPayload),
        headers: oParams.headers,
        mode: "cors",
      })
        // .post(sUrl, oPayload, oParams)
        .then((res) => res.json())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    default:
      break;
  }
};
export const promiseAjax = (sUrl, sMethod, oPayload, oHeaders) => {
  const oParams = getParams(oHeaders);
  sUrl = getUrl(sUrl, oParams);

  switch (sMethod.toLowerCase()) {
    case "post":
      return fetch(sUrl, {
        method: "POST",
        body: JSON.stringify(oPayload),
        headers: oParams.headers,
        mode: "cors",
      });
    case "get":
      return fetch(sUrl, {
        method: "GET",
        headers: oParams.headers,
        mode: "cors",
      });
    case "delete":
      return fetch(sUrl, {
        method: "DELETE",
        headers: oParams.headers,
        mode: "cors",
      });
    case "put":
      return fetch(sUrl, {
        method: "PUT",
        headers: oParams.headers,
        mode: "cors",
      });
    case "patch":
      return fetch(sUrl, {
        method: "PATCH",
        body: JSON.stringify(oPayload),
        headers: oParams.headers,
        mode: "cors",
      });
    default:
      return;
  }
};

export const doAjaxWithoutJson = async (sUrl, sMethod, oPayload, rSuccess, rError, oHeaders) => {
  const oParams = getParams(oHeaders);
  sUrl = getUrl(sUrl, oParams);
  switch (sMethod.toLowerCase()) {
    case "get":
      await fetch(sUrl, {
        method: "GET",
        headers: oParams.headers,
        mode: "cors",
      })
        // .get(sUrl, oParams)
        .then((res) => res.text())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
    default:
    case "post":
      await fetch(sUrl, {
        method: "POST",
        body: JSON.stringify(oPayload),
        headers: oParams.headers,
        mode: "cors",
      })
        .then((res) => res.text())
        .then((data) => {
          rSuccess(data);
        })
        .catch((err) => {
          rError(err);
        });
      break;
  }
};
// ------------------------------------ END - AJAX OPERATIONS ----------------------------------------------//

// ------------------------------------ START - CRUD OPERATIONS --------------------------------------------//
export const doCrudApiUpdate = async (query, args, rSuccess, rError) => {
  const url = "/CrudApiServices/crud/api/updateQuery?converterName=map";
  doAjax(
    url,
    "post",
    { query: query, args: args },
    function (data) {
      rSuccess(data);
    },
    function (err) {
      rError(err);
    }
  );
};
export const doCrudApi = async (query, args, rSuccess, rError) => {
  const url = "/CrudApiServices/crud/api/fetchQuery?converterName=map";
  doAjax(
    url,
    "post",
    { query: query, args: args },
    function (data) {
      rSuccess(data);
    },
    function (err) {
      rError(err);
    }
  );
};
// ------------------------------------ END - CRUD OPERATIONS ------------------------------------------------//

// ------------------------------------ START - UTILITY FUNCTIONS --------------------------------------------//

const getParams = (oHeaders) => {
  const userState = store.getState().userReducer;
  let oParams = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };
  if (applicationProperties.default.useWorkAccess) {
    oParams.headers = {
      ...oParams.headers,
      Authorization: `Bearer ${userState.userToken.token}`,
      tenantId: "azure",
    };
  }

  if (oHeaders) {
    if (oHeaders === "no-auth") {
      delete oParams.headers.Authorization;
    } else {
      oParams.headers = { ...oParams.headers, ...oHeaders };
    }
  }
  return oParams;
};
const getUrl = (sUrl, oParams) => {
  const userState = store.getState().userReducer;
  //Remove the Service Call identifier with base url from .env file
  if (sUrl.startsWith("/CrudApiServices") || sUrl.startsWith("/ITMGraphServices")) {
    oParams.headers = {
      ...oParams.headers,
      env: applicationProperties.default.useConfigServerDestination ? userState.appConfig.CRUD_API_ENV : "itm",
    };
  }

  if (applicationProperties.default.useConfigServerDestination) {
    let splitUrl = sUrl.split("/");
    sUrl = sUrl.replace("/" + splitUrl[1], userState.appConfig.SERVICE_BASE_URL_MAP?.[splitUrl[1]]);
  }
  return sUrl;
};
// ------------------------------------ END - UTILITY FUNCTIONS --------------------------------------------//
