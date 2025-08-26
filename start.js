module.exports = {
  persist: true,
  shell: "cmd",
  env: {
    GRADIO_SERVER_NAME: "127.0.0.1",
    GRADIO_SERVER_PORT: "42003"
  },
  ports: [42003],
  run: [
    "echo === START GRADIO ===",
    "python gradio_app.py --host 127.0.0.1 --port 42003"
  ]
};
