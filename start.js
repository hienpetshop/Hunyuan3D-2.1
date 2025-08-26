module.exports = {
  // bạn có thể đổi port khác nếu muốn
  env: {
    GRADIO_SERVER_NAME: "127.0.0.1",
    GRADIO_SERVER_PORT: "42003"
  },
  ports: [42003],
  persist: true, // mở Terminal theo dõi log
  run: [
    // chạy Gradio
    "python gradio_app.py --host 127.0.0.1 --port 42003"
  ]
};
