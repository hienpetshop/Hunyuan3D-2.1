module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        // tạo/ dùng venv "env" tại thư mục gốc
        venv: "env",
        path: ".",
        env: {
          PIP_DEFAULT_TIMEOUT: "180",
          // mirror nhanh – đổi nếu bạn muốn:
          PIP_INDEX_URL: "https://pypi.tuna.tsinghua.edu.cn/simple",
          PIP_TRUSTED_HOST: "pypi.tuna.tsinghua.edu.cn"
        },
        build: true,
        message: [
          // cập nhật pip & toolchain
          "python -m pip install -U pip setuptools wheel",

          // CÀI TORCH TRƯỚC (NVIDIA, CUDA 12.1). Nếu máy bạn dùng CPU AMD/không có CUDA, thay bằng 'https://download.pytorch.org/whl/cpu'
          "python -m pip install --index-url https://download.pytorch.org/whl/cu121 torch torchvision torchaudio",

          // cài các gói còn lại từ mirror
          "python -m pip install -r requirements.txt",

          // nếu basicsr vẫn thiếu/failed, ép cài đúng phiên bản
          "python -m pip install basicsr==1.4.2"
        ]
      }
    }
  ]
}
