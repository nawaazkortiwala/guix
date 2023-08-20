#!/bin/bash

# Change to the publish directory
cd publish

# Get the current version from package.json
VERSION=$(node -p "require('./package.json').version")

# Increment the patch version
NEW_VERSION=$(echo $VERSION | awk -F. '{$NF = $NF + 1;} 1' | sed 's/ /./g')

# Update the version in package.json
npm version $NEW_VERSION --no-git-tag-version

# Publish the package
npm publish