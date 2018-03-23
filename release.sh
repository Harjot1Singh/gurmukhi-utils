#!/usr/bin/env bash

set -o errexit
set -o nounset
set -o pipefail

log_messages=$(git log -1 --format=%s)
major_re=\\bMAJOR\\b
minor_re=\\bMINOR\\b

echo ${log_messages}

args="-n --npm.access=public --no-requireCleanWorkingDir"

if [[ ${log_messages} =~ ${major_re}  ]]; then
    echo "Major Release"
    release-it major ${args}
elif [[ ${log_messages} =~ ${minor_re} ]]; then
    echo "Minor Release"
    release-it minor ${args}
else
    echo "Patch Release"
    release-it patch ${args}
fi
