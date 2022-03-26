#!/bin/bash

cd $(dirname $0)

# api
cd api
npm run dev &

# app
cd ../app
npm run dev &

# go out
cd ../
exit 0
