function firstModule() {
  console.log("this is first exported module");
}

function secondModule() {
  console.log("this is second exported module");
}

const exportedModule = {firstModule, secondModule};

module.exports = exportedModule;
