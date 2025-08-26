module.exports = {
  run: [
    // dùng venv riêng tên "env" ngay trong repo, chạy tại thư mục gốc "."
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: ".",
        build: true,
        message: [
          "python -m pip install -U pip uv",
          // cài các gói cần thiết
          "uv pip install setuptools==65.5.0 wheel",
          // nếu requirements đã có torch thì giữ nguyên, thiếu thì tự cài thêm
          "uv pip install -r requirements.txt",
          "uv pip install sentencepiece"
        ]
      }
    }
  ]
}
