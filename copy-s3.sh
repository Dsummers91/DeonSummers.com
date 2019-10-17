#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

pushd $DIR
vim -c VimwikiAll2HTML -c q ~/vimwiki/index.wiki
aws s3 sync . s3://deonsummers.com --delete
git_sym add .
git_sym commit -m "updates"
git_sym push origin master
popd
