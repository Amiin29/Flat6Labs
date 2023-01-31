FROM cypress/base:16.13.0
RUN npm install
RUN npx cypress run --env ENV=dev --record --key ab3e25da-c2de-4620-862f-5be1379caa8d