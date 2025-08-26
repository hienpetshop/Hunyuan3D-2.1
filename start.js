module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: ".",
        env: {
          GRADIO_SERVER_NAME: "127.0.0.1",
          GRADIO_SERVER_PORT: "42003"
        },
        message: [
          "python gradio_app.py --host 127.0.0.1 --port 42003"
        ]
      }
    }
  ]
}
