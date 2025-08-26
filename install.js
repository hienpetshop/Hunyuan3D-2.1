module.exports = {
  // chạy trong thư mục gốc của repo
  path: ".",
  persist: true,
  shell: "cmd",
  run: [
    // kích hoạt env của Pinokio (rất quan trọng)
    "conda_hook && conda deactivate && conda deactivate && conda activate base",
    // cài python packages
    "python -m pip install --upgrade pip",
    "python -m pip install -r requirements.txt"
  ]
};
