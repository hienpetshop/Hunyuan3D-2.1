module.exports = {
  path: ".",
  persist: true,
  shell: "cmd",
  run: [
    "echo cleaning cache ...",
    "rmdir /S /Q __pycache__ 2>nul",
    "rmdir /S /Q outputs 2>nul",
    "rmdir /S /Q logs 2>nul",
    "echo done."
  ]
};
