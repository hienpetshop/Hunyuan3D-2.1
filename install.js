module.exports = async () => ({
  persist: true,
  shell: "cmd",
  run: [
    "python --version",
    "where python",
    "python -m pip install --upgrade pip",
    "python -m pip install -r requirements.txt"
  ]
});
