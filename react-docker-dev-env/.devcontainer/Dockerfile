FROM ubuntu

# ENTRYPOINT ["/bin/bash", "-l", "-c"]

RUN apt-get update && apt-get upgrade -y && apt install -y apt-utils && apt-get clean -y

RUN apt install -y curl

# RUN curl -sSL https://get.rvm.io | bash -s
# RUN  /bin/bash -l -c ". /etc/profile.d/rvm.sh && rvm install 2.6.3 && rvm --default use 2.6.3"

RUN apt-get install -y git

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && apt-get install -y nodejs
RUN npm install --global yarn

# RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
# RUN yarn add cypress

RUN apt-get install -y openssh-client
