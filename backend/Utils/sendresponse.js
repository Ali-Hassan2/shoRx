const sendresponse = (
  res,
  statusCode = 200,
  success = true,
  message = "Request Successful",
  data = null,
  errors = [],
  options = {} // For optional fields like token, meta, etc.
) => {
  const {
    token = null,
    meta = null,
    requestId = null,
    timestamp = new Date().toISOString(),
  } = options;

  const responsepayload = {
    success,
    message,
    timestamp,
  };

  if (data !== null) responsepayload.data = data;
  if (errors.length > 0) responsepayload.errors = errors;
  if (token) responsepayload.token = token;
  if (meta) responsepayload.meta = meta;
  if (requestId) responsepayload.requestId = requestId;

  return res.status(statusCode).json(responsepayload);
};

module.exports = sendresponse;
