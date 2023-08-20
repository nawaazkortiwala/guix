#!/bin/bash

# Remove the publish/dist directory
rm -rf publish/dist

# Run prettier
pnpm run build-format

# Run eslint
pnpm run build-lint

# Run the tests
pnpm run build-test

# Run the build
pnpm run build-build

# Copy the dist directory to publish/dist
cp -r dist publish/dist

# Remove the dist directory
rm -rf dist