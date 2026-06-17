const common_env = {
  ENVIRONMENT: "development",
  MYSQL_HOST: "127.0.0.1",
  MYSQL_PORT: "3306",
  MYSQL_USER: "xianyu",
  MYSQL_PASSWORD: "xianyu@2026",
  MYSQL_DATABASE: "xianyu_data",
  REDIS_HOST: "127.0.0.1",
  REDIS_PORT: "6379",
  REDIS_PASSWORD: "",
  // REDIS_DB: "0",
  CORS_ORIGINS: "*",
  BACKEND_WEB_PORT: "8089",
  WEBSOCKET_PORT: "8090",
  SCHEDULER_PORT: "8091",
  WEBSOCKET_SERVICE_URL: "http://127.0.0.1:8090",
  SCHEDULER_SERVICE_URL: "http://127.0.0.1:8091",
  BACKEND_WEB_SERVICE_URL: "http://127.0.0.1:8089",
  TZ: "Asia/Shanghai",
  STATIC_DIR: "/home/devil/projects/xianyu-auto-reply/backend-web/static",
  HOST:"0.0.0.0"
};

module.exports = {
  apps: [
    {
      name: "xy-backend",
      script: "main.py",
      cwd: "backend-web",
      interpreter: "/home/devil/projects/xianyu-auto-reply/backend-web/.venv/bin/python",
      env: {
        ...common_env,
        PYTHONPATH: ".:.."
      }
    },
    {
      name: "xy-websocket",
      script: "main.py",
      cwd: "websocket",
      interpreter: "/home/devil/projects/xianyu-auto-reply/websocket/.venv/bin/python",
      env: {
        ...common_env,
        PYTHONPATH: ".:.."
      }
    },
    {
      name: "xy-scheduler",
      script: "main.py",
      cwd: "scheduler",
      interpreter: "/home/devil/projects/xianyu-auto-reply/scheduler/.venv/bin/python",
      env: {
        ...common_env,
        PYTHONPATH: ".:.."
      }
    }
  ]
};
