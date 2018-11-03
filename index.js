const path = require('path');
function dyimp(pth) {
  const module = require(path.join(process.cwd(), pth));
  return module;
}

module.exports = dyimp;
