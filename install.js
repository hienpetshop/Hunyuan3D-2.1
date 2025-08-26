module.exports = {
  persist: true,
  shell: "cmd",
  run: [
    "echo === STEP1: SHELL OK ===",
    "ver",
    "echo === STEP2: PYTHON PATH ===",
    "where python || echo NO_PYTHON",
    "echo === STEP3: PY VERSION ===",
    "python -V || echo PY_ERROR",
    "echo === STEP4: PIP INSTALL ===",
    "python -m pip install --upgrade pip",
    "python -m pip install -r requirements.txt"
  ]
};
