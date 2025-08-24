# Base Ubuntu image compatible with Codespaces devcontainers
FROM mcr.microsoft.com/devcontainers/base:ubuntu-24.04

# Args can be overridden by devcontainer.json > build.args
ARG HUGO_VERSION="0.148.2"

# Install prerequisites + Go (needed for Hugo Modules)
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends \
      ca-certificates curl jq git unzip gnupg \
      golang-go \
    && rm -rf /var/lib/apt/lists/*

# --- Install Node.js LTS (for PostCSS pipelines used by many Hugo themes) ---
# Lightweight install via NodeSource (pinned to current LTS 18/20 as you prefer)
ARG NODE_MAJOR=20
RUN curl -fsSL https://deb.nodesource.com/setup_${NODE_MAJOR}.x | bash - && \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Optional: common PostCSS tools some themes expect
RUN npm install -g postcss postcss-cli autoprefixer

# --- Install Hugo EXTENDED from official release .deb ---
# NOTE: the package name uses linux-amd64 (Codespaces are amd64)
RUN set -eux; \
    DEB="hugo_extended_${HUGO_VERSION}_linux-amd64.deb"; \
    URL="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${DEB}"; \
    curl -fL -o "/tmp/${DEB}" "${URL}"; \
    apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y "/tmp/${DEB}" && \
    rm -rf /var/lib/apt/lists/* "/tmp/${DEB}"

# Verify installs at build time
RUN hugo version | grep -i extended && go version
