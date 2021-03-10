#! /bin/bash
ssh root@ampnet.io "rm -rf /var/www/ampnet-documentation-hub/; mkdir /var/www/ampnet-documentation-hub" &&
scp -r ../ampnet-documentation-hub/* root@ampnet.io:/var/www/ampnet-documentation-hub/ 