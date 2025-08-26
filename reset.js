module.exports = {
  run: [
    "python -c \"import shutil,os; [shutil.rmtree(p, ignore_errors=True) for p in ['__pycache__','outputs','logs']]\""
  ]
};
