export default function loadSymbol(req, params) {
  return new Promise((resolve) => {
    resolve({
      message: req.query.symbol,
      time: Date.now()
    });
  });
}
