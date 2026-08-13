#!/bin/bash
# Run this from your project root (where package.json lives):
#   bash setup.sh

set -e

echo "Installing dependencies..."
npm install three @react-three/fiber @react-three/drei gsap

echo "Creating asset folders..."
mkdir -p public/models
mkdir -p public/video

echo ""
echo "Done. Two manual steps left (these are files, not code — see README.md):"
echo "1. Download a laptop .glb and save it as public/models/laptop.glb"
echo "2. Save your product video as public/video/demo.mp4"
