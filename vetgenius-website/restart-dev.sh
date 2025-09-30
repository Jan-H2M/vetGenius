#!/bin/bash

# Kill any existing Next.js dev server
echo "Stopping any existing Next.js dev server..."
pkill -f "next dev" || true

# Wait a moment for the process to fully terminate
sleep 1

# Start the development server
echo "Starting Next.js development server..."
cd /Users/jan/Documents/GitHub/VetGenius/vetgenius-website
npm run dev